// import * as winston from 'winston'
//
// const { combine, timestamp, label, printf } = winston.format
//
// const myFormat = printf(({ level, message, label, timestamp }) => {
//   return `${timestamp} [${label}] ${level}: ${message}` // log 출력 포맷 정의
// })
//
// const options = {
//   // log file setting
//   file: {
//     level: 'info',
//     filename: `../logFile.log`, // Log file
//     handleExceptions: true,
//     json: false,
//     maxsize: 5242880, // 5MB
//     maxFiles: 5,
//     colorize: false,
//     format: combine(
//       label({ label: 'winston-test' }),
//       timestamp(),
//       myFormat // log 출력 포맷
//     )
//   },
//   // 개발 시 console에 출력
//   console: {
//     level: 'debug',
//     handleExceptions: true,
//     json: false, // 로그형태를 json으로도 뽑을 수 있다.
//     colorize: true,
//     format: combine(
//       label({ label: 'nba_express' }),
//       timestamp(),
//       myFormat
//     )
//   }
// }
//
// // @ts-ignore
// const logger = new winston.createLogger({
//   transports: [
//     new winston.transports.File(options.file)
//   ],
//   exitOnError: false
// })
//
// if (process.env.NODE_ENV !== 'production') {
//   logger.add(new winston.transports.Console(options.console))
// }
//
// module.exports = logger
