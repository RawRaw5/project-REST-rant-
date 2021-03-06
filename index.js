//Basic setup
require('dotenv').config();
const express = require('express');
const app = express();
const methodOverride = require('method-override');

//Middleware
//app.set('views', _dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());
app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(methodOverride('_method'));

app.use('/places', require('./controllers/places'));

app.get('/', (req, res) => {
    res.render('home');
});

//Adding wildcard route
app.get('*', (req, res) => {
    res.render('error404');
});

//Connecting to server
app.listen(process.env.PORT);