module.exports = function () {
  let logged = false;
  let userEmail = '';

  return {
    setLogged(isLogged) { logged = isLogged; },
    isLogged() { return logged; },
    setUserEmail(email) { userEmail = email; },
    getUserEmail() { return userEmail; },
  };
};
