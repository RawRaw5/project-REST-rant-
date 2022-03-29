const mongoose = require('mongoose')

const placeSchema = new mongoose.Schema({
  name: { type: String, required: true },
  pic: { type: String, default: 'http://placekitten.com/350/350'},
  cuisines: { type: String, required: true },
  city: { type: String, default: 'Anytown' },
  state: { type: String, default: 'USA' },
  founded: {
    type: Number,
    min: [1673, 'Surely not that old?!'],
    max: [new Date().getFullYear(), 'This year hasn\'t happened yet!']
  },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Comment' }]
})

placeSchema.methods.showEstablished = function() {
  return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`
}

module.exports = mongoose.model('Place', placeSchema)

// module.exports = [{
//         name: 'Freshies Grill',
//         city: 'San Diego',
//         state: 'CA',
//         cuisines: 'Fresh Fajitas',
//         pic: '/images/Freshies-Grill.jpg'
//       }, {
//         name: 'Bone Apple Tea',
//         city: 'San Diego',
//         state: 'CA',
//         cuisines: 'Pizzeria',
//         pic: '/images/bone-apple-tea.jpg'
//       }]

      
// const mongoose = require('mongoose');

// const placeSchema = new mongoose.Schema({
//     name: {type: String, required: true},
//     pic: String,
//     cuisines: {type: String, required: true},
//     city: {type: String, default: 'Anytown'},
//     state: {type: String, default: 'USA'},
//     founded: Number
// });

// module.exports = mongoose.model('Place', placeSchema);