// controllers/index.js
const router = require('express').Router();

router.use('/api', require('./apiRoutes'));
router.use('/users', require('./userRoutes'));
router.use('/posts', require('./postRoutes'));
// ... add other routes here

module.exports = router;
