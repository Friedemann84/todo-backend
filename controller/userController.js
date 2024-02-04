import User from "../models/userModel.js";
import bcrypt from "bcrypt";


const createUser = async (req, res, next) => {
  try {
    console.log(req.body);
    const { username, email, password } = req.body;
    const hashedPW = await bcrypt.hash(password, 12);
    const createdUser = await User.create({
      username,
      password: hashedPW,
      email,
    });
    res.status(201).send({ username, email, id: createdUser._id });
  } catch (err) {
    next(err);
  }
};

const login = async (req, res, next) => {
  try {
    const {username, password} = req.body;
    const user = await User.findOne({username});
    if(!user) {
      const error = new Error('Username doesn`t exist.');
      error.status = 401;
      throw error;
    }
    const match = await bcrypt.compare(password, user.password);
    if (!match) {
      const error = new Error('Wrong password. Please try again.');
      error.status = 401;
      throw error;
    }
    res.send('Login successfull.');
  } catch (err) {
    next(err)
  }
};

const deleteUser = async (req, res, next) => {
  try {
    const {username} = req.params; 
    const deletedUser = await User.findOneAndDelete({username});
    if(!deletedUser) {
      const error = new Error('User doesn`t exist.');
      error.status = 404;
      throw error;
    }
    res.status(200).send(`User '${username}' has been deleted.`);
  } catch (err) {
    next(err);
  }
};

export { createUser, login, deleteUser };