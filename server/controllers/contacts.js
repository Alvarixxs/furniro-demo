const router = require('express').Router()
const {Contact} = require("../models");

router.post("/", async (req, res) => {
  try {
    const contact = await Contact.create(req.body)
    res.json(contact)
  } catch (err) {
    res.status(400).end()
  }
})

module.exports = router