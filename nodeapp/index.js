const express = require('express')
const app = express()
const port = process.env.APP_PORT || 8001;

app.get('/', (req, res) => {
  res.send('Hello Login ')
})

app.get('/ping', (req, res) => {
  res.send('pong!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})