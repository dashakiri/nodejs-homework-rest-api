const app = require('../app')
const mongoose = require('mongoose')
require('dotenv').config()

const { DB_HOST, PORT = 3000 } = process.env

app.listen(PORT, () => {
  console.log(`Server running. Use our API on port: ${PORT}`)
})

mongoose.connect(DB_HOST)
  .then(() => console.log('Database connection successful'))
  .catch(error => {
    console.log(error.message)
    process.exit(1)
  })
