let button = document.querySelector('.share__icons');
let socialLinks = document.querySelector('.social__links');

button.addEventListener('click', () => {
    socialLinks.classList.toggle('active');

    if (button.classList.contains('share__active')) {
        button.classList.remove('share__active', 'share__active__img')
    } else {
        button.classList.add('share__active', 'share__active__img');
    }
})