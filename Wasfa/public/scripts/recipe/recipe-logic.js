const select = (tag) => document.querySelector(tag);

const createEl = (tag, className, text) => {
  const el = document.createElement(tag);

  if (className) el.className = className;

  if (text) el.textContent = text;

  return el;
};
