import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _car from  "./car.js";
import _order from  "./order.js";
import _product from  "./product.js";
import _product_in_cart from  "./product_in_cart.js";
import _product_in_order from  "./product_in_order.js";
import _users from  "./users.js";

export default function initModels(sequelize) {
  const car = _car.init(sequelize, DataTypes);
  const order = _order.init(sequelize, DataTypes);
  const product = _product.init(sequelize, DataTypes);
  const product_in_cart = _product_in_cart.init(sequelize, DataTypes);
  const product_in_order = _product_in_order.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);

  product_in_cart.belongsTo(car, { as: "cart", foreignKey: "cart_id"});
  car.hasMany(product_in_cart, { as: "product_in_carts", foreignKey: "cart_id"});
  product_in_order.belongsTo(order, { as: "order", foreignKey: "order_id"});
  order.hasMany(product_in_order, { as: "product_in_orders", foreignKey: "order_id"});
  product_in_cart.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(product_in_cart, { as: "product_in_carts", foreignKey: "product_id"});
  product_in_order.belongsTo(product, { as: "product", foreignKey: "product_id"});
  product.hasMany(product_in_order, { as: "product_in_orders", foreignKey: "product_id"});
  car.belongsTo(users, { as: "user", foreignKey: "userId"});
  users.hasMany(car, { as: "cars", foreignKey: "userId"});
  order.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(order, { as: "orders", foreignKey: "user_id"});
  product.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(product, { as: "products", foreignKey: "user_id"});

  return {
    car,
    order,
    product,
    product_in_cart,
    product_in_order,
    users,
  };
}
