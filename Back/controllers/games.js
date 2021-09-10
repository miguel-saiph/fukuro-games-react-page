const gamesRouter = require('express').Router()
const Game = require('../models/game')
const Category = require('../models/category')

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
    categories: body.categories,
    rating: 0,
    plays: 0
  })

  game.save().then(savedGame => {
    // Updates games list in category
    Category.updateMany({ '_id': game.categories }, { $push: { games: game._id } }).then((res) => {
      // Return new object
      response.json(savedGame)
    })
  }).catch(e => {
    response.json(e)
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