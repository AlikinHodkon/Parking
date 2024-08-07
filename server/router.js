const Router = require("express").Router;
const parkingController = require("./controllers/parking-controller");
const userController = require("./controllers/user-controller");

const router = new Router();

router.get("/parking", parkingController.getParking);
router.post("/booking", parkingController.booking);
router.post("/registration", userController.registration);
router.post("/login", userController.login);
router.post("/logout", userController.logout)

module.exports = router;