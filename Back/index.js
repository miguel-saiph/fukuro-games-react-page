require('dotenv').config()
const express = require('express')
const app = express()
const cors = require('cors')
const gamesRouter = require('./controllers/games')
const categoriesRouter = require('./controllers/categories')
const middleware = require('./utils/middleware')

app.use(cors())
app.use(express.json())

/* app.use(requestLogger) */

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.use(middleware.requestLogger)

app.use('/api/games', gamesRouter)
app.use('/api/categories', categoriesRouter)

app.use(middleware.unknownEndpoint)
app.use(middleware.errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})