
const router = require('express').Router();

const apiRoute = require('./api/apiRoute');
router.use('/users', require('./api/userRoutes'));
router.use('/posts', require('./postRoutes'));
const commentRoutes = require('./commentRoutes');
const dashboardRoutes = require('./dashboardRoutes');
const homeRoutes = require('./homeRoutes');
const postRoutes = require('./postRoutes');


module.exports = router;
