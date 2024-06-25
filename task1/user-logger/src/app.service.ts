import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { GetUsersByIdDto } from 'domain/dto/getUsersByIdDto';
import { UserCreatedDto } from 'domain/dto/userCreatedDto';
import { UserUpdatedDto } from 'domain/dto/userUpdatedDto';
import { UserLogs } from 'domain/models/userLogs';

@Injectable()
export class AppService {
  constructor(
    @InjectModel(UserLogs) private readonly userLogsRepository: typeof UserLogs,
  ) {}

  handleUserCreated(dto: UserCreatedDto) {
    this.userLogsRepository.create({
      userId: dto.userId,
      actionType: 'creation',
    });
  }

  handleUserUpdated(dto: UserUpdatedDto) {
    this.userLogsRepository.create({
      userId: dto.userId,
      actionType: 'update',
    });
  }

  async getUsersById(dto: GetUsersByIdDto) {
    const startIndex = 5 * (dto.page - 1);
    const endIndex = 5 * dto.page;

    const result = await this.userLogsRepository.findAll({
      where: {
        userId: Number(dto.id),
      },
    });

    return result.splice(startIndex, endIndex);
  }
}
