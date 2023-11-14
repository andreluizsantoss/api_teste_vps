import { container } from 'tsyringe'
import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'
import { UsersRepository } from '@users/infra/repositories/UsersRepository'
import FindAllController from '@users/infra/http/controllers/FindAllController'

container.registerSingleton<IUsersRepository>(
  'UsersRepository',
  UsersRepository,
)
container.registerSingleton('FindAllController', FindAllController)
