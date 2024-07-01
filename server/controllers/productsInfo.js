const router = require('express').Router()
const { Product } = require('../models')
const {sequelize} = require("../util/db");

router.get('/', async (req, res) => {
  try {
    const data = await Product.findOne({
      attributes: [[sequelize.fn('COUNT', sequelize.col('*')), 'totalProducts']]
    });
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching total products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router