import express from 'express'
const cors = require('cors')
import { Router, Request, Response } from 'express';
const locationRouter = require('./modules/location/service/location.Services')

const app = express()

const route = Router()

app.use(cors(), express.json())

app.use(express.json())

route.get('/', (req: Request, res: Response) => {
  res.json({ message: 'Wow! My first project in TypeScript!!!' })
})

//Rota para os arquivos vindo do ESP32
app.use('/gps', locationRouter)

app.use(route)

const PORT = 9000

app.listen(PORT, () => `Server running on port ${PORT}`)