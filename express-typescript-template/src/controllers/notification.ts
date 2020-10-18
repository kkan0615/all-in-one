import { NextFunction, Request, Response } from 'express'
import NotificationSchema, { INotification } from '@/schemas/notification'
import { ResponseParam } from '@/types/responseParam'

export class Notification {
  /**
   * Test for GET
   * @param req - Request
   * @param res - Response
   * @param next - Next
   */
  public static async getAllUnreadNotifications (req: Request, res: Response, next: NextFunction) {
    console.log(req.headers)
    const response = await NotificationSchema.find({
      read: false
    })
    res.json({
      code: 200,
      message: 'Success to response',
      recordSet: response,
      recordSets: undefined,
    } as ResponseParam<INotification | any>)
  }
}

export default Notification
