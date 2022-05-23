export class User {
  name: string;
  role: string[];
  id: string;
  accessList: string[];
  email?: string | null;
  password?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  updatedAt?: Date;
  createdAt?: Date;
}

export class Borrower {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}

export class Loan {
  id: string;
  borrowerId: string;
  amount: number;
  interest: number;
  createdAt: Date;
  updatedAt: Date;
}

export class Payment {
  id: string;
  loanId: string;
  amount: number;
  createdAt: Date;
  updatedAt: Date;
}

export class Staff {
  id: string;
  name: string;
  email: string;
  phone: string;
  createdAt: Date;
  updatedAt: Date;
}
