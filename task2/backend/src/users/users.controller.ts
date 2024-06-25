import { Controller, Patch } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Patch('reset-troubles')
  resetTroubles() {
    return this.usersService.resetTroubles();
  }
}
