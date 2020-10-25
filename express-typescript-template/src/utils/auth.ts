import {  Response } from 'express'

export function setTokenToHeader (res: Response, accessToken: string, refreshToken: string) {
  res.setHeader('ACCESS-TOKEN', accessToken)
  res.setHeader('REFRESH-TOKEN', refreshToken)
}
