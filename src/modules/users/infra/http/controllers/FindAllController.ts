import { FindAllService } from '@users/services/FindAllService'
import { Request, Response } from 'express'
import { container } from 'tsyringe'

export default class FindAllController {
  public async show(request: Request, response: Response): Promise<Response> {
    try {
      const service = container.resolve(FindAllService)
      const users = await service.execute()
      return response.json(users)
    } catch (err) {
      throw err
    }
  }
}
