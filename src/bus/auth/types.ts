export interface AuthState {
  isLogged: boolean;
  token: string | null;
  userInfo: IUserData | null;
}

export interface IUserData {
  id: string;
  name: string | null;
  email: string;
  photo: string | null;
  familyName: string | null;
  givenName: string | null;
}

export interface GoogleSignInResponse {
  idToken: string;
  user: {
    id: string;
    name: string | null;
    email: string;
    photo: string | null;
    familyName: string | null;
    givenName: string | null;
  };
}
