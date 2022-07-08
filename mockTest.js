const UserStore = require("./UserStore");
function getUserDisplayName(userId) {
  // console.dir(UserStore);
  let user = UserStore.getUser(userId);
  return `${user.LastName}, ${user.FirstName}`;
}
module.exports = getUserDisplayName;
