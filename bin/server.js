const app = require('../app')
const mongoose = require('mongoose')
require('dotenv').config()

// const PORT = process.env.PORT || 3000
const { DB_HOST } = process.env

app.listen({ port: (process.env.PORT || 3000) }, () => {
  console.log(`Server running. Use our API on port: ${ port }`)
})

mongoose.connect(DB_HOST)
  .then(() => console.log('Database connection successful'))
  .catch(error => {
    console.log(error.message)
    process.exit(1)
  })
