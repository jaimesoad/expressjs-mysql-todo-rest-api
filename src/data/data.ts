import {createPool} from "mysql2/promise"
import {USER, PASSWD, DBNAME} from "../config";

const db = createPool({
    user: USER,
    password: PASSWD,
    database: DBNAME
})

export default db