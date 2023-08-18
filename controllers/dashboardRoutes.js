const router = require('express').Router();
const { Post, User, Comment } = require('../models');
// Add middleware to ensure user is logged in for these routes

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: { user_id: req.session.user_id },
            include: [{ model: User }],
        });
        const posts = postData.map((post) => post.get({ plain: true }));
        res.render('dashboard', { posts });
    } catch (err) {
        res.status(500).json(err);
    }
});

router.get('/edit/:id', async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id);
        const post = postData.get({ plain: true });
        res.render('edit-post', { post });
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
