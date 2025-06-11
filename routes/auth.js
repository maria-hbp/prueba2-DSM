const router = require('express').Router();
const controller   = require('../controllers/authcontroller');
const authMiddleware = require('../middlewares/auth');

router.post('/register', controller.register);
router.post('/login',    controller.login);
router.get('/me', authMiddleware, controller.me);

module.exports = router;