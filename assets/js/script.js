const loction_box = document.querySelector('.loction-box');
const close  = document.getElementById('close')
const loction_button = document.querySelector('.Select-Country');
const shadow = document.querySelector('.bg-shadow');
const policie_link=  document.querySelector('.policie-link')
const policie_tooltip =  document.querySelector('.policie-tooltip')
const arrow_drop_down =  document.querySelector('.policie-svg')
const shope_link =  document.querySelector('.shope-link')
const shope_icon =  document.querySelector('.shope-link svg')
const big_tool_tip =  document.querySelector('.big-tool-tip')
const cart_button =  document.querySelector('.bi-lock-fill')
const cart =  document.querySelector('.cart')
const close_cart =  document.getElementById('close-cart')









loction_button.addEventListener('click' , () => {
    loction_box.classList.add('active');
    shadow.toggleAttribute('hidden');
})
close.addEventListener('click' , () => {
    loction_box.classList.remove('active');
    shadow.toggleAttribute('hidden');
})

policie_link.addEventListener('click' , () => {
    policie_tooltip.classList.toggle('active');
    console.log(arrow_drop_down);
    if (policie_tooltip.classList.contains('active')) {
        arrow_drop_down.style.transform = 'rotate(180deg)';
    } else {
        arrow_drop_down.style.transform = 'rotate(0deg)';

    }
})
shope_link.addEventListener('click' , () => {
    big_tool_tip.classList.toggle('active');
    if (big_tool_tip.classList.contains('active')) {
        shope_icon.style.transform = 'rotate(180deg)';
    } else {
        shope_icon.style.transform = 'rotate(0deg)';

    }
})
cart_button.addEventListener('click' , () => {
    cart.classList.add('active');
    shadow.toggleAttribute('hidden');
})
shadow.addEventListener('click' , () => {
    shadow.toggleAttribute('hidden');
    cart.classList.remove('active');
})

close_cart.addEventListener('click' , () => {
    cart.classList.remove('active');
    shadow.toggleAttribute('hidden');
})


// start fqo logic section 

const fqo_box = document.querySelector('.fqo-box');
fqo_box.addEventListener('click' , () => {
    fqo_box.classList.toggle('active');
})
// end fqo logic section 
