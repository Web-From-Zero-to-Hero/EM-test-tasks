import { Body, Controller, Get, Patch, Post } from '@nestjs/common';
import { UserManagerService } from './user-manager.service';
import { CreateUserDto } from 'domain/userManager/dto/createUserDto';
import { UpdateUserDto } from 'domain/userManager/dto/updateUserDto';

@Controller('user')
export class UserManagerController {
  constructor(private readonly userManagerService: UserManagerService) {}

  @Post('create')
  createUser(@Body() createUserDto: CreateUserDto) {
    this.userManagerService.createUser(createUserDto);
  }

  @Patch('update')
  updateUser(@Body() updateUserDto: UpdateUserDto) {
    this.userManagerService.updateUser(updateUserDto);
  }

  @Get('all-users')
  getAllUsers() {
    return this.userManagerService.getAllUsers();
  }
}
