'use strict';

const modalWindow = document.querySelector('.modal-window');
const overlay = document.querySelector('.overlay');
const btnClosed = document.querySelector('.close-modal-window');
const btnsShowModalWindow = document.querySelectorAll('.show-modal-window');

function modalHandler() {
  console.log('click');
  modalWindow.classList.remove('hidden');
  overlay.classList.remove('hidden');
}

function closeWindow() {
  console.log('click');
  modalWindow.classList.add('hidden');
  overlay.classList.add('hidden');
}

for (let i = 0; i < btnsShowModalWindow.length; i++) {
  btnsShowModalWindow[i].addEventListener('click', modalHandler);
  btnClosed.addEventListener('click', closeWindow);
  overlay.addEventListener('click', closeWindow);
}
function closeOutClick() {}

document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modalWindow.classList.contains('hidden')) {
    closeWindow();
  }
});
