import { IsEmail, IsString } from 'class-validator';

// create user DTO
export class CreateUserDto {
  @IsEmail()
  email: string;

  @IsString()
  password: string;
}
