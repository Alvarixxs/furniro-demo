const router = require('express').Router()
const {Newsletter} = require("../models");

router.post("/", async (req, res) => {
  try {
    const newsletter = await Newsletter.create(req.body)
    res.json(newsletter)
  } catch (err) {
    res.status(400).end()
  }
})

module.exports = router