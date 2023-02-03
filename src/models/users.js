import { hashSync } from 'bcrypt';
import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

/**
 * @openapi
 * components:
 *    schemas:
 *      register:
 *        type: object
 *        properties:
 *          username:
 *            type: string
 *            example: JoeDoe
 *          email:
 *            type: string
 *            example: joe@doe.com
 *          password:
 *            type: string
 *            example: 1234
 *      login:
 *        type: object
 *        properties:
 *          email:
 *            type: string
 *            example: joe@doe.com
 *          password:
 *            type: string
 *            example: 1234
 */
export default class users extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    username: {
      type: DataTypes.STRING,
      allowNull: true
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: "users_email_key"
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCreate: (user, options) => {
        const { password } = user;
        const hash = hashSync(password, 10);
        user.password = hash;
      },
    },
    sequelize,
    tableName: 'users',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "users_email_key",
        unique: true,
        fields: [
          { name: "email" },
        ]
      },
      {
        name: "users_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
