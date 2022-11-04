import { ProductModel } from '../models';
import { IProduct, INewProduct } from '../interfaces/IProduct';

export default class ProductService {
  public product = new ProductModel();

  async create(product: INewProduct): Promise<IProduct> {
    return this.product.create(product);
  }
}
