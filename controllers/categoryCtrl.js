const Category = require("../models/Category");

const getCategories = async (req, res) => {
  const categories = await Category.find();
  res.status(200).json({ categories });
};

const getCategory = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  const category = await Category.findById(id);
  res.status(200).json({ category });
};

const createCategory = async (req, res) => {
  const name = req.body.name;

  const category = await Category.create({ name });

  res.status(201).json({ category });
};

const updateCategory = async (req, res) => {
  const { categoryId } = req.params;
  const category = await Category.findByIdAndUpdate(categoryId, req.body, {
    new: true,
  });
  res.status(200).json({ category });
};

const deleteCategory = async (req, res) => {
  const { categoryId } = req.params;
  await Category.findByIdAndDelete(categoryId);
  res.status(200).json({ message: "Category Deleted Successfully" });
};

module.exports = {
  getCategories,
  getCategory,
  createCategory,
  updateCategory,
  deleteCategory,
};
