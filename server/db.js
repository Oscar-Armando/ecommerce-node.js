const { Sequelize } = require('sequelize'); 

const Order = require('./models/Order');
const Product = require('./models/Product');
const Project = require('./models/Project');
const Review = require('./models/Review');
const User = require('./models/User');

const sequelize = new Sequelize('ecommerce-api', 'root', 'root',{
    host: 'localhost',
    dialect: 'mariadb',
    logging: false,
});

const models = [
    Order,
    Product,
    Project,
    Review,
    User
];

for (let model of models){
    model(sequelize)
};

const {products, users, orders, projects, reviews} = sequelize.models;
projects.belongsTo(users);
orders.belongsTo(users);
orders.belongsTo(products);
reviews.belongsTo(users);
reviews.belongsTo(products);

module.exports = sequelize;