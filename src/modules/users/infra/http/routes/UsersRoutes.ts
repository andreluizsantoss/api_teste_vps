import { Router } from 'express'
import { container } from 'tsyringe'
import FindAllController from '../controllers/FindAllController'

const usersRouter = Router()
const findAllController = container.resolve(FindAllController)

usersRouter.get('/', findAllController.show)

export default usersRouter
