const router = require('express').Router()
const { Product } = require('../models')

router.get('/', async (req, res) => {
  const products = await Product.findAll({});
  res.status(200).json(products);
})

router.post('/', async (req, res) => {
  const product = Product.create(req.body);
  res.json(product)
})

module.exports = router