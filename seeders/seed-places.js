const db = require('../models')

db.Place.create([{
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
  }])
.then(() => {
    console.log('Success!')
    process.exit()
})
.catch(err => {
    console.log('Failure!', err)
    process.exit()
})