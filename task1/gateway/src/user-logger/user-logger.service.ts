import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { GetUsersDto } from 'domain/userLogger/dto/getUsersDto';

@Injectable()
export class UserLoggerService {
  constructor(
    @Inject('USER-LOGGER') private readonly userLoggerClient: ClientProxy,
  ) {}

  getUsersById(dto: GetUsersDto) {
    return this.userLoggerClient.send({ cmd: 'get-users-by-id' }, dto);
  }
}
