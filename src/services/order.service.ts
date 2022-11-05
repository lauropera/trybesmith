import { OrderModel, ProductModel } from '../models';
import { IOrder } from '../interfaces/IOrder';
import validator from '../utils/validations/validator';
import { newOrderSchema } from '../utils/validations/schema';

export default class OrderService {
  public model = new OrderModel();

  public productModel = new ProductModel();

  async getAll(): Promise<IOrder[]> {
    const orders = await this.model.getAll();
    return orders;
  }

  async create(userId: number, productsIds: number[]): Promise<IOrder> {
    await validator(newOrderSchema, { productsIds });

    const orderId: number = await this.model.create(userId);
    const insertSaleId = productsIds.map(async (productId) => {
      await this.productModel.insertOrderId(orderId, productId);
    });
    await Promise.all(insertSaleId);

    return { userId, productsIds };
  }
}
