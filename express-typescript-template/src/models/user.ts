import {Role, roles} from '@/models/role'

export interface User {
    id: number
    token: string
    userId: string
    email: string
    password: string
    rolesId: Role
    lastIpAddress?: string
}

export const users: Array<User> = [
  {
    id: 1,
    userId: 'admin',
    token: '',
    email: 'admin@gmail.com',
    password: 'adminpass01@',
    rolesId: roles[0]
  }
]
