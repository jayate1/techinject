'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Timetracking extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Timetracking.init({
    user_id: DataTypes.INTEGER,
    task_id: DataTypes.INTEGER,
    start_time: DataTypes.TIME,
    end_time: DataTypes.TIME,
    duration: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Timetracking',
  });
  return Timetracking;
};