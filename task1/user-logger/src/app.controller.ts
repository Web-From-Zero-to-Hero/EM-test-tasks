import { Controller } from '@nestjs/common';
import { EventPattern, MessagePattern } from '@nestjs/microservices';
import { AppService } from './app.service';
import { GetUsersByIdDto } from 'domain/dto/getUsersByIdDto';
import { UserCreatedDto } from 'domain/dto/userCreatedDto';
import { UserUpdatedDto } from 'domain/dto/userUpdatedDto';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @EventPattern('user-created')
  handleUserCreated(userCreatedDto: UserCreatedDto) {
    this.appService.handleUserCreated(userCreatedDto);
  }

  @EventPattern('user-updated')
  handleUserUpdated(userUpdatedDto: UserUpdatedDto) {
    this.appService.handleUserUpdated(userUpdatedDto);
  }

  @MessagePattern({ cmd: 'get-users-by-id' })
  getUsersById(getUsersByIdDto: GetUsersByIdDto) {
    return this.appService.getUsersById(getUsersByIdDto);
  }
}
