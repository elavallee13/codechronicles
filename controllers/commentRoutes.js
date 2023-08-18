const router = require('express').Router();
const { Comment } = require('../../models');
const withAuth = require('../../utils/auth');

// Create a comment
router.post('/', withAuth, async (req, res) => {
    try {
        const newComment = await Comment.create({
            ...req.body,
            userId: req.session.userId,
        });

        res.status(200).json(newComment);
    } catch (err) {
        res.status(400).json(err);
    }
});

// Get all comments for a post
router.get('/post/:id', async (req, res) => {
    try {
        const postComments = await Comment.findAll({
            where: {
                postId: req.params.id,
            },
        });

        res.status(200).json(postComments);
    } catch (err) {
        res.status(500).json(err);
    }
});

// Delete a comment
router.delete('/:id', withAuth, async (req, res) => {
    try {
        const commentData = await Comment.destroy({
            where: {
                id: req.params.id,
                userId: req.session.userId,
            },
        });

        if (!commentData) {
            res.status(404).json({ message: 'No comment found with this ID!' });
            return;
        }

        res.status(200).json(commentData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
