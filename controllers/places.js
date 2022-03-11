const router = require('express').Router()
const places = require=('../models/places.js')

// GET /places
router.get('/', (req, res) => {
    let places = [{
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
    res.render('places/index', { places })
  })

// Rendering a new view
router.get('/new', (req, res) => {
  res.render('places/new')
})

router.post('/', (req, res) => {
  console.log(req.body)
  if (!req.body.pic) {
    // Default image if one is not provided
    req.body.pic = 'https://cdn.pixabay.com/photo/2014/11/05/15/57/salmon-518032__480.jpg'
  }
  if (!req.body.city) {
    req.body.city = 'Anytown'
  }
  if (!req.body.state) {
    req.body.state = 'USA'
  }
  places.push(req.body)
  res.redirect('/places')
})

module.exports = router   