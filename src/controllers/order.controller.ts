import { Request, Response } from 'express';
import { OrderService } from '../services';
import { statusCodes } from '../utils/statusCodes';

export default class OrderController {
  public orderService = new OrderService();

  async getAll(_req: Request, res: Response) {
    const orders = await this.orderService.getAll();
    res.status(statusCodes.OK).json(orders);
  }
}
