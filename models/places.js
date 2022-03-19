module.exports = [{
        name: 'Freshies Grill',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'Fresh Fajitas',
        pic: '/images/Freshies-Grill.jpg'
      }, {
        name: 'Bone Apple Tea',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'Pizzeria',
        pic: '/images/bone-apple-tea.jpg'
      }]

      
const mongoose = require('mongoose');

const placeSchema = new mongoose.Schema({
    name: {type: String, required: true},
    pic: String,
    cuisines: {type: String, required: true},
    city: {type: String, default: 'Anytown'},
    state: {type: String, default: 'USA'},
    founded: Number
});

module.exports = mongoose.model('Place', placeSchema);