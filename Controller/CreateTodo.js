const Todo = require("../Models/TodoSchema");
const router = require("express").Router();
router.post("/", async (req, res) => {
  const { email, title, message } = req.body;
  if (!email) {
    return res.status(200).json({
      success: false,
      message: "Enter the email",
    });
  }
  if (!title) {
    return res.status(200).json({
      success: false,
      message: "Enter the title",
    });
  }
  if (!message) {
    return res.status(200).json({
      success: false,
      message: "Enter the message",
    });
  }
  try {
    const information = await Todo.create({
      email,
      title,
      message,
    });
    res.status(200).json({
      success: true,
      message: "Todo Information is saved succesfully",
    });
    // console.log(information);
  } catch (error) {
    console.log("error occured during storing the todo information");
    console.log(error);
    res.status(200).json({
      success: false,
      message: "error occured during storing the todo information",
    });
  }
});
module.exports = router;
