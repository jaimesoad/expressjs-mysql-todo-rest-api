import { Router } from "express"
import * as ct from "../controllers/lastTodo.controller"

const router = Router()

router.get('/lastTodo', ct.lastTodo)

export default router