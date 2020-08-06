const express = require('express')
const cors = require('cors')
const app = express()
const encode = require('./components/network')

app.use(cors())
app.use(express.json({ strict: false,  }))

app.use('/', encode)

app.listen(3000, () => {
  console.log(`Server listening to port 3000`)
})
