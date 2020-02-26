import { Model } from 'mongoose';
import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { User, UserSignIn, UpdatedUser } from './Dto/user.dto';
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
        questionAnswered: 0,
        correctAnswers: 0,
        wrongAnswers: 0,
        gamesPlayed: 0,
      });
      this.logger.verbose('Successfully saved user');
      return await newUser.save();
    } catch (error) {
      throw new InternalServerErrorException();
      this.logger.error(error);
    }
  }

  async signIn(user: UserSignIn): Promise<User> {
    const { email, password } = user;
    const userData = await this.userModel.findOne({ email }).exec();

    const isPasswordCorrect = await bcrypt.compare(password, userData.password);
    if (isPasswordCorrect) {
      //TODO: return token
      return userData;
    } else {
      //TODO: return and throw error
      throw new UnauthorizedException();
    }
  }

  async getUserById(id: string): Promise<User> {
    return this.userModel.findOne({ _id: id });
  }

  async updateUser(updateUser: UpdatedUser, id: string): Promise<User> {
    try {
      return await this.userModel
        .findByIdAndUpdate(
          id,
          {
            $inc: {
              gamesPlayed: 1,
              questionAnswered: updateUser.questionAnswered,
              correctAnswers: updateUser.correctAnswers,
              wrongAnswers: updateUser.wrongAnswers,
            },
          },
        )
        .exec();
    } catch (error) {
      this.logger.error(error.stack);
    }
  }
}
