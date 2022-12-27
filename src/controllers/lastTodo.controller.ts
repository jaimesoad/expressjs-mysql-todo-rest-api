import { Request, Response } from "express"
import { numToBool } from "../utils/utils"
import db from "../data/data"
import { Todo } from "../models/models"

export async function lastTodo(req: Request, res: Response) {
    const row = (await db.query('call GetLastTodo()') as unknown[][][])[0][0][0] as Todo

    if(row === undefined) {
        res.json({})
        return
    }

    row.completed = numToBool(row.completed)

    res.json(row)
}