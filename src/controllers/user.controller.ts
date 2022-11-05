import { Request, Response } from 'express';
import { UserService } from '../services';
import { statusCodes } from '../utils/statusCodes';

export default class UserController {
  public service = new UserService();

  public async create(req: Request, res: Response): Promise<void> {
    const userData = req.body;
    const createdUserToken = await this.service.create(userData);
    res.status(statusCodes.CREATED).json({ token: createdUserToken });
  }

  public async login(req: Request, res: Response): Promise<void> {
    const loginData = req.body;
    const userToken = await this.service.login(loginData);
    res.status(statusCodes.OK).json({ token: userToken });
  }
}
