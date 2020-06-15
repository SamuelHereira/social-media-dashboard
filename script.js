const cards = document.getElementsByClassName('card');
const header = document.getElementById('header');
const body = document.querySelector('body');
const toggleBtn = document.getElementById('toggle-button');

toggleBtn.addEventListener('change', () => {
    body.classList.toggle('dark-mode')
    header.classList.toggle('dark-mode')
    toggleBtn.parentElement.classList.toggle('dark-mode')
    for( let i = 0; i < cards.length; i++ ) {
        cards[i].classList.toggle('dark-mode')
    }
    
})
    
