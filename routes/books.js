const router = require('express').Router();
const bookController = require('../controllers/bookController');
const authMiddleware = require('../middlewares/auth');
const { body } = require('express-validator');
router.post(
  '/add/book',
  authMiddleware,
  [
    body('titulo').notEmpty().withMessage('El título es obligatorio'),
    body('autor').notEmpty().withMessage('El autor es obligatorio'),
    body('genero').notEmpty().withMessage('El género es obligatorio'),
    body('publicadoEn').isISO8601().withMessage('Fecha de publicación inválida')
  ],
  bookController.add
);
router.get('/books', bookController.list);
router.get('/book/:id', bookController.detail);
router.put(
  '/book/:id',
  authMiddleware,
  [
    body('titulo').optional().notEmpty().withMessage('El título no puede estar vacío'),
    body('autor').optional().notEmpty().withMessage('El autor no puede estar vacío'),
    body('genero').optional().notEmpty().withMessage('El género no puede estar vacío'),
    body('publicadoEn').optional().isISO8601().withMessage('Fecha de publicación inválida')
  ],
  bookController.update
);
router.delete('/book/:id', authMiddleware, bookController.remove);


module.exports = router;