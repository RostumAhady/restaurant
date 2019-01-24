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
    width: linkCoords.width - 30,
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

