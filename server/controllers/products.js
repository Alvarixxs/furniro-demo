const router = require('express').Router()
const { Product } = require('../models')
const {Op} = require("sequelize");

router.get('/', async (req, res) => {
  const currentPage = parseInt(req.query.currentPage) || 1;
  const numItems = parseInt(req.query.numItems) || 10;
  const query = req.query.query || '';
  const range = req.query.range || '';

  const offset = (currentPage - 1) * numItems;
  const where = {
    [Op.and] : [
      {
        range: {
          [Op.iLike]: `%${range}%`
        }
      },
      {
        [Op.or]: [
          {
            name: {
              [Op.iLike]: `%${query}%`
            }
          },
          {
            excerpt: {
              [Op.iLike]: `%${query}%`
            }
          }
        ]
      }
    ]
  }

  try {
    const products = await Product.findAll({
      where,
      limit: numItems,
      offset: offset
    });
    res.status(200).json(products);
  } catch (error) {
    console.error("Error fetching products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

router.post('/', async (req, res) => {
  const product = Product.create(req.body);
  res.json(product)
})

module.exports = router