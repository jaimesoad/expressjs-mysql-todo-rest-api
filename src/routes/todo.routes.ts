import { Router } from "express"
import * as ct from "../controllers/todo.controller"

const router = Router()


router.post('/todo', ct.addTodo)
router.get('/todo', ct.loadTodos)
router.get('/todo/:id', ct.loadTodo)
router.put('/todo/:id', ct.toggleTodo)
router.delete('/todo/:id', ct.deleteTodo)

export default router