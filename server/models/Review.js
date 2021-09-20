const {Datatypes, Sequelize} = require('sequelize');

module.exports = (sequelize) => sequelize.define('reviews',{
    id:{type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
    content: {type: DataTypes.TEXT, required: true},
    productId: {
        type: Sequelize.INTEGER,
        references:{
            model:'products',
            key: 'id',
        },
        onDelete: 'CASCADE'
    },
    usertId: {
        type: Sequelize.INTEGER,
        references:{
            model:'users',
            key: 'id',
            usuario: 'name'
        },
        onDelete: 'CASCADE'
    },
    createdAt: Datatypes.DATE,
    updatedAt: Datatypes.DATE
});