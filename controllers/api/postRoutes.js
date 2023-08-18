const router = require('express').Router();
const { Post } = require('../../models');

router.post('/', async (req, res) => {
    try {
        // Assuming the Post model has a 'title', 'content', and 'userId' fields
        const newPost = await Post.create({
            title: req.body.title,
            content: req.body.content,
            userId: req.session.userId  // Assumes you store logged-in user's ID in session
        });

        res.status(201).json(newPost);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
