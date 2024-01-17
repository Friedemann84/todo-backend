import mongoose from "mongoose";

const todoSchema = new mongoose.Schema({
  todo: {
    type: String,
    required: true
  }
});
const Todo = new mongoose.model('todos', todoSchema);

export default Todo;