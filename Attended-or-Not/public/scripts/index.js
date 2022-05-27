import request from './request.js';
const addUserBtn = document.querySelector('.add-user-btn');
const name = document.querySelector('.name-input');
const phone = document.querySelector('.phone-input');
const date = document.querySelector('.date-input');
const programSelect = document.querySelector('#programs');
const table = document.querySelector('table');

const createEl = (tag, parent, arr) => {
  for (let i = 0; i < arr.length; i++) {
    const el = document.createElement(tag);
    el.textContent = arr[i];
    parent.append(el);
  }
};

fetch('/get_program')
  .then((data) => data.json())
  .then((data) => {
    data.map((program) => {
      const option = document.createElement('option');
      option.value = program.id;
      option.textContent = program.name_program;
      programSelect.append(option);
    });
  });

fetch('/members')
  .then((data) => data.json())
  .then((data) => {
    const mainRow = document.createElement('tr');
    createEl('th', mainRow, ['id', 'name', 'phone', 'date', 'program', 'session', 'Hours', 'action']);
    table.append(mainRow);

    return data.map((obj) => {
      const Arr = Object.values(obj);
      const row = document.createElement('tr');
      createEl('td', row, Arr);

      const btn = document.createElement('button');
      const td = document.createElement('td');
      btn.textContent = 'Delete';
      btn.id = obj.id;
      btn.className = 'deleteBtn';
      td.append(btn);
      row.append(td);

      // delete member
      btn.addEventListener('click', (e) => {
        const id = { id: e.target.id };
        btn.parentElement.parentElement.remove();
        deleteMember(id);
      });

      table.append(row);
    });
  });
addUserBtn.addEventListener('click', () => {
  const isValid = name.value.trim() && phone.value.trim() && date.value.trim();

  if (!isValid) return;

  table.innerText = '';

  const user = {
    name: name.value,
    phone: phone.value,
    date: date.value,
    programId: programSelect.value,
  };

  const mainRow = document.createElement('tr');

  createEl('th', mainRow, ['id', 'name', 'phone', 'date', 'program', 'session', 'Hours', 'action']);
  table.append(mainRow);

  request('/add_user', user).then((data) => {
    return data.map((obj) => {
      console.log(obj.id);
      const Arr = Object.values(obj);
      const row = document.createElement('tr');
      createEl('td', row, Arr);

      const btn = document.createElement('button');
      const td = document.createElement('td');
      btn.textContent = 'Delete';
      btn.id = obj.id;
      btn.className = 'deleteBtn';
      td.append(btn);
      row.append(td);

      // delete member
      btn.addEventListener('click', (e) => {
        const id = { id: e.target.id };
        btn.parentElement.parentElement.remove();
        deleteMember(id);
      });

      table.append(row);
    });
  });
});

function deleteMember(id) {
  fetch('/member', {
    method: 'delete',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(id),
  });
}
