const ReplaySubject = require('rxjs/ReplaySubject').ReplaySubject;

const USER_TYPES = Object.freeze({
  AUTHOR: 'author',
  REVIEWER: 'reviewer',
  EVENT_ADMINISTRATOR: 'eventAdministrator',
  REGULAR: 'regular'
});

const userToken = Symbol('userToken');
const userInfo = Symbol('userInfo');
const loggedSubject = Symbol('loggedSubject');

module.exports = userServiceProvider;

function userServiceProvider() {
  return new UserService();
}

class UserService {
  constructor() {
    this[loggedSubject] = new ReplaySubject();
    this[loggedSubject].next(false);

    this[userToken] = '';
    this[userInfo] = {
      id: 0,
      email: 'none',
      role: {
        id: 0,
        type: 'none',
      },
    };
  }

  getUserInfo() {
    return this[userInfo];
  }

  setUser(userInfo) {
    this[userToken] = userInfo.token;
    this[userInfo] = userInfo.info;
    setLogged(true);
  }

  getUserId() {
    return this[userInfo].id;
  }

  isRegularUser() { 
    return this[userInfo].role.type === USER_TYPES.REGULAR; 
  }

  isEventAdministrator() {
    return this[userInfo].role.type === USER_TYPES.EVENT_ADMINISTRATOR; 
  }

  isAuthor() {
    return this[userInfo].role.type === USER_TYPES.AUTHOR;
  }

  isReviewer() {
    return this[userInfo].role.type === USER_TYPES.REVIEWER;
  }

  setLogged(isLogged) { 
    this[loggedSubject].next(isLogged);
  }

  watchLogged(fn) {
    return this[loggedSubject].subscribe(fn);
  }
  
  getUserEmail() {
    return this[userInfo].email;
  }

  getToken() {
    return this[userToken];
  }

  getRoleId() {
    return this[userInfo].role.id;
  }

  getRoleType() {
    return this[userInfo].role.type;
  }
}
