import { Request, Response } from "express"
import { numToBool } from "../utils/utils"
import db from "../data/data"
import { Todo } from "../models/models"
import {ResultSetHeader} from "mysql2";

export async function loadTodo (req: Request, res: Response) {
    const id = Number(req.params.id)

    if(Number.isNaN(id)) {
        res.status(500).json({"Error": "Entry is not a number"})
        return
    }

    const row = (await db.query('call loadTodo(?)', [id]) as unknown[][][])[0][0][0] as Todo

    if(row === undefined) {
        res.status(500).json({"Error": "Invalid id"})
        return
    }

    row.completed = numToBool(row.completed)

    res.json(row)
}

export async function loadTodos(req: Request, res: Response) {
    const rows = (await db.query('call loadTodos()') as unknown[][])[0][0] as Todo[]

    if(rows === undefined) {
        res.json({})
        return
    }

    for(const row of rows) {
        row.completed = numToBool(row.completed)
    }

    res.json(rows)
}

export async function addTodo(req: Request, res: Response) {
    const { message } = req.body

    const [result] = await db.query('call AddTodo(?)', [message]) as ResultSetHeader[]

    if(result.affectedRows === 0) {
        res.status(500).json({"Error": "Something went wrong."})
        return
    }

    res.send("To-Do added successfully!")
}

export async function toggleTodo(req: Request, res: Response) {
    const id = Number(req.params.id)

    if(Number.isNaN(id)) {
        res.status(500).json({"Error": "Entry is not a number"})
        return
    }

    const [row] = await db.query('call ToggleTodo(?)', [id])

    if(row === undefined) {
        res.status(500).json({"Error": "Invalid id"})
        return
    }

    res.send("To-Do toggled successfully")
}

export async function deleteTodo(req: Request, res: Response) {
    const id = Number(req.params.id)

    if(Number.isNaN(id)) {
        res.status(500).json({"Error": "Entry is not a number"})
        return
    }

    const [row] = await db.query('call DeleteTodo(?)', [id]) as ResultSetHeader[]

    if(row.affectedRows === 0) {
        res.status(500).json({"Error": "Invalid id"})
        return
    }

    res.send("To-Do deleted successfully")
}