const router = require('express').Router();
const apiRoutes = require('./api/apiRoute');


// Importing individual route files
const userRoutes = require('./userRoutes');
const postRoutes = require('./postRoutes');
const commentRoutes = require('./commentRoutes');

// Middleware (if any)

// Assign individual route files to a specific endpoint
router.use('/users', userRoutes);
router.use('/posts', postRoutes);
router.use('/comments', commentRoutes);

module.exports = router;
