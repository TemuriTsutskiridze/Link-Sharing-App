export type TUser = {
  id: string;
  email: string;
  password: string;
};

export type TRegister = {
  email: string;
  password: string;
  repeatedPassword: string;
};
