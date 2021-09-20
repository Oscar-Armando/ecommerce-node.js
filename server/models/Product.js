const { Datatypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('products',{
    id:{type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, required: true},
    description: {type: DataTypes.TEXT, required: true},
    price: {type: DataTypes.FLOAT, required: true},
    image: {type: DataTypes.STRING, required: true},
    createdAt: Datatypes.DATE,
    updatedAt: Datatypes.DATE
});
