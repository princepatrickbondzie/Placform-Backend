const router = require("express").Router();

const categoryCtrl = require("../controllers/categoryCtrl");

router.get("/categories", categoryCtrl.getCategories);
router.get("/category/:id", categoryCtrl.getCategory);
router.post("/category", categoryCtrl.createCategory);
router.patch("/category/:id", categoryCtrl.updateCategory);
router.delete("/category/:id", categoryCtrl.deleteCategory);

module.exports = router;
