const ReplaySubject = require('rxjs/ReplaySubject').ReplaySubject;

module.exports = function () {
  const logged = new ReplaySubject();
  logged.next(false);

  let userEmail = '';
  let token = '';
  let id = -1;
  let role = '';

  return {
    setLogged(isLogged) { logged.next(isLogged); },
    watchLogged(fn) { return logged.subscribe(fn); },
    setUserEmail(email) { userEmail = email; },
    getUserEmail() { return userEmail; },
    setToken(userToken) { token = userToken; },
    getToken() { return token; },
    setRole(userRole) { role = userRole; },
    getRoleId() { return role.id; },
    getRoleType() { return role.type; },
    isAuhtor() { return role.type === 'author'; },
    isReviewer() { return role.type === 'reviewer'; },
    isEventAdministrator() { return role.type === 'eventAdministrator'; },
    isRegularUser() { return role.type === 'regular'; },
    setUserId(userId) { id = userId; },
    getUserId() { return id; },
    setUser(userInfo) {
      token = userInfo.token;
      id = userInfo.info.id;
      role = userInfo.info.role;
      this.setLogged(true);
    },
  };
};
