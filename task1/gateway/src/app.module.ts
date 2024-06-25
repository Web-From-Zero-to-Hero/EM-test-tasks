import { Module } from '@nestjs/common';
import { UserManagerModule } from './user-manager/user-manager.module';
import { UserLoggerModule } from './user-logger/user-logger.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env',
    }),
    UserManagerModule,
    UserLoggerModule,
  ],
})
export class AppModule {}
