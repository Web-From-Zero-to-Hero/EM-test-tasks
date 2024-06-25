import { Module } from '@nestjs/common';
import { UserManagerController } from './user-manager.controller';
import { UserManagerService } from './user-manager.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER-MANAGER',
        transport: Transport.TCP,
        options: { port: 3001 },
      },
    ]),
  ],
  controllers: [UserManagerController],
  providers: [UserManagerService],
})
export class UserManagerModule {}
