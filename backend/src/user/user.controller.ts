import { UserService } from './user.service';
import { User } from './Dto/user.dto';
import { Controller, Post, Body, Logger } from '@nestjs/common';

@Controller('user')
export class UserController {
  private logger = new Logger('UserController');

  constructor(private userService: UserService) {}

  @Post()
  async signUp(@Body() user: User): Promise<User> {
    this.logger.verbose(`Creating a new User`);
    return await this.userService.signUp(user);
  }
}