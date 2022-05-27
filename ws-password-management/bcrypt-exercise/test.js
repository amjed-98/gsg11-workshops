const bcrypt = require('bcryptjs');

const salt = bcrypt.genSaltSync(10);
const hash = bcrypt.hashSync('password', salt);

console.log(bcrypt.compareSync('password', hash));
console.log(bcrypt.compareSync('password1', hash));

// auto salt
const hash2 = bcrypt.hashSync('password', 8);
