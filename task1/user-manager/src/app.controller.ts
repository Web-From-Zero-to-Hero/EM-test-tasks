import { Controller } from '@nestjs/common';
import { AppService } from './app.service';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { CreateUserDto } from 'domain/dto/createUserDto';
import { UpdateUserDto } from 'domain/dto/updateUserDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('create-user')
  createUser(createUserDto: CreateUserDto) {
    this.appService.createUser(createUserDto);
  }

  @EventPattern('update-user')
  updateUser(updateUserDto: UpdateUserDto) {
    this.appService.updateUser(updateUserDto);
  }

  @MessagePattern({ cmd: 'get-all-users' })
  getAllUsers() {
    return this.appService.getAllUsers();
  }
}
