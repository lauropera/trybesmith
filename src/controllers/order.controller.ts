import { Request, Response } from 'express';
import { OrderService } from '../services';
import { statusCodes } from '../utils/statusCodes';

export default class OrderController {
  public orderService = new OrderService();

  public async getAll(_req: Request, res: Response): Promise<void> {
    const orders = await this.orderService.getAll();
    res.status(statusCodes.OK).json(orders);
  }

  public async create(req: Request, res: Response): Promise<void> {
    const { productsIds, user } = req.body;
    const userId = user.id;
    const newOrder = await this.orderService.create(userId, productsIds);
    res.status(statusCodes.CREATED).json(newOrder);
  }
}
