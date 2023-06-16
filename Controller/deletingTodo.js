const Todo = require("../Models/TodoSchema");
const router = require("express").Router();
router.delete("/", async (req, res) => {
  const { id } = req.body;
  const deleteTodo = await Todo.findByIdAndDelete(id);
  //   console.log(deleteTodo) return the deleted data
  if (!deleteTodo) {
    return res.status(200).json({
      success: false,
      message: "This item does not exist",
    });
  }
  if (deleteTodo) {
    return res.status(200).json({
      success: true,
      message: "Item deleted successfully",
    });
  }
});
module.exports = router;
