import express from 'express';
import { getTodos, createTodo, editTodo, deleteTodo} from '../controller/todosController.js'

const router = express.Router();

router.route('/').post(getTodos)
router.route('/create').post(createTodo);
router.route('/edit').patch(editTodo);
router.route('/delete', deleteTodo);

export default router;
