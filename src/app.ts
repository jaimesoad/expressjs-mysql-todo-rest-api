import express from "express"
import lastTodo from "./routes/lastTodo.routes"
import todoRouter from "./routes/todo.routes"
const app = express()

app.use(express.json())

app.get('/', (req, res)  => {
    res.json({
        "name": "Jaime",
        "surname": "Acosta"
    })
})

app.use(todoRouter)
app.use(lastTodo)

app.use((req, res, next)  => {
    res.status(404).json({
        "Error": "Endpoint not found."
    })
})

export default app