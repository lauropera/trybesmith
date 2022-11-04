import { Request, Response } from 'express';
import { ProductService } from '../services';
import statusCodes from '../utils/statusCodes';

export default class ProductController {
  public productService = new ProductService();

  async create(req: Request, res: Response) {
    const product = req.body;
    const createdProduct = await this.productService.create(product);
    res.status(statusCodes.CREATED).json(createdProduct);
  }

  async getAll(_req: Request, res: Response) {
    const products = await this.productService.getAll();
    res.status(statusCodes.OK).json(products);
  }
}
