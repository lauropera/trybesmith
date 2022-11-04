import { ResultSetHeader } from 'mysql2';
import { INewUser, IUser } from '../interfaces/IUser';
import mysql from './connection';

export default class UserModel {
  private connection = mysql;

  async create(userData: INewUser): Promise<IUser> {
    const { username, classe, level, password } = userData;
    const [{ insertId }] = await this.connection.execute<ResultSetHeader>(
      `INSERT INTO Trybesmith.Users (username, classe, level, password)
      VALUES (?, ?, ?, ?)`,
      [username, classe, level, password],
    );
    return { id: insertId, ...userData };
  }
}
