const Subject = require('rxjs/Subject').Subject;

module.exports = function () {
  const logged = new Subject();
  logged.next(false);

  let userEmail = '';

  return {
    setLogged(isLogged) { logged.next(isLogged); },
    watchLogged(fn) { logged.subscribe(fn); },
    setUserEmail(email) { userEmail = email; },
    getUserEmail() { return userEmail; },
  };
};
