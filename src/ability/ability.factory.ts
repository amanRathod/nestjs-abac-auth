import { Ability, AbilityBuilder, ExtractSubjectType } from '@casl/ability';
import { Injectable } from '@nestjs/common';
import {
  User,
  Borrower,
  Payment,
  Staff,
  Loan,
} from 'src/auth/entity/user.entity';

export enum Action {
  MANAGE = 'manage',
  CREATE = 'create',
  READ = 'read',
  UPDATE = 'update',
  DELETE = 'delete',
}

export type Subjects = Borrower | Payment | Staff | Loan;

export type AppAbility = Ability<[Action, Subjects]>;

@Injectable()
export class AbilityFactory {
  defineAbility(user: User) {
    const { can, cannot, build } = new AbilityBuilder(Ability);

    // access list based authorization rules here
    if (user.accessList.includes('add-borrower')) {
      can(Action.CREATE, Borrower);
    }
    if (user.accessList.includes('read-borrower')) {
      can(Action.READ, Borrower);
    }
    if (user.accessList.includes('add-loan')) {
      can(Action.CREATE, Loan);
    }
    if (user.accessList.includes('read-loan')) {
      can(Action.READ, Loan);
    }
    if (user.accessList.includes('add-payment')) {
      can(Action.CREATE, Payment);
    }
    if (user.accessList.includes('read-payment')) {
      can(Action.READ, Payment);
    }
    if (user.accessList.includes('add-staff')) {
      can(Action.CREATE, Staff);
    }
    if (user.accessList.includes('read-staff')) {
      can(Action.READ, Staff);
    }

    return build({
      detectSubjectType: (item) =>
        item.constructor as unknown as ExtractSubjectType<Subjects>,
    });
  }
}
