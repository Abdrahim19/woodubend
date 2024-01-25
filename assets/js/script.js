const loction_box = document.querySelector('.loction-box');
const close  = document.getElementById('close')
const loction_button = document.querySelector('.Select-Country');
const shadow = document.querySelector('.bg-shadow');

loction_button.addEventListener('click' , () => {
    loction_box.classList.add('active');
    shadow.toggleAttribute('hidden');
})
close.addEventListener('click' , () => {
    loction_box.classList.remove('active');
    shadow.toggleAttribute('hidden');
})