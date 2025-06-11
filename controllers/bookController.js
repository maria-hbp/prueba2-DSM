const sequelize = require('../models');
const Book = require('../models/book')(sequelize);
const { validationResult } = require('express-validator');

exports.add = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  const libro = await Book.create({ ...req.body });
  res.status(201).json(libro);
};

exports.list = async (req, res) => {
  const libros = await Book.findAll({
    where: { eliminado: false },
    order: [['titulo', 'ASC']]
  });
  if (!libros || libros.length === 0) return res.sendStatus(404);
  res.json(libros);
};

exports.detail = async (req, res) => {
  const libro = await Book.findByPk(req.params.id);
  if (!libro) return res.sendStatus(404);
  res.json(libro);
};

exports.update = async (req, res) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }
  await Book.update(req.body, { where: { id: req.params.id }});
  res.sendStatus(204);
};

exports.remove = async (req, res) => {
  await Book.update({ eliminado: true }, { where: { id: req.params.id }});
  res.sendStatus(204);
};
