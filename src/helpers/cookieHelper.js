import Cookies from 'js-cookie';

const COOKIE_NAME = 'auth';

export const AuthCookie = {
  get: () => {
    return Cookies.get(COOKIE_NAME);
  },
  set: (value) => {
    Cookies.set(COOKIE_NAME, value);
  },
  remove: () => {
    Cookies.remove(COOKIE_NAME);
  }
};
