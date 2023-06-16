const User = require("../Models/UserSchema");
const bcrypt = require("bcrypt");
const router = require("express").Router();
router.post("/", async (req, res) => {
  try {
    const { name, email, phone, password } = req.body;
    if (!email || !name || !password || !phone) {
      return res.status(200).json({
        success: false,
        message: "Enter the  all the information",
      });
    }
    const existinguser = await User.findOne({ email });
    if (existinguser) {
      return res.status(200).json({
        success: false,
        message: "User already exists ",
      });
    }
    const newuser = await User.create({
      name,
      email,
      password: await bcrypt.hash(password, 10),
      phone,
    });
    res.status(201).json({
      success: true,
      message: "user added succesfully",
    });
  } catch (error) {
    console.log(error);
    console.log("error occurred during creating the user");
    return res.status(201).json({
      success: false,
      message: "error occurred during creating the user",
    });
  }
});
module.exports = router;
