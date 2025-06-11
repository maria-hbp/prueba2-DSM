'use strict';
const { Sequelize } = require('sequelize');
const config = require(__dirname + '/../config/config.js')[process.env.NODE_ENV || 'development'];
const sequelize = new Sequelize(config);
module.exports = sequelize;
