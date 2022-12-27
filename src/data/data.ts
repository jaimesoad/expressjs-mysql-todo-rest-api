import {createPool} from "mysql2/promise"
import {USER, PASSWD, DBNAME, HOST, DBPORT} from "../config";

const db = createPool({
    user: USER,
    password: PASSWD,
    database: DBNAME,
    host: HOST,
    port: DBPORT
})

export default db