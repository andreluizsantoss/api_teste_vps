import usersRouter from '@users/infra/http/routes/UsersRoutes'
import { Router } from 'express'

const routes = Router()

routes.use('/users', usersRouter)

export { routes }
