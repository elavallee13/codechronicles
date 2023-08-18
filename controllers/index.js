// controllers/index.js
const router = require('express').Router();

const apiRoutes = require('./api/apiRoute');
router.use('/users', require('./userRoutes'));
router.use('/posts', require('./postRoutes'));
// ... add other routes here

module.exports = router;
