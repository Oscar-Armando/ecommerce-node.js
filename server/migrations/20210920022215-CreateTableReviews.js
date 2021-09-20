'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('reviews',{
      id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
      content: {type: Sequelize.TEXT, required: true},
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
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('reviews');
  }
};