import { Controller, Get, Query } from '@nestjs/common';
import { UserLoggerService } from './user-logger.service';
import { GetUsersDto } from 'domain/userLogger/dto/getUsersDto';

@Controller('user-logger')
export class UserLoggerController {
  constructor(private readonly userLoggerService: UserLoggerService) {}

  @Get('users')
  getUsers(@Query() getUsersDto: GetUsersDto) {
    return this.userLoggerService.getUsersById(getUsersDto);
  }
}
