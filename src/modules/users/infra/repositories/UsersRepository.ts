import { prisma } from '@shared/infra/http/lib/prisma'
import { IUsersRepository } from '@users/domain/repositories/IUsersRepository'

export class UsersRepository implements IUsersRepository {
  async findAll() {
    const users = await prisma.user.findMany()
    return users
  }
}
