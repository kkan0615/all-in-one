import { findUser, findUserByToken } from '../src/data/user';

import expres from 'express'

const router = expres.Router()

router.post('/login', (req: expres.Request, res: expres.Response) => {
  const { userId, password } = req.body

  const user = findUser(userId, password)
  if (user) {
    res.status(200)
    res.json(user)
  } else {
    res.status(403)
    res.json({
      message: 'User Id and Password is not matched'
    })
  }

  res.end()
})

router.post('/detail', (req: expres.Request, res: expres.Response) => {
  const token = req.headers['x-token']

  if (token) {
    const user = findUserByToken(String(token))
    if (user) {
      res.status(200)
      res.json(user)
    }
  }
  res.status(403)
  res.end()
})

router.post('/logout', (req: expres.Request, res: expres.Response) => {
  const token = req.headers['x-token']

  if (token) {
    res.status(200)
    res.json({})
  } else {
    res.status(403)
  }
  res.end()
})

export default router