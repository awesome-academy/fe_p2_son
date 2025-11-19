export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  role: 'user' | 'admin';
}
