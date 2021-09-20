'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('products',{
      id:{type: Sequelize.INTEGER, primaryKey: true, autoIncrement: true},
      name: {type: Sequelize.STRING, required: true},
      description: {type: Sequelize.TEXT, required: true},
      price: {type: Sequelize.FLOAT, required: true},
      image: {type: Sequelize.STRING, required: true},
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
     await queryInterface.dropTable('products');
  }
};
