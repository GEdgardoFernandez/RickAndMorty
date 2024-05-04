require('dotenv').config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST } = process.env;
const UserModel = require('./models/User');
const FavoriteModel = require('./models/Favorite');

// EJERCICIO 03
// A la instancia de Sequelize le falta la URL de conexión. ¡Agrégala!
// Recuerda pasarle la información de tu archivo '.env'.

// URL ----> postgres://DB_USER:DB_PASSWORD@DB_HOST/rickandmorty
const sequelize = new Sequelize(
   // URL
   `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/rickandmorty`,
   { logging: false, native: false }
);

// EJERCICIO 05
// Ejecuta las funciones que definen tus modelos aquí
UserModel(sequelize);
FavoriteModel(sequelize);

// Ejercicio 06
// Relaciona tus modelos aquí
// Relaciona los modelos en una relación de muchos a muchos
const { User, Favorite } = sequelize.models;
User.belongsToMany(Favorite, { through: 'user_favorite' });
Favorite.belongsToMany(User, { through: 'user_favorite' });

// Define otras relaciones si es necesario
User.hasMany(Favorite);
Favorite.belongsTo(User);

module.exports = {
   User,
   Favorite,
   conn: sequelize,
};