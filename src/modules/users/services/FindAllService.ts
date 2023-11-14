import { IUser } from '@users/domain/models/IUser'
import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'
import { inject, injectable } from 'tsyringe'

@injectable()
export class FindAllService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute(): Promise<IUser[]> {
    const users = await this.usersRepository.findAll()
    return users
  }
}
