import { config } from "dotenv"

config()

export const USER = process.env.USER
export const PASSWD = process.env.PASSWD
export const DBNAME = process.env.DBNAME
export const HOST = process.env.HOST
export const PORT = Number(process.env.PORT)
export const DBPORT = Number(process.env.DBPORT)
