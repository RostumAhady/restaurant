const wrapper = document.querySelector('.menu-wrapper'),
      nav = document.querySelector('.menu-sidebar-container'),
      menuMain = document.querySelector('.menu-main'),
      gallery = document.querySelector('.gallery');

function fadeIn(){
  const topOfNav = menuMain.offsetTop - 400;
  const topOfGallery = gallery.offsetTop - 500;
  // console.log(topOfNav, scrollY);
  console.log(topOfGallery, window.scrollY);
  if(window.scrollY >= topOfGallery){
    nav.classList.remove('show');
    menuMain.style.opacity = 0;
    resetFade()
    return;
  } else if(window.scrollY >= topOfNav){
    nav.classList.add('show');
    menuMain.style.opacity = 1;
    loopRemoveFade(lunchGridItems);
    loopRemoveFade(dinnerGridItems);
    loopRemoveFade(drinksGridItems);
    loopRemoveFade(lines);
  } else {
    nav.classList.remove('show');
    menuMain.style.opacity = 0;
    resetFade()
  }
}

window.addEventListener('scroll', fadeIn);

//menu buttons
const lunchBtn = document.getElementById('lunchBtn'),
      dinnerBtn = document.getElementById('dinnerBtn'),
      drinksBtn = document.getElementById('drinksBtn'),
      lunchMenu = document.getElementById('lunch'),
      dinnerMenu = document.getElementById('dinner'),
      drinksMenu = document.getElementById('drinks');

function removeDisplay(menu){
  menu.style.display = 'none';
  menu.style.opacity = 0;
}

function menuButtonClick(e){
  resetFade()
  lunchBtn.classList.remove('active')
  dinnerBtn.classList.remove('active')
  drinksBtn.classList.remove('active')
  if(e.target.id === 'lunchBtn'){
    lunchBtn.classList.add('active');
    lunchMenu.style.display = 'block';
    setTimeout(() => {
      lunchMenu.style.opacity = 1;
      loopRemoveFade(lunchGridItems)
      loopRemoveFade(lines)
    }, 400);     
    removeDisplay(dinnerMenu)
    removeDisplay(drinksMenu)
  }
  if(e.target.id === 'dinnerBtn'){
    dinnerBtn.classList.add('active');
    removeDisplay(lunchMenu)
    dinnerMenu.style.display = 'block';
    setTimeout(() => {
      dinnerMenu.style.opacity = 1;
      loopRemoveFade(dinnerGridItems)
      loopRemoveFade(lines)
    }, 400); 
    removeDisplay(drinksMenu)
  }
  if(e.target.id === 'drinksBtn'){
    drinksBtn.classList.add('active');
    removeDisplay(lunchMenu);
    removeDisplay(dinnerMenu);
    drinksMenu.style.display = 'block';
    setTimeout(() => {
      drinksMenu.style.opacity = 1;
      loopRemoveFade(drinksGridItems)
      loopRemoveFade(lines)
    }, 400); 
  }

}

lunchBtn.addEventListener('click', menuButtonClick)
dinnerBtn.addEventListener('click', menuButtonClick)
drinksBtn.addEventListener('click', menuButtonClick)

const lines = Array.from(document.querySelectorAll('.line')),
      gridItems = Array.from(document.querySelectorAll('.grid-item'))
      lunchGridItems = Array.from(document.querySelectorAll('.lunch-grid-item')),
      dinnerGridItems = Array.from(document.querySelectorAll('.dinner-grid-item')),
      drinksGridItems = Array.from(document.querySelectorAll('.drinks-grid-item'))



function resetFade(){
  gridItems.forEach((gridItem) =>{
    gridItem.classList.remove('show');
  })
  lines.forEach((line) => {
    line.style.width = 0;
  })
}
function loopRemoveFade(array){
  
  if(array === lunchGridItems || array === dinnerGridItems || array === drinksGridItems){
    for(let i = 0; i<array.length; i++){
      removeFade(i, array)
    }
  }
  
  if(array === lines){ 
    for(let i = 0; i<array.length; i++){
    increaseLineWidth(i, array)    
  }}
}

function increaseLineWidth(k, array){
  array[k].style.width = '90%';
}

function removeFade(j, array){
   setTimeout(() => {
    array[j].classList.add('show');
   }, 100 * j);
}

window.onload = function(){
  const loadWelcome = document.querySelector('.onLoadWidth');
  const welcomeMessage = document.querySelector('.welcomeMessage');
  loadWelcome.style.width = "280px";
  setTimeout(() => {
    welcomeMessage.style.opacity = 1;
    welcomeMessage.innerHTML = "Welcome to Kuchi"
  }, 1000);
}




