config = require('../config/config');
const { Model, DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  class Loan extends Model {}
  Loan.init({
    loanDate:     { type: DataTypes.DATE,     allowNull: false },
    returnDate:   { type: DataTypes.DATE,     allowNull: false },
    status:       { 
      type: DataTypes.ENUM('prestado','devuelto','con retraso'), 
      allowNull: false, defaultValue: 'prestado' 
    }
  }, { sequelize, modelName: 'Loan' });

  Loan.associate = (models) => {
    Loan.belongsTo(models.User, { foreignKey: 'UserId' });
    Loan.belongsTo(models.Book, { foreignKey: 'BookId' });
  };

  return Loan;
};