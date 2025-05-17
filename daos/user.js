const bcrypt = require('bcrypt');

const User = require('../models/user');
module.exports = {};

module.exports.getByEmail = (email) => {
  return User.findOne({ email: email }).lean();
};

module.exports.create = async (email, plaintextPassword, roles) => {
  const hashedPassword = await bcrypt.hash(plaintextPassword, 10);
  const user = await User.create({
    email,
    password: hashedPassword,
    roles: roles,
  });
  return user;
};

module.exports.login = async (email, plaintextPassword) => {
  // Make sure user exists.
  const user = await User.findOne({ email });
  if (!user) {
    return undefined;
  }
  // Check password by comparing plaintextPassword with stored (encrypted) password.
  const hasValidPassword = await bcrypt.compare(
    plaintextPassword,
    user.password
  );
  if (hasValidPassword) {
    return user;
  } else {
    return undefined;
  }
};

module.exports.changePassword = async (userObj, plaintextPassword) => {
  // console.log('userObj', userObj);
  const hashedPassword = await bcrypt.hash(plaintextPassword, 10);
  const result = await User.findByIdAndUpdate(userObj._id, {
    password: hashedPassword,
  });
  return result;
};
