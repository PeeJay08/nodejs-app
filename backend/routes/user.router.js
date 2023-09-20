const express = require("express");
const router = express.Router();
const User = require("../objects/user");



router.post("/register", async (req, res) => {

  try {
    const user = new User();
    const body = req.body;
    const savedUser = await user.createUser(body);
    res.status(200).json(savedUser);
  } catch (err) {
    console.log(err);
    res.status(400).json({ error: err.message });
  }
});



module.exports = router;
