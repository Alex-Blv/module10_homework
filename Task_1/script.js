const btn = document.querySelector('.j-btn-test');
const icon = document.querySelectorAll('.btn_icon');

btn.addEventListener('click', () => {

  icon.forEach((elem) => elem.classList.toggle('none'))
  
});