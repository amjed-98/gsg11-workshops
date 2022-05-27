import request from './request.js';
const addProgramBtn = document.querySelector('.add-program-btn');
const programInput = document.querySelector('.name-program-input');
const sessions = document.querySelector('.sessions-input');
const time = document.querySelector('.time-input');

addProgramBtn.addEventListener('click', () => {
  const program = {
    program: programInput.value,
    sessions: sessions.value,
    time: time.value,
  };
  request('/add_program', program);
});
