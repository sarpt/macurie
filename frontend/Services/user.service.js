const ReplaySubject = require('rxjs/ReplaySubject').ReplaySubject;

module.exports = function () {
  const logged = new ReplaySubject();
  logged.next(false);

  let userEmail = '';
  let token = '';

  return {
    setLogged(isLogged) { logged.next(isLogged); },
    watchLogged(fn) { return logged.subscribe(fn); },
    setUserEmail(email) { userEmail = email; },
    getUserEmail() { return userEmail; },
    setToken(userToken) { token = userToken; },
    getToken() { return token; },
  };
};
