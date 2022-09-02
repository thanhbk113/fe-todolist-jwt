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

export interface Todo {
  Id: string;
  created_at: string;
  done: boolean;
  task: string;
}
