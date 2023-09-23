const express = require('express')
const app = express()
const http = require('http').createServer(app)
const io = require('socket.io')(http)

const port = 3000

// set up ejs as view engine
app.set('view engine', 'ejs')

// serve the client-side code

app.get('/', (req, res) => {
  res.render('index')
  console.log('a client connected')
})

// socket.io stuff
io.on('connection', (socket) => {
  console.log('A user connected')

  socket.on('disconnect', () => {
    console.log('A user disconnected')
  })
})

http.listen(port, () => {
  console.log(`Server listening on port ${port}`)
})