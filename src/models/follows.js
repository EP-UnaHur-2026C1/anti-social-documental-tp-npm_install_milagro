'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Follows extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Follows.belongsTo(models.User, {
        foreingKey: "nickname",
        as: "following_user_nickname"
      }),
      Follows.belongsToMany(models.User, {
        foreingKey: "nickname",
        as: "followed_user_nickname"
      })
    }
  }
  Follows.init({
    following_user_nickname: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    followed_user_nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  }
  ,{
    sequelize,
    modelName: 'Follows',
  });
  return Follows;
};