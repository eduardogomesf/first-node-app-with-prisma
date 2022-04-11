import express from 'express'
import { routes } from './routes/routes'

const app = express()

// middlewares
app.use(express.json())
app.use(routes)

app.listen(3000, () => console.log(`Server running on port 3000`))