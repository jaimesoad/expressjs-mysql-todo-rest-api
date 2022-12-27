export interface Todo {
    id: number,
    message: string,
    completed: boolean
}

export interface ResultSetHeader {
    fieldCount: number,
    affectedRows: number,
    insertId: number,
    info: string,
    serverStatus: number,
    warningStatus: number
}
