import _sequelize from 'sequelize';
const { Model, Sequelize } = _sequelize;

export default class product_in_order extends Model {
  static init(sequelize, DataTypes) {
  return super.init({
    id: {
      autoIncrement: true,
      autoIncrementIdentity: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    },
    order_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'order',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    quatity: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    status: {
      type: DataTypes.ENUM("pay","pending"),
      allowNull: true,
      defaultValue: 'pending'
    }
  }, {
    sequelize,
    tableName: 'product_in_order',
    schema: 'public',
    timestamps: false,
    indexes: [
      {
        name: "product_in_order_pkey",
        unique: true,
        fields: [
          { name: "id" },
        ]
      },
    ]
  });
  }
}
