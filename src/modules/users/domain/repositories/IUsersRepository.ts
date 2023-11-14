import { IUser } from '../models/IUser'

export interface IUsersRepository {
  findAll(): Promise<IUser[]>
}
