'use strict';

module.exports = {
    up: async (queryInterface, Sequelize) => {
        await queryInterface.bulkInsert('Books', [
            {
            id: 1,
            titulo: 'Harry Potter y la piedra filosofal',
            autor: 'J.K. Rowling',
            genero: 'Fantasía',
            publicadoEn: '1997',
            disponible: true,
            eliminado: false,
            createdAt: new Date(),
            updatedAt: new Date()
            },
            {
            id: 2,
            titulo: 'Harry Potter y la cámara secreta',
            autor: 'J.K. Rowling',
            genero: 'Fantasía',
            publicadoEn: '1998',
            disponible: true,
            eliminado: false,
            createdAt: new Date(),
            updatedAt: new Date()
            },
            {
            id: 3,
            titulo: 'Harry Potter y el prisionero de Azkaban',
            autor: 'J.K. Rowling',
            genero: 'Fantasía',
            publicadoEn: '1999',
            disponible: true,
            eliminado: false,
            createdAt: new Date(),
            updatedAt: new Date()
            },
             {
            id: 4,
            titulo: 'Asesinato en el canadian express',
            autor: 'Eric Wilson',
            genero: 'Misterio',
            publicadoEn: '1976',
            disponible: true,
            eliminado: false,
            createdAt: new Date(),
            updatedAt: new Date()
            }
        ], {});
    },
    down: async (queryInterface, Sequelize) => {
        await queryInterface.bulkDelete('Books', null, {});
    }
};