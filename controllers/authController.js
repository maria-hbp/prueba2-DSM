const sequelize = require('../models');
const User = require('../models/user')(sequelize);
const bcrypt = require('bcryptjs');
const jwt    = require('jsonwebtoken');

exports.register = async (req, res) => {
  const { nombre, apellido, email, password } = req.body;
  const hash = await bcrypt.hash(password, 10);
  const user = await User.create({ nombre, apellido, email, password: hash });
  res.status(201).json({ id: user.id, email: user.email });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ where: { email } });
  if (!user || !await bcrypt.compare(password, user.password))
    return res.status(401).json({ error: 'Credenciales inválidas' });
  const token = jwt.sign({ id: user.id }, 'TU_SECRETO', { expiresIn: '1h' });
  res.json({ token });
};

exports.me = async (req, res) => {
  const user = await User.findByPk(req.userId, { attributes: { exclude: ['password'] }});
  res.json(user);
};