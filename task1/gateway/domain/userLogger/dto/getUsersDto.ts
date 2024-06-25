import { IsNumberString } from '@nestjs/class-validator';

export class GetUsersDto {
  @IsNumberString()
  id: number;

  @IsNumberString()
  page: number;
}
