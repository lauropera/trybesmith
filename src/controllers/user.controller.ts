import { Request, Response } from 'express';
import { UserService } from '../services';
import statusCodes from '../utils/statusCodes';

export default class UserController {
  public userService = new UserService();

  async create(req: Request, res: Response) {
    const userData = req.body;
    const createdUserToken = await this.userService.create(userData);
    res.status(statusCodes.CREATED).json({ token: createdUserToken });
  }
}
