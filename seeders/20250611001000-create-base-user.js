'use strict';
const bcrypt = require('bcryptjs');
module.exports = {
  async up (queryInterface) {
    const hash = await bcrypt.hash('TuPassword123', 10);
    return queryInterface.bulkInsert('Users', [{
      nombre:   'Admin',
      apellido: 'Biblioteca',
      email:    'admin@biblioteca.local',
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },
  async down (queryInterface) {
    return queryInterface.bulkDelete('Users', { email: 'admin@biblioteca.local' });
  }
};