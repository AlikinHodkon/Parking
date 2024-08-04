const Router = require("express").Router;
const parkingController = require("./controllers/parking-controller");

const router = new Router();

router.get("/parking", parkingController.getParking);
router.post("/booking", parkingController.booking);
router.post("/registration", parkingController.registration);

module.exports = router;