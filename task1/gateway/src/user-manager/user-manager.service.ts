import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
//import { CreateUserEvent } from 'domain/events/createUserEvent';
import { CreateUserDto } from 'domain/userManager/dto/createUserDto';
import { UpdateUserDto } from 'domain/userManager/dto/updateUserDto';

@Injectable()
export class UserManagerService {
  constructor(
    @Inject('USER-MANAGER') private readonly userManagerClient: ClientProxy,
  ) {}

  createUser(dto: CreateUserDto) {
    this.userManagerClient.emit('create-user', dto);
  }

  updateUser(dto: UpdateUserDto) {
    this.userManagerClient.emit('update-user', dto);
  }

  getAllUsers() {
    return this.userManagerClient.send({ cmd: 'get-all-users' }, {});
  }
}
