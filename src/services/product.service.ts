import { ProductModel } from '../models';
import { IProduct, INewProduct } from '../interfaces/IProduct';
import validator from '../utils/validations/validator';
import { newProductSchema } from '../utils/validations/schema';

export default class ProductService {
  public product = new ProductModel();

  async create(product: INewProduct): Promise<IProduct> {
    await validator(newProductSchema, product);
    return this.product.create(product);
  }

  async getAll(): Promise<IProduct[]> {
    const products = await this.product.getAll();
    return products;
  }
}
