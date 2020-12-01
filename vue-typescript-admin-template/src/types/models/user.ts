import { Role } from '@/types/models/role'

/**
 * User information (Detail)
 *
 */
export interface User {
  _id: string;
  nickname: string;
  userId: string;
  email: string;
  roleId?: Role;
  avatar: string;
}

export interface UserTag {
  _id: string;
}
