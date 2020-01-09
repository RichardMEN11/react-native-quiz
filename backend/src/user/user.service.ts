import { Model } from 'mongoose';
import {
  Injectable,
  InternalServerErrorException,
  Logger,
} from '@nestjs/common';
import { User } from './Dto/user.dto';
import { InjectModel } from '@nestjs/mongoose';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  private logger = new Logger('UserService');
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async signUp(user: User): Promise<User> {
    const { email, password, username, questionAnswered } = user;

    //Saving user to DB
    try {
      const hashedPassword = await bcrypt.hash(password, 10);
      const newUser = new this.userModel({
        email,
        password: hashedPassword,
        username,
        questionAnswered,
      });
      this.logger.verbose('Successfully saved user');
      return await newUser.save();
    } catch (error) {
      throw new InternalServerErrorException();
      this.logger.error(error);
    }
  }
}
