require('dotenv').config();

const express = require('express');
const path = require('path');
const session = require('express-session');
const exphbs = require('express-handlebars');
const routes = require('./controllers');
const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const userRoutes = require('./controllers/api/userRoutes.js');

const app = express();

app.use('/users', userRoutes);

app.listen(3001, () => {
    console.log('Server is running on http://localhost:3001');
});


const PORT = process.env.PORT || 3001;

// Session
const sess = {
  secret: process.env.SESSION_SECRET,
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

const sessionSecret = process.env. SESSION_SECRET

app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,  // Doesnt save session if unmodified
  saveUninitialized: false, 
  cookie: { secure: true }  // Ensure the cookie is only used over HTTPS
}));



// Handlebars setup with partials directory specified
const hbs = exphbs.create({
    defaultLayout: 'main',
    partialsDir: ['views/partials/']
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// Routes
app.use(routes);

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log(`Now listening on PORT ${PORT}`));
});
