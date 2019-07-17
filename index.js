const express = require('express')
const path = require('path')
const PORT = process.env.PORT || 5000
const cors = require('cors')

let app = express()

const whitelist = ['https://runbeatsperminute.com', 'http://localhost:3000']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

app.use(cors(corsOptions))

app.get('/test-cors', (req, res) => {
  res.json({
    text: 'This was a test'
  })
})

app.get('/test-no-cors', (req, res) => {
  res.json({
    text: 'This was a test'
  })
})

app.listen(PORT, () => console.log(`Listening on ${ PORT }`))
