const { Datatypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('users',{
    id:{type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name:{type: DataTypes.STRING, required: true},
    last_name:{type: DataTypes.STRING, required: true},
    address:{type: DataTypes.STRING, required: true},
    postal_code:{type: DataTypes.NUMBER, required: true},
    cell_phone_number:{type: DataTypes.NUMBER, required: true},
    password:{type: DataTypes.STRING, required: true},
    email:{type: DataTypes.STRING, required: true},
    createdAt: Datatypes.DATE,
    updatedAt: Datatypes.DATE
});