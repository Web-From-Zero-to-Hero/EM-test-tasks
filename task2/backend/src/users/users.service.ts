import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { User } from 'domain/users/models/user';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User) private readonly userRepository: typeof User,
  ) {}

  async resetTroubles() {
    const rowsChanged = await this.userRepository.update(
      { troubles: false },
      { where: { troubles: true } },
    );

    return {
      rowsChanged: rowsChanged[0],
    };
  }
}
