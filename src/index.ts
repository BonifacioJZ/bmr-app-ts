import express from 'express'
import { router as categoryRouter } from './routes/category.routes'
const app = express()

app.use(express.json())

const PORT = 3000

app.get('/ping',( _, res )=>{
    res.send('pong')
})
app.use(categoryRouter)
app.listen(PORT, ()=>{
    console.log(`Server Running on port ${PORT}`)
})
