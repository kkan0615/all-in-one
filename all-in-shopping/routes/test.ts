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