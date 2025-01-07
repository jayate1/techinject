'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Task_logs extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Task_logs.init({
    user_id: DataTypes.INTEGER,
    task_id: DataTypes.INTEGER,
    log_message:DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Task_logs',
  });
  return Task_logs;
};