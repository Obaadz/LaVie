export type User = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export interface IUserDocument extends Document, User {}
