const router = require("express").Router();
const upload = require("../upload/upload");
const businessCtrl = require("../controllers/businessCtrl");

router.get("/businesses", businessCtrl.getBusinesses);
router.get("/business/:id", businessCtrl.getBusiness);
router.post("/business", upload.single("picture"), businessCtrl.createBusiness);
router.patch("/business/:id", businessCtrl.updateBusiness);
router.delete("/business/:id", businessCtrl.deleteBusiness);

module.exports = router;
