const express = require('express');
const bodyParser = require('body-parser');
const userRoutes = require('./routers/user.router');
const albumRoutes = require('./routers/album.router');
const app = express();
const port = 3000;

app.use(bodyParser.json());
// Sử dụng routes
app.use('/api/v1', userRoutes);
app.use('/api/v1', albumRoutes);

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});