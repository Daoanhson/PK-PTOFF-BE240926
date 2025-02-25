const express = require('express');
const router = express.Router();
const fs = require('fs');
const path = require('path');

// path to albums.json file
const albumsFilePath = path.join(__dirname, '../dev-data/albums.json');

// Read data from albums.json file
const readAlbums = () => {
    const data = fs.readFileSync(albumsFilePath, 'utf-8');
    return JSON.parse(data);
}

// Write data to albums.json file
const writeAlbums = (data) => {
    fs.writeFileSync(albumsFilePath, JSON.stringify(data));
}

// 1. GET /api/v1/albums
router.get('/albums', (req, res) => {
    const { userId, page = 1, limit = 10, sort, order = 'asc' } = req.query;
    const albums = readAlbums();
    findAlbums = albums;

    // find album by userId
    if (userId) {
        findAlbums = findAlbums.filter(album => album.userId === parseInt(userId));
    }

    // Sort
    if (sort) {
        findAlbums.sort((a, b) => {
            if (order === 'asc') {
                return a[sort] > b[sort] ? 1 : -1;
            } else {
                return a[sort] < b[sort] ? 1 : -1;
            }
        });
    }

    // pagination
    const startIndex = (page - 1) * limit;
    const endIndex = startIndex + parseInt(limit, 10);
    const paginationAlbums = findAlbums.slice(startIndex, endIndex);

    res.json({
        page: parseInt(page, 10),
        limit: parseInt(limit, 10),
        total: findAlbums.length,
        albums: paginationAlbums
    });
});
// 2. GET /api/v1/albums/:id
router.get('/albums/:id', (req, res) => {
    const albums = readAlbums();
    const album = albums.find(album => album.id === parseInt(req.params.id));
    if (!album) return res.status(404).json({ message: 'Album not found' });

    res.json(album);
});

// 3. POST /api/v1/albums
router.post('/albums', (req, res) => {
    const { userId, title } = req.body;
    const albums = readAlbums();

    // check if userId and title are provided
    const existsAlbum = albums.find(album => album.userId === userId && album.title === title);
    if (existsAlbum) return res.status(400).json({ message: 'Album already exists' });
// create new album

const newAlbum = {
    id: albums.length + 1,
    userId,
    title
};
albums.push(newAlbum);
writeAlbums(albums);
res.status(201).json({message: 'Album created', album: newAlbum});

});

// 4. PUT /api/v1/albums/:id
router.put('/albums/:id', (req, res) => {
    const { userId, title } = req.body;
    const albums = readAlbums();

    // check if album exists
    const album = albums.find(album => album.id === parseInt(req.params.id));
    if (!album) return res.status(404).json({ message: 'Album not found' });

    // update album
    album.userId = userId;
    album.title = title;
    writeAlbums(albums);
    res.json({ message: 'Album updated', album });
});

// 5. DELETE /api/v1/albums/:id 
router.delete('/albums/:id', (req, res) => {
    const albums = readAlbums();
    const albumIndex = albums.findIndex(album => album.id === parseInt(req.params.id));
    if (albumIndex === -1) return res.status(404).json({ message: 'Album not found' });

    albums.splice(albumIndex, 1);
    writeAlbums(albums);
    res.json({ message: 'Album deleted' });
});

module.exports = router;