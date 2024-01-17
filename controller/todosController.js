import Todo from "../models/todoModel.js";

const getTodos = async (req, res) => {
  try {
    const allTodos = await Todo.find();
    res.status(200).send(allTodos) //! 2 Controller für 'todo' und 'dusty'?
  } catch (err) {
    next(err)
  }
};


const createTodo = (req, res) => {
  const createdTodo = req.body; //! kommt jetzt aus frontend
  res.status(201).send('Todo created.');           
};


const editTodo = (req, res) => {
  
};


const deleteTodo = (req, res) => {

};
