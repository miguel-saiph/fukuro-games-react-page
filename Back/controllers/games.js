const gamesRouter = require('express').Router()
const Game = require('../models/game')

gamesRouter.get('/', (request, response) => {
  Game.find({}).then(games => {
    response.json(games)
  })
})

gamesRouter.post('/', (request, response) => {
  const body = request.body

  console.log(body);

  if (body === undefined) {
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

gamesRouter.get('/:id', (request, response, next) => {
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

module.exports = gamesRouter