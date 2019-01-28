const current = document.querySelector('#current');
const imgs = document.querySelectorAll('.imgs img');
const nextBtn= document.querySelector('.nextImg');
const prevBtn = document.querySelector('.prevImg');
const opacity = 0.5;

imgs[0].style.opacity = opacity;



//Event delegation for clicking on image
document.body.addEventListener('click', changeImg);

function changeImg(e){
    if(e.target.parentElement.classList.contains('imgs')) {
        imgs.forEach(img => (img.style.opacity = 1));
        current.src = e.target.src;
        current.classList.add('fade-in');
        setTimeout(() => current.classList.remove('fade-in'), 500);
        e.target.style.opacity = opacity;
        i = Array.from(e.target.parentElement.children).indexOf(e.target);
        console.log(i);
    }
}


//forward and back buttons

let i = 0;
current.src = imgs[i].src;
nextBtn.addEventListener('click', nextImg);
prevBtn.addEventListener('click', prevImg);

function nextImg(e){
    i++
    if (i > imgs.length - 1){
        i = 0
    }
    imgs.forEach(img => (img.style.opacity = 1));
    current.src = imgs[i].src;
    current.classList.add('fade-in');
    setTimeout(() => current.classList.remove('fade-in'), 500);
    imgs[i].style.opacity = opacity;
}
function prevImg(e){
    i--
    if(i < 0){
        i = imgs.length - 1;
    }
    imgs.forEach(img => (img.style.opacity = 1));
    current.src = imgs[i].src;
    current.classList.add('fade-in');
    setTimeout(() => current.classList.remove('fade-in'), 500);
    imgs[i].style.opacity = opacity;
}
  