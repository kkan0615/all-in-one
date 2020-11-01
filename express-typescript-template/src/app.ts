import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { server as serverConfig, mongoDB as mongoDBConfig } from  './config'
import moment from 'moment'

/* Collection of routes */
import testRoutes from './routes/test'
import authRoutes from '@/routes/auth'
import menuRoutes from '@/routes/menu'
import notificationRoutes from '@/routes/notification'
import userRoutes from '@/routes/user'

const app = express()

/* Body parser */
app.use(express.urlencoded({ parameterLimit: 100000, limit: '10mb', extended: true }))
app.use(express.json())

/* Cookie parser */
app.use(cookieParser())

/* Cors error handler */
app.use(cors({
  origin: 'http://localhost:8080',
  exposedHeaders: ['ACCESS-TOKEN', 'REFRESH-TOKEN'],
  credentials: true,
}))


/* Collection of routes */
app.use('/test', testRoutes)
app.use('/auth', authRoutes)
app.use('/menu', menuRoutes)
app.use('/notification', notificationRoutes)
app.use('/user', userRoutes)

/* Check server is running */
app.get('/', (req, res) => {
  res.send('Sever is running... ' + moment().format('MMMM Do YYYY, h:mm:ss a'))
})

/* Set the port number */
app.set('port', process.env.PORT || serverConfig.port)

export default app
