const router = require('express').Router()

// GET /places
router.get('/', (req, res) => {
    let places = [{
        name: 'Freshies Grill',
        city: 'San Diego',
        state: 'CA',
        cuisines: 'Meats & Veggies',
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

module.exports = router   