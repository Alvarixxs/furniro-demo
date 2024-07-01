const router = require('express').Router()
const { Product } = require('../models')
const {sequelize} = require("../util/db");
const {Op} = require("sequelize");

router.get('/', async (req, res) => {
  const query = req.query.query || '';
  const range = req.query.range || '';

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
    const data = await Product.findOne({
      attributes: [[sequelize.fn('COUNT', sequelize.col('*')), 'totalProducts']],
      where
    });
    res.status(200).json(data);
  } catch (error) {
    console.error("Error fetching total products:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
});

module.exports = router