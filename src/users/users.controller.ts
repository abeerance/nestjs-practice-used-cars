import { Body, Controller, Post } from '@nestjs/common';
import { CreateUserDto } from './dtos/create-user.dto';

@Controller('auth')
export class UsersController {
  // route for signUp
  @Post('/signup')
  createUser(
    //import body of create-user DTO
    @Body() body: CreateUserDto,
  ) {}
}
