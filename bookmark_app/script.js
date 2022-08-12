const modal = document.getElementById('modal');
const modalshow = document.getElementById('show-modal');
const modalclose = document.getElementById('close-modal');
const bookmarkForm = document.getElementById('bookmark-form');
const websiteNameEl = document.getElementById('website-name');
const websiteUrlEl = document.getElementById('website-URL');
const bookmarkContainer = document.getElementById('bookmarks-container');
const deletebookmark = document.getElementById('delete-bookmark');

// show modal , Focus on input

function showModal() {
  modal.classList.add('show-modal');
  websiteNameEl.focus();
}

// Modal Event Listeners
modalshow.addEventListener('click', showModal);
modalclose.addEventListener('click', () => {
  modal.classList.remove('show-modal');
});

/* ternary operatior  */

window.addEventListener('click', (e) =>
  e.target === modal ? modal.classList.remove('show-modal') : false
);

// Validate Form
function validate(nameValue, urlValue) {
  const expression =
    /https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)/g;
  const regex = new RegExp(expression);
  if (!nameValue || !urlValue) {
    alert('빈칸을 채워주세요!');
    return false;
  }

  if (!urlValue.match(regex)) {
    alert('웹사이트 형식을 확인해주세요!');
    return false;
  }
  // valid
  return true;
}

//Handle Data from Form
function storeBookmark(e) {
  e.preventDefault();
  const nameValue = websiteNameEl.value;
  let urlValue = websiteUrlEl.value;
  if (!urlValue.includes('http://', 'https://')) {
    urlValue = `https://${urlValue}`;
  }
  console.log(nameValue, urlValue);
  if (!validate(nameValue, urlValue)) {
    return false;
  }
}

// Event Listener
bookmarkForm.addEventListener('submit', storeBookmark);
