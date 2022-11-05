import { UserModel } from '../models';
import { INewUser, ILogin, IUser } from '../interfaces/IUser';
import TokenUtils from '../utils/tokenUtils';
import validator from '../utils/validations/validator';
import { loginSchema } from '../utils/validations/schema';
import HttpException from '../utils/http.exception';

export default class UserService {
  public model = new UserModel();

  public tokenService = new TokenUtils();

  async validateLogin(login: ILogin): Promise<IUser> {
    const { username, password } = login;
    const user: IUser | undefined = await this.model.getByUsername(username);

    if (!user || user.password !== password) {
      throw new HttpException(401, 'Username or password invalid');
    }
    return user;
  }

  public async create(userData: INewUser): Promise<string> {
    const user = await this.model.create(userData);
    const token = this.tokenService.generateToken(user);
    return token;
  }

  public async login(loginData: ILogin): Promise<string> {
    await validator(loginSchema, loginData);
    const user: IUser | undefined = await this.validateLogin(loginData);
    const token = this.tokenService.generateToken(user);
    return token;
  }
}
