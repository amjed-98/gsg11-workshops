const { verify } = require('jsonwebtoken');

const auth = (request, response, next) => {
  if (request.cookies.token) {
    const { token } = request.cookies;

    return verify(token, process.env.SECRET_KEY, (err, verifyCookies) => {
      if (err) return response.redirect('/login');
      request.id = verifyCookies.id;
      return next();
    });
  }

  return next();
};

module.exports = auth;

// landing page two choices
// sign up
// login
