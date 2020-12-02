import { User } from '@/types/models/user'

export interface UserCardValue extends User{
  loggedIn: boolean;
  loading: boolean;
}
