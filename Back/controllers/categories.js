const categoriesRouter = require('express').Router()
const Game = require('../models/game')
const Category = require('../models/category')

categoriesRouter.get('/', (request, response) => {
  // Get categories and games data
  Category.find().populate('games').exec((err, category) => {
    if (err) throw err;
    response.send(category)
  })

})

categoriesRouter.post('/', (request, response) => {
  const body = request.body

  console.log(body);

  if (body === undefined) {
    return response.status(400).json({ error: 'content missing' })
  }

  const game = new Category({
    title: body.title,
    important: body.important || false,
    date: new Date(),
    categories: body.categories
  })

  game.save().then(savedGame => {
    Category.updateMany({ '_id': game.categories }, { $push: { games: game._id } });
    response.json(savedGame)
  })

  
})

// Get category by id
categoriesRouter.get('/:id', (request, response, next) => {
  Category.findById(request.params.id)
    .then(category => {
      if (category) {
        response.json(category)
      } else {
        response.status(404).end() 
      }
    })
    .catch(error => next(error))
})

// Get category by name
categoriesRouter.get('/name/:name', (request, response, next) => {
  const _name = request.params.name;

  // Category.findOne({name: new RegExp('^'+_name+'$', "i")})
  //   .then(category => {
  //     if (category) {
  //       response.json(category)
  //     } else {
  //       response.status(404).end() 
  //     }
  //   })
  //   .catch(error => next(error))
  Category.findOne({name: new RegExp('^'+_name+'$', "i")}).populate('games').exec((err, category) => {
    if (err) throw err;
    if (category)
      response.send(category)
    else
      response.status(404).end() 
  })
})

module.exports = categoriesRouter