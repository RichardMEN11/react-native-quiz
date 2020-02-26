import { UserService } from './user.service';
import { User, UserSignIn, UpdatedUser } from './Dto/user.dto';
import {
  Controller,
  Post,
  Body,
  Logger,
  Get,
  Param,
  Put,
} from '@nestjs/common';

@Controller('user')
export class UserController {
  private logger = new Logger('UserController');

  constructor(private userService: UserService) {}

  @Post()
  async signUp(@Body() user: User): Promise<User> {
    this.logger.verbose(`Creating a new User`);
    return await this.userService.signUp(user);
  }

  @Post('signIn')
  async singIn(@Body() user: UserSignIn): Promise<User> {
    return await this.userService.signIn(user);
  }

  @Get(':id')
  async getUserById(@Param() params): Promise<User> {
    return await this.userService.getUserById(params.id);
  }

  @Put(':id')
  async updateUser(
    @Body() updatedUser: UpdatedUser,
    @Param() params,
  ): Promise<User> {
    return this.userService.updateUser(updatedUser, params.id);
  }
}
