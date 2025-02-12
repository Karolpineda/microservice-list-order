const express = require("express");
const router = express.Router();
const orderController = require("../controllers/orderController");

// Ruta para obtener las opciones (datos de usuarios, productos y workshops)
router.get("/options", orderController.getOptions);

// Ruta para obtener todas las órdenes
router.get("/list", orderController.getAllOrders);

module.exports = router;
