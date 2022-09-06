import { CacheModule, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { DatabaseModule } from './database.module';
import { ScheduleModule } from './schedule/schedule.module';
import redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule.forRoot({
      isGlobal: true,
      envFilePath: [`.env`],
    }),
    CacheModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        store: redisStore,
      }),
      inject: [ConfigService],
    }),
    ScheduleModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
