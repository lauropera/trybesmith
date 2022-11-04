import { OrderModel } from '../models';
import { IOrder } from '../interfaces/IOrder';

export default class OrderService {
  public order = new OrderModel();

  async getAll(): Promise<IOrder[]> {
    const orders = await this.order.getAll();
    return orders;
  }
}
