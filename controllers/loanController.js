const Loan = require('../models/loan');
const Book = require('../models/book');
const { Op } = require('sequelize');
const { validationResult } = require('express-validator');

exports.create = async (req, res) => {
  const today = new Date();
  const nextWeek = new Date(today);
  nextWeek.setDate(nextWeek.getDate()+7);
  const prestamo = await Loan.create({
    UserId: req.userId,
    BookId: req.body.bookId,
    loanDate: today,
    returnDate: nextWeek,
    status: 'prestado'
  });
  await Book.update({ disponible: false }, { where: { id: req.body.bookId }});
  res.status(201).json(prestamo);
};

exports.listAll = async (req, res) => {
  const prestamos = await Loan.findAll({ include: ['User','Book'] });
  res.json(prestamos);
};

exports.listByUser = async (req, res) => {
  const prestamos = await Loan.findAll({
    where: { UserId: req.params.usuario_id },
    include: ['Book']
  });
  res.json(prestamos);
};