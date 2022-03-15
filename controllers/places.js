const router = require('express').Router()
const places = require('../models/places.js')

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

router.get('/:id/edit', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
    res.render('places/edit', { place: places[id] })
  }
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

router.delete('/places/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    places.splice(id, 1)
    res.redirect('/places')
  }
})

module.exports = router 