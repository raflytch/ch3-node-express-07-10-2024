const express = require("express");
const router = express.Router();
const carsController = require("../controller/carController");

router.get("/", carsController.getAllCarsData);

router.post("/", carsController.createCarsData);

router.get("/:id", carsController.getCarsById);

router.patch("/:id", carsController.updateCarsById);

router.delete("/:id", carsController.deleteCarsById);

module.exports = router;
