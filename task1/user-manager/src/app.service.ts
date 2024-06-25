import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { InjectModel } from '@nestjs/sequelize';
import { CreateUserDto } from 'domain/dto/createUserDto';
import { UpdateUserDto } from 'domain/dto/updateUserDto';
import { User } from 'domain/models/user';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(User) private userRepository: typeof User,
    @Inject('USER-LOGGER') private readonly userLoggerClient: ClientProxy,
  ) {}

  async createUser(dto: CreateUserDto) {
    const data = await this.userRepository.create(dto);
    this.userLoggerClient.emit('user-created', { userId: data.dataValues.id });
  }

  async updateUser(dto: UpdateUserDto) {
    await this.userRepository.update(dto.fields, {
      where: {
        id: dto.id,
      },
    });
    this.userLoggerClient.emit('user-updated', { userId: dto.id });
  }

  async getAllUsers() {
    return await this.userRepository.findAll();
  }
}
