import { config } from "dotenv"

config()

export const USER = process.env.USER
export const PASSWD = process.env.PASSWD
export const DBNAME = process.env.DBNAME
export const PORT = Number(process.env.PORT)
