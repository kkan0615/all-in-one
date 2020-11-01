import { Role } from '@/models/role'

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
