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
    const response = await NotificationSchema.find({
      $or: [
        {
          userId: null,
        },
        {
          userId: req.body.user._id
        }
      ],
      $and: [
        {
          read: false
        }
      ],
    })

    return res.json({
      code: 200,
      message: 'Success to response',
      recordSet: response,
      recordSets: response,
    } as ResponseParam<INotification | any>)
  }
}

export default Notification
