import { IsEmail, IsString, Length } from '@nestjs/class-validator';

export class CreateUserDto {
  @IsString()
  @Length(1, 100)
  username: string;

  @IsString()
  @Length(2, 50)
  firstName: string;

  @IsString()
  @Length(1, 50)
  lastName: string;

  @IsEmail()
  @Length(1, 100)
  email: string;
}
