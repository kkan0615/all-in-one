import { NextFunction, Request, Response } from 'express'
import { ResponseParam } from '@/types/responseParam'
import UserSchema from '@/schemas/user'
import RoleSchema from '@/schemas/role'

class User {
  /**
   * Test for GET
   * @param req - Request
   * @param res - Response
   * @param next - Next
   */
  public static async getAllUsers (req: Request, res: Response, next: NextFunction) {
    const users = await UserSchema.find()

    res.json({
      message: 'ok',
      code: 200,
      recordSets: users,
    } as ResponseParam<any>)
  }

  /**
   * Test for GET
   * @param req - Request
   * @param res - Response
   * @param next - Next
   */
  public static async getAllRoles (req: Request, res: Response, next: NextFunction) {
    const roles = await RoleSchema.find()

    res.json({
      message: 'ok',
      code: 200,
      recordSets: roles,
    } as ResponseParam<any>)
  }
}

export default User
