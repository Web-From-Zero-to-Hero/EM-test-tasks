import { Module } from '@nestjs/common';
import { UserLoggerController } from './user-logger.controller';
import { UserLoggerService } from './user-logger.service';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'USER-LOGGER',
        transport: Transport.TCP,
        options: { port: 3002 },
      },
    ]),
  ],
  controllers: [UserLoggerController],
  providers: [UserLoggerService],
})
export class UserLoggerModule {}
