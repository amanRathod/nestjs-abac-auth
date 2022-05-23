import { Module } from '@nestjs/common';
import { AbilityModule } from 'src/ability/ability.module';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [AbilityModule],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService],
})
export class UserModule {}
