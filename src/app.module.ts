import { Module } from '@nestjs/common';
import { createObserveModule } from '@nestjs/observe';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { TaskModule } from './task/task.module';
import { PrismaModule } from './prisma/prisma.module';
import { ConfigModule } from '@nestjs/config';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [ConfigModule.forRoot({
    isGlobal: true
  }),AuthModule, UserModule, TaskModule, PrismaModule],
})
export class AppModule { }
