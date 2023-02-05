import "reflect-metadata"
import express from "express"
import clientRoute from "./routes/client.routes"
import sessionRoutes from "./routes/sessions.routes"
import contactsRoute from "./routes/contacts.routes"
import handleErrorMiddleware from "./middlewares/handleError.middleWare"


const app = express()

app.use(express.json())
app.use('/client', clientRoute)
app.use('/client', sessionRoutes)
app.use('/client', contactsRoute)


app.use(handleErrorMiddleware)
export default app
