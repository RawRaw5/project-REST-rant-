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

// connect the show route
router.get('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
    res.render('error404')
  }
  else if (!places[id]) {
    res.render('error404')
  }
  else {
    res.render('places/show', { place: places[id], id })
  }
})

// edit route
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

// put route
router.put('/:id', (req, res) => {
  let id = Number(req.params.id)
  if (isNaN(id)) {
      res.render('error404')
  }
  else if (!places[id]) {
      res.render('error404')
  }
  else {
      // Dig into req.body and make sure data is valid
      if (!req.body.pic) {
          // Default image if one is not provided
          req.body.pic = 'http://placekitten.com/400/400'
      }
      if (!req.body.city) {
          req.body.city = 'Anytown'
      }
      if (!req.body.state) {
          req.body.state = 'USA'
      }

      // Save the new data into places[id]
      places[id] = req.body
      res.redirect(`/places/${id}`)
  }
})

// post/place route
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

// delete route
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

// const router = require('express').Router();
// const db = require('../models');
// const places = require('../models/places.js');

// //New route
// router.get('/new', (req, res) => {
//     res.render('places/new');
// })

// //POST /places
// router.post('/', (req, res) => {
//     console.log(req.body);
//     db.Place.create(req.body).then(() => {
//         res.redirect('/places');
//     }).catch(err => {
//         console.log('err', err);
//         res.render('error404');
//     });
// })

// //EDIT places
// /*router.get('/:id/edit', (req, res) => {
//     let id = Number(req.params.id);
//     if(isNaN(id)){
//         res.render('error404');
//     } else if(!places[id]){
//         res.render('error404');
//     } else{
//         res.render('places/edit', { place: places[id], id });
//     }
// })*/

// //PUT places
// /*router.put('/:id/edit', (req, res) => {
//     let id = Number(req.params.id);
//     if(isNaN(id)){
//         res.render('error404');
//     } else if(!places[id]){
//         res.render('error404');
//     } else{
//         if(!req.body.pic){
//             req.body.pic = 'http://placekitten.com/400/400'
//         }
//         if(!req.body.city){
//             req.body.city = 'Anytown'
//         }
//         if(!req.body.state){
//             req.body.state = 'USA'
//         }
//         places[id] = req.body;
//         res.redirect(`/places/${id}`);
//     }
// })*/

// //GET /places
// router.get('/:id', (req, res) => {
//     db.Place.findById(req.params.id).then(place => {
//         res.render('places/show', { place })
//     }).catch(err => {
//         console.log('err', err);
//         res.render('error404');
//     })
// })

// //DELETE places
// /*router.delete('/places/:id', (req, res) => {
//     let id = Number(req.params.id)
//     if (isNaN(id)) {
//       res.render('error404')
//     }
//     else if (!places[id]) {
//       res.render('error404')
//     }
//     else {
//       places.splice(id, 1)
//       res.redirect('/places')
//     }
//   })*/

// //HOME route
// router.get('/', (req, res) => {
//     db.Place.find().then(places => {
//         res.render('places/index', { places })
//     }).catch(err => {
//         console.log(err);
//         res.render('error404');
//     })
// })

// module.exports = router;