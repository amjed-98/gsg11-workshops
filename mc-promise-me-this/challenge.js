const https = require('https');

const makePokeUrl = (pokemon) => `https://pokeapi.co/api/v2/pokemon/${pokemon}/`;
const pikaUrl = makePokeUrl('pikachu');

// const myApiCall = (url, callback) => {
//   https
//     .get(url, (resp) => {
//       let data = '';
//       resp.on('data', (chunk) => {
//         data += chunk;
//       });
//       resp.on('end', () => {
//         try {
//           callback(null, JSON.parse(data));
//         } catch (e) {
//           callback("Oops, this isn't JSON");
//         }
//       });
//     })
//     .on('error', (err) => {
//       callback(err.message);
//     });
// };

const myApiCall = (url) =>
  new Promise((resolve, reject) => {
    https
      .get(url, (resp) => {
        let data = '';
        resp.on('data', (chunk) => {
          data += chunk;
        });
        resp.on('end', () => {
          try {
            resolve(JSON.parse(data));
          } catch (e) {
            reject("Oops, this isn't JSON");
          }
        });
      })
      .on('error', (err) => {
        reject(err.message);
      });
  });

// myApiCall(pikaUrl, (err, res) => {
//   if (err) console.log(res);
//   else console.log(res);
// });

const promise1 = myApiCall(makePokeUrl('bulbasaur'));
const promise2 = myApiCall(makePokeUrl('charmander'));
const promise3 = myApiCall(makePokeUrl('squirtle'));

const promisesArray = [promise1, promise2, promise3];

Promise.all(promisesArray)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

// myApiCall(pikaUrl).then((data) => console.log(data.held_items));

//Now let's make it a Promise

// const myPromiseApi =

//And call it here...
