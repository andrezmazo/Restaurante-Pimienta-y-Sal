const express = require ("express");
const router = express.Router();

const mainController = require("../controllers/mainController");

router.get("/index", mainController.index);
router.get("/detalleMenu", mainController.detalleMenu);

module.exports =router ;