import { Role, roles } from '@/models/role'

export interface User {
  id: number
  refreshToken: string
  userId: string
  email: string
  password: string
  rolesId: Role
  lastIpAddress?: string
  lastTime?: string
}

export const users: Array<User> = [
  {
    id: 1,
    userId: 'admin',
    refreshToken: '',
    email: 'admin@gmail.com',
    password: 'adminpass01@',
    rolesId: roles[0]
  }
]
