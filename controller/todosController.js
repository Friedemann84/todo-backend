import Todo from "../models/todoModel.js";

const getTodos = async (req, res) => {
  try {
    const { user } = req.body;
    const allTodos = await Todo.find({ user });
    res.status(200).send(allTodos);
  } catch (err) {
    next(err);
  }
};


const createTodo = async (req, res, next) => {
  try {
    console.log(req.body);
    const todo = req.body;
    const createdTodo = await Todo.create(todo);
    res.status(201).send("Todo created.");
  } catch (err) {
    next(err);
  }
};


const editTodo = async (req, res, next) => {
  try {
    const { _id, status } = req.body;
    const editedTodo = await Todo.findByIdAndUpdate(_id, {
      status: status
    });
    res.status(202).send("Todo updated.");
  } catch (err) {
    next(err);
  }
};


const deleteTodo = async (req, res) => {
  const { id } = req.params;
  const deletedTodo = await Todo.delete();
};

export { getTodos, createTodo, editTodo, deleteTodo };
