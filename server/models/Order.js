const { Datatypes } = require('sequelize');

module.exports = (sequelize) => sequelize.define('orders',{
    id:{type: Datatypes.INTEGER, primaryKey: true, autoIncrement: true},
    productId: {
        type: Sequelize.INTEGER,
        references:{
            model:'products',
            key: 'id',
            pay: 'price'
        },
        onDelete: 'CASCADE'
    },
    usertId: {
        type: Sequelize.INTEGER,
        references:{
            model:'users',
            key: 'id',
            usuario: 'name',
            ubicacion: 'address',
            cp: 'postal_code'
        },
        onDelete: 'CASCADE'
    },
    createdAt: Datatypes.DATE,
    updatedAt: Datatypes.DATE
});