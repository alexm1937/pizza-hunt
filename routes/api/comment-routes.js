const router = require('express').Router();
const { addComment, removeComment } = require('../../controllers/comment-controller');

//post comment
router.route('/:pizzaId').post(addComment);

//del comment
router.route('/:pizzaId/:commentId').delete(removeComment);

module.exports = router;