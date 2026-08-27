const mascot = document.querySelector('.mascot');

let mascotLeft = false;

mascot.addEventListener('click', () => {

    mascotLeft = !mascotLeft;

    mascot.classList.remove('pet-left', 'pet-right');

    void mascot.offsetWidth;

    if (mascotLeft) {
        mascot.classList.add('pet-left');
    } else {
        mascot.classList.add('pet-right');
    }

});