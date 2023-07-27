import { Module } from '@nestjs/common';
import { UserController } from './user.controller';
import { UserRepository } from './user.repositoty';

@Module({
  imports: [],
  controllers: [UserController],
  providers: [UserRepository],
})
export class UserModule {}