//  Minuto 2:35:19 https://youtu.be/qJ5R9WTW0_E?t=9319
// Uso de bcryptjs

const bcrypt = require('bcryptjs');
// import { bcryptjs } from 'bcryptjs'


const helpers = {};

helpers.encryptPassword = async (password) => {
  const salt = await bcrypt.genSalt(10);
  const hash = await bcrypt.hash(password, salt);
  return hash;
};

helpers.matchPassword = async (password, savedPassword) => {
  try {
    return await bcrypt.compare(password, savedPassword);
  } catch (e) {
    console.log(e);
  }
};

module.exports = helpers;