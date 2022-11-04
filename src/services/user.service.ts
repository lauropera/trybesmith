import { UserModel } from '../models';
import { INewUser } from '../interfaces/IUser';
import TokenUtils from '../utils/tokenUtils';

export default class UserService {
  public user = new UserModel();

  public tokenUtils = new TokenUtils();

  async create(userData: INewUser): Promise<string> {
    const user = await this.user.create(userData);
    const token = this.tokenUtils.generateToken(user);
    return token;
  }
}
