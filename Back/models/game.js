const mongoose = require('mongoose')

const url = process.env.MONGODB_URI

console.log('connecting to', url)

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false, useCreateIndex: true })
  .then(result => {
    console.log('connected to MongoDB')
  })
  .catch((error) => {
    console.log('error connecting to MongoDB:', error.message)
  })

const gameSchema = new mongoose.Schema({
  title: {
    type: String,
    minlength: 4,
    required: true
  },
  rating: {
    type: Number,
    min: 0,
    max: 5
  },
  plays: {
    type: Number
  },
  date: { 
    type: Date,
    required: true
  },
  categories: [{
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Category'
  }]
})

gameSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Game', gameSchema)