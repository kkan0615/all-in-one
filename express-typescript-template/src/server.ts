import app from './app'

const server = app.listen(app.get('port'), () => {
  console.log(`Sever is running at ${app.get('port')}`)
})

export default server
