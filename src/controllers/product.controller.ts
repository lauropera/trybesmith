import { Request, Response } from 'express';
import ProductService from '../services/product.service';
import statusCodes from '../utils/statusCodes';

export default class ProductController {
  public productService = new ProductService();

  async create(req: Request, res: Response) {
    const product = req.body;
    const createdProduct = await this.productService.create(product);
    res.status(statusCodes.CREATED).json(createdProduct);
  }
}