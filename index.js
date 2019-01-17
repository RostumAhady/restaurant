const wrapper = document.querySelector('.menu-wrapper'),
      nav = document.querySelector('.menu-sidebar-container'),
      menuMain = document.querySelector('.menu-main'),
      topOfNav = wrapper.offsetTop - 450;

function fadeIn(){
  console.log(topOfNav, window.scrollY);
  if(window.scrollY >= topOfNav){
    nav.classList.add('transform');
    menuMain.style.opacity = 1;
    loopRemoveFade(lunchGridItems);
    loopIncreaseLineWidth(lines);
  } else {
    nav.classList.remove('transform');
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
      loopIncreaseLineWidth(lines)
    }, 200);     
    dinnerMenu.style.display = 'none';
    dinnerMenu.style.opacity = 0;
    drinksMenu.style.display = 'none';
    drinksMenu.style.opacity = 0;
  }
  if(e.target.id === 'dinnerBtn'){
    dinnerBtn.classList.add('active');
    lunchMenu.style.display = 'none';
    lunchMenu.style.opacity = 0;
    dinnerMenu.style.display = 'block';
    setTimeout(() => {
      dinnerMenu.style.opacity = 1;
      loopRemoveFade(dinnerGridItems)
      loopIncreaseLineWidth(lines)
    }, 200); 
    drinksMenu.style.display = 'none';
    drinksMenu.style.opacity = 0;
  }
  if(e.target.id === 'drinksBtn'){
    drinksBtn.classList.add('active');
    lunchMenu.style.display = 'none';
    lunchMenu.style.opacity = 0;
    dinnerMenu.style.display = 'none';
    dinnerMenu.style.opacity = 0;
    drinksMenu.style.display = 'block';
    setTimeout(() => {
      drinksMenu.style.opacity = 1;
      loopRemoveFade(drinksGridItems)
      loopIncreaseLineWidth(lines)
    }, 200); 
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
    gridItem.style.opacity = 0;
    gridItem.style.transform = 'translateY(30%)'; 
  })
  lines.forEach((line) => {
    line.style.width = 0;
  })
}
function loopRemoveFade(array){
  for(let i = 0; i<array.length; i++){
    removeFade(i, array)
  }
}

function loopIncreaseLineWidth(array){
  for(let i = 0; i<array.length; i++){
    increaseLineWidth(i, array)    
  }
}

function increaseLineWidth(k, array){
  array[k].style.width = '100%';
}

function removeFade(j, array){
   setTimeout(() => {
    array[j].style.opacity = 1;
    array[j].style.transform = 'translateY(0%)';
   }, 180 * j);

   
}


//hover links

const links = document.querySelectorAll('.links');
const highlight = document.createElement('span');

highlight.classList.add('highlight');

// span is appended to body and moves around to location of links
document.body.appendChild(highlight);

function highlightLink() {
  console.log("hello");
  //grabs the coordinates
  let linkCoords = this.getBoundingClientRect();

  // number adjustments made for aesthetics, they are not required for the functionality
  const coords = {
    width: linkCoords.width - 35,
    height: linkCoords.height +5 ,
    // to allow hover effect to work even when scrolled
    top: linkCoords.top + window.scrollY -2,
    left: linkCoords.left + window.scrollX + 36
  };
  // applies to coordinates to the span with class highlight
  highlight.style.width = `${coords.width}px`
  highlight.style.height = `${coords.height}px`
  highlight.style.transform = `translate(${coords.left}px, ${coords.top}px)`

}
// when a link is hovered, it's coordinates are fetched through highlightLink()
links.forEach(link => link.addEventListener('mouseenter', highlightLink))


window.addEventListener('scroll', ()=>{
  highlight.style.transform = `translate(0px, 0px)`;
});


