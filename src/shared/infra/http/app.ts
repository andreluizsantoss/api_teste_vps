import 'reflect-metadata'
import { env } from '@shared/env'
import '@shared/container'
import express, { NextFunction, Request, Response } from 'express'
import 'express-async-errors'
import cors from 'cors'
import { routes } from './routes'
import { ZodError } from 'zod'

const app = express()
app.use(cors())
app.use(express.json())
app.use(routes)

app.use(
  (error: Error, request: Request, response: Response, next: NextFunction) => {
    if (error instanceof ZodError) {
      return response
        .status(400)
        .send({ message: 'Validation error', issues: error.format() })
    }

    if (env.NODE_ENV !== 'production') {
      console.log(error)
    } else {
      // TODO: Log para uma ferramenta externa
    }

    return response.status(500).json({
      status: 'error',
      message: 'Internal server error',
    })
  },
)

export { app }
