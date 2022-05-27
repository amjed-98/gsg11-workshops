// const { sign } = require('jsonwebtoken');
// const bcrypt = require('bcryptjs');
// const { addUser, checkEmail } = require('../database/queries');
// const signUpSchema = require('../validation/signUpSchema');

// const signUp = (request, response) => {
//   signUpSchema.validateAsync(request.body)
//     .then((value) => {
//       const { name, email, password } = value;
//       checkEmail(email).then((data) => {
//         if (data.rows.length !== 0) return response.json({ errorEmail: 'Email is used USE another email' });

//         return bcrypt.hash(password, 10).then((hashedPassword) => addUser(name, email, hashedPassword)
//           .then(({ rows }) => sign({ id: rows[0].id }, process.env.SECRET_KEY, (errorId, token) => {
//             if (errorId) return response.send(errorId);
//             return response.status(201).cookie('token', token).redirect('/todo');
//           })))
//           .catch(() => response.json({ errorHashing: 'Hash Function Error' }));
//       });
//     })
//     .catch(() => {
//       response.status(403).json({ errorValidation: 'validate Async Schema' });
//     });
// };

// module.exports = signUp;

const { sign } = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { addUser, checkEmail } = require('../database/queries');
const signUpSchema = require('../validation/signUpSchema');

const signUp = (request, response) => {
  signUpSchema
    .validateAsync(request.body)
    .then((value) => {
      const { name, email, password } = value;
      checkEmail(email).then((data) => {
        if (data.rows.length !== 0) { return response.json({ email: 'Email is used USE another email' }); }

        return bcrypt
          .hash(password, 10)
          .then((hashedPassword) => addUser(name, email, hashedPassword).then(({ rows }) => sign({ id: rows[0].id }, process.env.SECRET_KEY, (errorId, token) => {
            if (errorId) return response.send(errorId);
            return response
              .status(201)
              .cookie('token', token)
              .json({ message: 'Sign in sucssefully ' });
          })))
          .catch(() => response.json({ hash: 'Hash Function Error' }));
      });
    })
    .catch((err) => {
      console.log(err);
      response.status(403).json({ validation: 'Validation Error' });
    });
};

module.exports = signUp;
