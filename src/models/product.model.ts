import { ResultSetHeader, RowDataPacket } from 'mysql2';
import mysql from './connection';
import { INewProduct, IProduct } from '../interfaces/IProduct';

export default class ProductModel {
  private connection = mysql;

  async create(product: INewProduct): Promise<IProduct> {
    const { name, amount } = product;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Products (name, amount) VALUES (?, ?)',
      [name, amount],
    );
    return { id: insertId, ...product };
  }

  async getAll(): Promise<IProduct[]> {
    const [rows] = await this.connection.execute<IProduct[] & RowDataPacket[]>(
      'SELECT * FROM Trybesmith.Products',
    );
    return rows;
  }
}
