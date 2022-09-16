import dotenv from 'dotenv'
dotenv.config()

import express, { Response, Request  } from 'express'
import bodyParser from 'body-parser'
import { productRouter } from './routes/products.routes'
// import { useRoutes } from './routes'

const PORT = process.env.PORT || 8989

const app = express()
app.use(bodyParser.json())
app.use(productRouter)
// useRoutes(app)


/* app.get('/teste', (req: Request, res: Response) => {
    res.json({
        msg: 'Estas á funcionar'
    })
}) */

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
})