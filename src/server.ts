import 'express-async-errors'
import express, { NextFunction, Request, Response } from 'express'
import { routes } from './routes/routes'

const app = express()

// middlewares
app.use(express.json())
app.use(routes)

// error handler
app.use((err: Error, request: Request, response: Response, next: NextFunction) => {
    if (err instanceof Error) {
        return response.status(400).json({ message: err.message })
    }

    return response.status(500).json({ message: 'Internal server error' })
})

app.listen(3000, () => console.log(`Server running on port 3000`))