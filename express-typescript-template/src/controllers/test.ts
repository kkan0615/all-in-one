import { NextFunction, Request, Response } from 'express'
import { TestResponse } from '@/types/testResponse'

class Test {
  /**
     * Test for GET
     * @param req - Request
     * @param res - Response
     * @param next - Next
     */
  public static getHandler (req: Request, res: Response, next: NextFunction) {
    const { params, status } = req.body as {
      params: any
      status: number
    }
    const response: TestResponse = {
      code: status,
      response: params
    }

    res.status(status)
    res.json(response)
  }

  public static postHandler (req: Request, res: Response, next: NextFunction) {
    const { params, status } = req.body as {
      params: any
      status: number
    }

    const response: TestResponse = {
      code: status,
      response: params
    }

    res.status(status)
    res.json(response)
  }

  public static putHandler (req: Request, res: Response, next: NextFunction) {
    const { params, status } = req.body as {
      params: any
      status: number
    }

    const response: TestResponse = {
      code: status,
      response: params
    }

    res.status(status)
    res.json(response)
  }

  public static deleteHandler (req: Request, res: Response, next: NextFunction) {
    const { params, status } = req.body as {
      params: any
      status: number
    }

    const response: TestResponse = {
      code: status,
      response: params
    }

    res.status(status)
    res.json(response)
  }
}

export default Test
