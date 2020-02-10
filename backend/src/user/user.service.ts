import { Model } from 'mongoose';
import {
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
  Logger,
} from '@nestjs/common';
import { User, UserSignIn } from './Dto/user.dto';
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

  async signIn(user: UserSignIn): Promise<String>{
    const {email, password } = user; 
    const userData = await this.userModel.findOne({email}).exec()

      const isPasswordCorrect = await bcrypt.compare(password, userData.password)
      if(isPasswordCorrect){
        //TODO: return token
        return 'Success'
      }  else {
        //TODO: return and throw error
        return 'Error'
      }
   
   
  }
}
