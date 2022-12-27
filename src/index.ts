import app from "./app"
import { PORT } from "./config";

app.listen(PORT, () => {
    // tslint:disable-next-line:no-console
    console.log(`Listening to http://localhost:${PORT}`)
})
