const select = (el) => document.querySelector(el);
const selectAll = (el) => Array.from(document.querySelectorAll(el));
const selectById = (el) => document.getElementById(el);
/*
!1- Write a function which, if the 'h2' element  has the class "header",
it will be removed; otherwise the class "header" is added.
*/
const header = select('.header');
const toggleClass = () => {
  header.classList.toggle('header');
};
toggleClass();

/*
!2- Select the section with an id of 'container' without using querySelector,
and style the font with 'blue' color
*/
const container = selectById('container');
const styleContainer = () => {
  container.style.color = 'blue';
};
styleContainer();

//! 3- Select the 'nav' with a class of "firstNav" and style the font with 'italic' fontStyle.
const firstNav = select('.firstNav');
const styleItalic = () => {
  firstNav.style.fontStyle = 'italic';
};
styleItalic();

/*
!4- Select a list item with a class of 'contact', but only the list item inside of the 'secondList' nav,
and style it with background color 'yellow'
*/
const ContactListItem = select('.secondList .contact');
const backgroundList = () => {
  ContactListItem.style.background = 'yellow';
};
backgroundList();

//!5- Create a new 'li' element , give it the text 'project' and append it to the 'firstList' .
const li = document.createElement('li');
const textEl = document.createTextNode('project');
const newList = () => {
  li.appendChild(textEl);
  firstNav.appendChild(li);
};
newList();

//!6- Loop over all of the 'li' elements inside the 'secondList' and give them a background color of "brown".
const brownColor = () => {
  const lists = selectAll('.secondList li');
  lists.forEach((li) => (li.style.background = 'brown'));
};
brownColor();

/*
!7- Write a function which returns the value in the `firstName` text input
*/
// const firstName = selectAll(`[name = 'firstName']`);
const firstName = document.getElementsByName('firstName')[0];
const getFirstNameValue = () => console.log(firstName.value);
getFirstNameValue();

/*
!!8- Write a function which takes a string, `inputName`, and returns the value in the input which
has `inputName` as the name attribute
*/
const getValue = (inputName) =>
  console.log(document.getElementsByName(inputName)[0].value);
getValue('lastName');

/*

!9- Write a function, `generateUl`, which takes an array of strings, and returns a
`ul` htmlElement containing `li` elements for each array element. Each `li'
should contain the value of the array element.
*/
const generateUl = (array) => {
  const ul = document.createElement('ul');

  for (let i = 0; i < array.length; i++) {
    const li = document.createElement('li');
    li.appendChild(document.createTextNode(array[i]));
    ul.appendChild(li);
    document.body.append(ul);
  }
};
generateUl(['amjad', 'ahmad', 'mohamed']);

//!!10- Remove the 'div' with a class of 'footer'.
const footer = select('.footer');
const removeFooter = () => {
  footer.classList.remove('footer');
};
removeFooter();
