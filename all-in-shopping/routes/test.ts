import expres from 'express'

const router = expres.Router()

router.get('/', (req: expres.Request, res: expres.Response) => {
  let { code } = req.body
  if (typeof code === 'string') {
    code = parseInt(code)
  }

  res.status(code)
  res.json({ code })
  res.end()
})

router.get('/study', (req: expres.Request, res: expres.Response) => {
  const { price } = req.query
  // Number type
  let result = 0
  if (typeof price !== 'number') {
    result = parseInt(price)
  }

  res.status(200).json(result)
})

router.post('/', (req: expres.Request, res: expres.Response) => {
  let { code } = req.body
  if (!code) {
    code = 200
  }
  if (typeof code === 'string') {
    code = parseInt(code)
  }

  res.status(code)
  res.json(req.body)
  res.end()
})

router.delete('/', (req: expres.Request, res: expres.Response) => {
  let { code } = req.body
  if (typeof code === 'string') {
    code = parseInt(code)
  }

  res.status(code)
  res.json({ code })
  res.end()
})

export default router
