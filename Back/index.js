require('dotenv').config()
const express = require('express')
const app = express()

const cors = require('cors')
const Game = require('./models/game')

app.use(cors())

app.get('/', (request, response) => {
  response.send('<h1>Hello World!</h1>')
})

app.get('/api/games', (request, response) => {
  console.log(Game.find({}));
  Game.find({}).then(games => {
    console.log(games);
    response.json(games)
  })
})

app.get('/api/games/:id', (request, response, next) => {
  Game.findById(request.params.id)
    .then(game => {
      if (game) {
        response.json(game)
      } else {
        response.status(404).end() 
      }
    })
    .catch(error => next(error))
})

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } 

  next(error)
}

app.use(errorHandler)

app.post('/api/games', (request, response) => {
  const body = request.body

  console.log(body);

  if (body.content === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const game = new Game({
    title: body.title,
    important: body.important || false,
    date: new Date(),
  })

  game.save().then(savedGame => {
    response.json(savedGame)
  })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})