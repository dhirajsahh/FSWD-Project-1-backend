//user login ko baki xa sab kura

const User = require("../Models/UserSchema");
const bcrypt = require("bcrypt");
const router = require("express").Router();
router.post("/", async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    res.status(200).json({
      success: false,
      message: "Enter the all the details ",
    });
  } else {
    try {
      const existinguser = await User.findOne({ email });
      if (!existinguser) {
        return res.status(200).json({
          success: false,
          message: "You dont have accout.create your account first",
        });
      }

      const match = await bcrypt.compare(password, existinguser.password);
      if (match) {
        res.status(200).json({
          success: true,
          success: true,
          message: "User loged in successfully",
        });
      } else {
        res.json({
          success: false,
          message: "Enter the correct password",
        });
      }
    } catch (error) {
      console.log("The error occured while finding the user");
      console.log(error);
    }
  }
});
module.exports = router;
