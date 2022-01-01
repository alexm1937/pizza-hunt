const router = require('express').Router();
const { addComment, removeComment, addReply, removeReply } = require('../../controllers/comment-controller');

//post comment
router.route('/:pizzaId').post(addComment);

//del comment
router.route('/:pizzaId/:commentId').put(addReply).delete(removeComment);

//del reply
router.route('/:pizzaId/:commentId/:replyId').delete(removeReply);

module.exports = router;