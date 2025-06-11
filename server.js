const express = require('express');
const cors    = require('cors');
const sequelize = require('./models');

const authRoutes  = require('./routes/auth');
const bookRoutes  = require('./routes/books');

const app = express();
app.use(cors(), express.json());

app.use('/api', authRoutes);
app.use('/api', bookRoutes);

sequelize.sync() 
  .then(() => app.listen(3000, () => console.log('API corriendo en http://localhost:3000')))
  .catch(console.error);