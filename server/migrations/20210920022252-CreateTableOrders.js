'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('orders',{
      id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
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
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('orders');
  }
};