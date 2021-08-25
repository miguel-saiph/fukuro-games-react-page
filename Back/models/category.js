const mongoose = require('mongoose')
// const uniqueValidator = require('mongoose-unique-validator')

const categorySchema = mongoose.Schema({
  name: {
    type: String,
    unique: true
  },
  games: [{ type: mongoose.Types.ObjectId, ref: 'Game' }]
})

// categorySchema.plugin(uniqueValidator)

categorySchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id.toString()
    delete returnedObject._id
    delete returnedObject.__v
  }
})

module.exports = mongoose.model('Category', categorySchema)