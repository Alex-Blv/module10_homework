function show() {
  
  const btn = document.querySelector(".btn");
  btn.addEventListener('click', () => {
    alert (`Размер экрана монитора: ширина - ${window.screen.width}px, высота - ${window.screen.height}px;\n
Размер экрана с учётом полосы прокрутки: ширина - ${window.innerWidth}px, высота - ${window.innerHeight}px;\n
Размер экрана без учёта полосы прокрутки: ширина - ${document.documentElement.clientWidth}px, высота - ${document.documentElement.clientHeight}px;
`)
  });
}

document.DOMContentLoaded = show();