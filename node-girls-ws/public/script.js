/* eslint-disable comma-dangle */
// document.onreadystatechange = () => {
//   if (document.readyState === 'complete') {
//     const xhr = new XMLHttpRequest();
//     xhr.onreadystatechange = () => {
//       if (xhr.readyState === 4) {
//         if (xhr.status === 200) {
//           const data = JSON.parse(xhr.responseText);
//           // eslint-disable-next-line no-restricted-syntax
//           for (const blogPost in data) {
//             if (blogPost) {
//               const postDiv = document.createElement('div');
//               const postText = document.createElement('p');
//               const thumbnail = document.createElement('img');
//               const postContainer = document.getElementsByClassName('post-container')[0];

//               thumbnail.src = './img/logo2.png';
//               thumbnail.className = 'thumbnail';
//               postText.innerHTML = `<div>
//               <p>${new Date(+blogPost).toLocaleString()}</p>
//                         ${data[blogPost]}
//               </div>`;
//               postDiv.className = 'post';

//               postDiv.appendChild(thumbnail);
//               postDiv.appendChild(postText);
//               postContainer.appendChild(postDiv);
//             }
//           }
//         } else {
//           console.error(xhr.responseText);
//         }
//       }
//     };
//     xhr.open('GET', '/posts', true);
//     xhr.send();
//   }
// };
