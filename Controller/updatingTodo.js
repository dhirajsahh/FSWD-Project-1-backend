const Todo = require("../Models/TodoSchema");
const router = require("express").Router();
router.put("/", async (req, res) => {
  const { id, title, message } = req.body;

  try {
    const updateddata = await Todo.findByIdAndUpdate(id, {
      title,
      message,
      updateAt: Date.now(),
    });
    // console.log(updateddata) return the updated data
    if (!updateddata) {
      return res.status(200).json({
        success: true,
        message: "Item updated successfully",
      });
    }
    if (updateddata) {
      return res.status(200).json({
        success: true,
        message: "Data updated Successfully",
      });
    }
  } catch (error) {
    console.log(`error occured during updating the document ${error}`);
    res.status(400).json({
      success: false,
      message: "Error occured during updating the Data",
    });
  }
});
module.exports = router;
