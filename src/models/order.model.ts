import { ResultSetHeader, RowDataPacket } from 'mysql2';
import { IOrder } from '../interfaces/IOrder';
import mysql from './connection';

export default class OrderModel {
  private connection = mysql;

  async getAll(): Promise<IOrder[]> {
    const [rows] = await this.connection.execute<IOrder[] & RowDataPacket[]>(
      `SELECT
      o.id, o.userId, JSON_ARRAYAGG(p.id) productsIds
      FROM Trybesmith.Orders o
      INNER JOIN Trybesmith.Products p
      ON p.orderId = o.id
      GROUP BY o.id;`,
    );
    return rows;
  }

  async create(userId: number) {
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Orders (userId) VALUES (?)',
      [userId],
    );
    return insertId;
  }
}
