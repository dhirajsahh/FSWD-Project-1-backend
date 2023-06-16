const Todo = require("../Models/TodoSchema");
const router = require("express").Router();
router.post("/", async (req, res) => {
  const { email, title, message } = req.body;
  if (!email || !title || !message) {
    res.status(200).json({
      success: false,
      message: "Enter all the details",
    });
  } else {
    try {
      const gettodo = await Todo.findOne({ email });
      const AddingTodo = await Todo.create({
        email,
        title,
        message,
      });
      res.status(200).json({
        success: true,
        message: "The document is added",
      });
      //   console.log(AddingTodo);
    } catch (error) {
      console.log("Error occured during Adding another Todo");
      console.log(error);
      res.json({
        message: "Error occured",
      });
    }
  }
});
module.exports = router;
