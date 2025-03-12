const categoryService = require('../services/category.service')

exports.getCategories = async (req, res) => {
    const filter = req.query;
    const categories = await categoryService.getCategories(filter);
    res.json(categories);
};

exports.getCategoryById = async (req, res) => {
    const category = await categoryService.getCategoryById(req.params.id);
    if (!category) {
        return res.status(404).json({ message: "Category not found" });
    }
    res.json(category);
};

exports.getBooksByCategoryId = async (req, res) => {
    const categoryBooks = await categoryService.getBooksByCategoryId(req.params.id);
    if (!categoryBooks) {
        return res.status(404).json({ message: "Category not found" });
    }
    res.json(categoryBooks);
};

exports.createCategory = async (req, res) => {
    const category = req.body;
    await categoryService.createCategory(category);
    res.json({ message: "Create successfully" });
};

exports.updateCategory = async (req, res) => {
    const updated = await categoryService.updateCategory(req.params.id, req.body);
    if (!updated) {
        return res.status(404).json({ message: "Category not found" });
    }
    res.json({ message: "Update successfully" });
};

exports.deleteCategory = async (req, res) => {
    const deleted = await categoryService.deleteCategory(req.params.id);
    if (!deleted) {
        return res.status(404).json({ message: "Category not found" });
    }
    res.json({ message: "Delete successfully" });
};