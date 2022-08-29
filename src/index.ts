import dotenv from 'dotenv'
dotenv.config()

import express, { Response, Request  } from 'express'

const PORT = process.env.PORT || 8989

const app = express()

app.get('/', (req: Request, res: Response) => {
    res.json({
        msg: 'Estas á funcionar'
    })
})

app.listen(PORT, () => {
    console.log(`Servidor iniciado na porta ${PORT}`)
})