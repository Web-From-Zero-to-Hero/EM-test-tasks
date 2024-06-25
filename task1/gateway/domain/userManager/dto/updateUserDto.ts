import { IsNumber, IsObject, Min } from '@nestjs/class-validator';

export class UpdateUserDto {
  @IsNumber()
  @Min(1)
  id: number;

  @IsObject()
  fields: object;
}
