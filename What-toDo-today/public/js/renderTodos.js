const editInput = document.createElement('input');
const toDoContainer = document.querySelector('.data');
const cancelBtn = document.createElement('button');

cancelBtn.textContent = 'cancel';

const renderTodo = (data, element, i) => {
  const content = document.createElement('div');
  const leftSide = document.createElement('div');
  const span = document.createElement('span');
  const date = document.createElement('span');
  const rightSide = document.createElement('div');
  const deleteBtn = document.createElement('button');
  const editBtn = document.createElement('button');

  deleteBtn.textContent = 'Delete';
  editBtn.textContent = 'Edit';
  deleteBtn.id = data[i].id;

  editBtn.id = data[i].id;
  content.id = 'content';

  leftSide.className = 'left-side';

  span.id = `id${data[i].id}`;
  date.className = 'date';
  span.textContent = element.note;
  date.textContent = new Date(data[i].date).toDateString();
  rightSide.className = 'right-side';

  content.appendChild(leftSide);
  leftSide.append(span, date);
  content.appendChild(rightSide);
  rightSide.append(deleteBtn, editBtn);
  toDoContainer.appendChild(content);

  span.onclick = () => span.classList.toggle('lineThrough');

  deleteBtn.addEventListener('click', (e) => {
    const {
      id,
      parentNode: { parentNode },
    } = e.target;

    fetch(`/todo/${id}`, { method: 'delete' }).then(() => {
      parentNode.remove();
    });
  });

  editBtn.addEventListener('click', ({ target }) => {
    const prevValue = target.parentNode.parentNode.children[0].firstChild.textContent;
    editInput.value = prevValue;

    const { id } = editBtn;
    editInput.id = id;
    toDoContainer.prepend(editInput, cancelBtn);
  });

  cancelBtn.addEventListener('click', () => {
    editInput.remove();
    editInput.remove();
    cancelBtn.remove();
  });

  editInput.addEventListener('keydown', (e) => {
    const { id } = e.target;

    if (editInput.value.trim() === '') return;
    if (e.key === 'Enter') {
      fetch(`/todo/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ note: editInput.value }),
      })
        .then((res) => res.json())
        .then(({ note: todoNote }) => {
          const todoEl = document.querySelector(`#id${id}`);
          todoEl.textContent = todoNote;
          editInput.remove();
          cancelBtn.remove();

          editInput.value = '';
        });
    }
  });
};
