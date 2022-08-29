export interface User {
  id: string;
  name: string;
  email: string;
  token: string;
  refresh_token: string;
  user_id: string;
}

export interface SignUpInter {
  username: string;
  email: string;
  password: string;
}
