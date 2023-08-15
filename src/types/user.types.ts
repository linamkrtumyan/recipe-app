export interface IUser {
  id: number;
  name: string;
}

export interface IInitialStateUser {
  user: IUser;
  isLoading: boolean;
  error: string | null;
}
