const router = require('express').Router();
const controller   = require('../controllers/loanController');
const authMiddleware = require('../middlewares/auth');

router.post('/loan', authMiddleware, controller.create);
router.get('/loans', authMiddleware, controller.listAll);
router.get('/loans/users/:usuario_id', authMiddleware, controller.listByUser);

module.exports = router;