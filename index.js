const wrapper = document.querySelector('.menu-wrapper'),
      nav = document.querySelector('.menu-sidebar-container'),
      topOfNav = wrapper.offsetTop - 100;

function fixNav(){
  console.log(topOfNav, window.scrollY);
  if(window.scrollY >= topOfNav){
    nav.classList.add('active');
  } else {
    nav.classList.remove('active');
  }
}

window.addEventListener('scroll', fixNav);

const show = 1;
const hide = 0;

//menu buttons
const lunchBtn = document.getElementById('lunchBtn'),
      dinnerBtn = document.getElementById('dinnerBtn'),
      drinksBtn = document.getElementById('drinksBtn'),
      lunchMenu = document.getElementById('lunch'),
      dinnerMenu = document.getElementById('dinner'),
      drinksMenu = document.getElementById('drinks');

function menuButtonClick(e){
  resetFade()
  if(e.target.id === 'lunchBtn'){
    lunchMenu.style.display = 'block';
    setTimeout(() => {
      lunchMenu.style.opacity = 1;
      loopRemoveFade(lunchGridItems)
    }, 200);     
    dinnerMenu.style.display = 'none';
    dinnerMenu.style.opacity = 0;
    drinksMenu.style.display = 'none';
    drinksMenu.style.opacity = 0;
  }
  if(e.target.id === 'dinnerBtn'){
    lunchMenu.style.display = 'none';
    lunchMenu.style.opacity = 0;
    dinnerMenu.style.display = 'block';
    setTimeout(() => {
      console.log('hello')
      dinnerMenu.style.opacity = 1;
      loopRemoveFade(dinnerGridItems)
    }, 200); 
    drinksMenu.style.display = 'none';
    drinksMenu.style.opacity = 0;
  }
  if(e.target.id === 'drinksBtn'){
    lunchMenu.style.display = 'none';
    lunchMenu.style.opacity = 0;
    dinnerMenu.style.display = 'none';
    dinnerMenu.style.opacity = 0;
    drinksMenu.style.display = 'block';
    setTimeout(() => {
      drinksMenu.style.opacity = 1;
      loopRemoveFade(drinksGridItems)
    }, 200); 
  }

}
lunchBtn.addEventListener('click', menuButtonClick)
dinnerBtn.addEventListener('click', menuButtonClick)
drinksBtn.addEventListener('click', menuButtonClick)


const gridItems = Array.from(document.querySelectorAll('.grid-item'))
const lunchGridItems = Array.from(document.querySelectorAll('.lunch-grid-item'))
const dinnerGridItems = Array.from(document.querySelectorAll('.dinner-grid-item'))
const drinksGridItems = Array.from(document.querySelectorAll('.drinks-grid-item'))

function resetFade(){
  gridItems.forEach((gridItem) =>{
    gridItem.style.opacity = 0;
    gridItem.style.transform = 'translateY(30%)'; 
  })
}
function loopRemoveFade(array){
  for(let i = 0; i<array.length; i++){
    removeFade(i, array)
  }
}

function removeFade(j, array){
  console.log('hello')
   setTimeout(() => {
    array[j].style.opacity = 1;
    array[j].style.transform = 'translateY(0%)';
   }, 100 * j);
   
}


