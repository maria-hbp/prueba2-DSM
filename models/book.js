config = require('../config/config');
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Book extends Model {}
  Book.init({
    titulo:       { type: DataTypes.STRING,  allowNull: false },
    autor:        { type: DataTypes.STRING,  allowNull: false },
    genero:       { type: DataTypes.STRING,  allowNull: false },
    publicadoEn:  { type: DataTypes.STRING,  allowNull: false },
    disponible:   { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: true },
    eliminado:    { type: DataTypes.BOOLEAN, allowNull: false, defaultValue: false }
  }, { sequelize, modelName: 'Book' });
  return Book;
};