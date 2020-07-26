import { Router } from 'express'
import { TestResponse } from '../types/testResponse'
const router = Router()

router.get('/', (req, res) => {
  const { params, status } = req.body
  const response: TestResponse = {
    code: status,
    response: params
  }

  res.status(status)
  res.json(response)
})

router.post('/', (req, res) => {
  const { params, status } = req.body
  const response: TestResponse = {
    code: status,
    response: params
  }

  res.status(status)
  res.json(response)
})

router.put('/', (req, res) => {
  const { params, status } = req.body
  const response: TestResponse = {
    code: status,
    response: params
  }

  res.status(status)
  res.json(response)
})

router.delete('/', (req, res) => {
  const { params, status } = req.body
  const response: TestResponse = {
    code: status,
    response: params
  }

  res.status(status)
  res.json(response)
})

export default router
