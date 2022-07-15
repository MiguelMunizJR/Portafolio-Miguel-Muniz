const nav = document.querySelector('.nav-menu');

document.addEventListener('click', function(e) {
    if (e.target.matches('.fa-bars')) {

        if (nav.style.display === 'flex') {
                nav.style.display = 'none';
        } else {
                nav.style.display = 'flex';
        }
    }
});