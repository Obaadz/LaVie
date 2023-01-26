export type User = {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
};

export type UserForm = Partial<User> & {
  confirm_password?: string;
  invalid_user_or_password?: boolean;
};

export interface IUserDocument extends Document, User {}
