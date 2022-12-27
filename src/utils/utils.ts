import { Query } from "mysql2"

export function numToBool(num: boolean): boolean {
    return num as unknown as number === 1
}
