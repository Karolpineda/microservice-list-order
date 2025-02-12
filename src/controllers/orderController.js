const Order = require("../models/OrderModel");
const User = require("../models/userModel");
const Product = require("../models/productModel");
const Workshop = require("../models/workshopModel");

// Obtiene los datos de usuarios, productos y workshops para mostrarlos en el front
exports.getOptions = async (req, res) => {
  try {
    const [users, products, workshops] = await Promise.all([
      User.findAll(),
      Product.findAll(),
      Workshop.findAll(),
    ]);

    res.status(200).json({
      users,
      products,
      workshops,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};


// Obtiene todas las órdenes de la base de datos
exports.getAllOrders = async (req, res) => {
  try {
    // Obtener todas las órdenes
    const orders = await Order.findAll();

    if (!orders || orders.length === 0) {
      return res.status(404).json({ message: "No se encontraron órdenes" });
    }

    // Devolver las órdenes encontradas
    res.status(200).json({
      message: "Órdenes obtenidas exitosamente",
      orders,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
