'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Loans', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      loanDate: {
        type: Sequelize.DATE
      },
      returnDate: {
        type: Sequelize.DATE
      },
      status: {
        type: Sequelize.ENUM('prestado', 'devuelto', 'con retraso'),
        allowNull: false,
        defaultValue: 'prestado'
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Loans');
  }
};