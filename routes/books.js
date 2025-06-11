const router = require('express').Router();
const controller   = require('../controllers/bookController');
const authMiddleware = require('../middlewares/auth');

router.post('/add/book', authMiddleware, controller.add);
router.get('/books', controller.list);
router.get('/book/:id', controller.detail);
router.put('/book/:id', authMiddleware, controller.update);
router.delete('/book/:id', authMiddleware, controller.remove);


module.exports = router;