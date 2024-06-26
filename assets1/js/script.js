let mask = document.querySelector('.mask');
let contentBlock = document.getElementById('block-content');
let grid = document.querySelector('.grid-class-photo');
// let introGif = document.getElementById('intro-gif');
let introGif = new Image();
introGif.src = 'assets1/images/graduation.jpg';

window.addEventListener('load', () => {
    mask.classList.add('mask-hide');
    contentBlock.classList.remove('hide');
    contentBlock.classList.add('view');
    setTimeout(() => {
        mask.remove();
    }, 600);
    let msnry = new Masonry(grid, {
        itemSelector: '.grid-class-photo-item',
        columnWidth: 200,
        gutter: 50,
        fitWidth: true
    });
    
});

// introGif.onload = function () {
//     mask.classList.add('mask-hide');
//     contentBlock.classList.remove('hide');
//     contentBlock.classList.add('view');
//     setTimeout(() => {
//         mask.remove();
//     }, 600);
// };

introGif.style.display = 'none';
document.body.appendChild(introGif);






