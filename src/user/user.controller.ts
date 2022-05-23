import { ForbiddenError } from '@casl/ability';
import {
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Post,
  UseGuards,
} from '@nestjs/common';
import { User } from '@prisma/client';
import { Action } from '../ability/ability.factory';
import { AbilityFactory } from 'src/ability/ability.factory';
import { getUser } from 'src/auth/decorator';
import { UserService } from './user.service';
import { Borrower, Loan } from 'src/auth/entity/user.entity';

@Controller('user')
export class UserController {
  constructor(
    private userService: UserService,
    private abilityFactory: AbilityFactory,
  ) {}

  @Get()
  getUser(@getUser('id') id: string): Promise<User> {
    return this.userService.getUser(id);
  }

  @Post()
  createBorrower(@getUser() user) {
    const ability = this.abilityFactory.defineAbility(user);
    try {
      ForbiddenError.from(ability).throwUnlessCan(Action.CREATE, Borrower);
      return user;
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
    }
  }

  @Post('add-loan')
  addLoan(@getUser() user) {
    const ability = this.abilityFactory.defineAbility(user);
    try {
      ForbiddenError.from(ability).throwUnlessCan(Action.CREATE, Loan);
      return user;
    } catch (error) {
      if (error instanceof ForbiddenError) {
        throw new ForbiddenException(error.message);
      }
    }
  }
}
