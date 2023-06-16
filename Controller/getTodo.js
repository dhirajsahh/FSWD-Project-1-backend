const Todo = require("../Models/TodoSchema");
const router = require("express").Router();

router.post("/", async (req, res) => {
  const { email, title } = req.body;
  if (!email) {
    return res.status(200).json({
      success: false,
      message: "Enter Your email",
    });
  }
  const getTodo = await Todo.find({ email });
  // console.log(getTodo);
  // getTodo.toObject();

  if (!getTodo) {
    return res.status(200).json({
      success: false,
      message: "You dont have the Anytodo",
    });
  } else {
    return res.status(200).json({
      getTodo,
    });
  }
});
module.exports = router;
