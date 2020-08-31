import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import { passportConfig } from '@/utils/passport'
import { server as serverConfig, cookieKey } from  './config'
import moment from 'moment'
import passport from 'passport'

/* Collection of routes */
import testRoutes from './routes/test'
import authRoutes from '@/routes/auth'
import cookieSession from 'cookie-session'
import session from 'express-session'

const app = express()

/* Session for passport */
// const sessionMiddleware = session({
//   resave: false,
//   saveUninitialized: false,
//   secret: cookieKey,
//   cookie: {
//     httpOnly: true,
//     secure: false,
//   },
// })
// app.use(sessionMiddleware)

/* Body parser */
app.use(express.urlencoded({ parameterLimit: 100000, limit: '10mb', extended: true}))
app.use(express.json())
// /* Cookie Session Management for passport */
// app.use(cookieSession({
//   name: 'session',
//   secure: true,
//   secret: cookieKey,
//
//   // Cookie Options
//   // maxAge: 24 * 60 * 60 * 1000 // 24 hours
//   maxAge: 2 * 60 * 60 * 1000 // 2 hours
// }))

/* Cookie parser */
app.use(cookieParser())

/* Cors error handler */
app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true,
}))

/* passport setting */
passportConfig(passport)
app.use(passport.initialize())
app.use(passport.session())

/* Collection of routes */
app.use('/test', testRoutes)
app.use('/auth', authRoutes)

/* Check server is running */
app.get('/', (req, res) => {
  res.send('Sever is running... ' + moment().format('MMMM Do YYYY, h:mm:ss a'))
})

/* Set the port number */
app.set('port', process.env.PORT || serverConfig.port)

export default app
