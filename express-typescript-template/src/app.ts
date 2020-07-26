import express from 'express'
import {server as serverConfig} from  './config'

// Collection of routes
import testRoutes from './routes/test'

const app = express()

// Collection of routes
app.use('/test', testRoutes)

app.get('/', (req, res) => {
  res.send('Sever is running...')
})

app.set('port', process.env.PORT || serverConfig.port)

export default  app
