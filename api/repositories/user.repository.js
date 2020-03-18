const dbConnection = require('./../data/db/jsondb-manager');

exports.createUser = (user) => {
  const result = dbConnection.createRecord(user, 'users');
  return result;
};
exports.updateUser = () => {};
exports.deleteUser = () => {};
exports.getAllUsers = () => {};
exports.getAllUsersById = () => {};