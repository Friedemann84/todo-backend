import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
    content: {
      type: String,
      required: true
    },
    status: {
      type: Boolean
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
});
const Todo = new mongoose.model('todos', todoSchema);

export default Todo;