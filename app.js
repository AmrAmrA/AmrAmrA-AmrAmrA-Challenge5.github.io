/* Animation to change the rounded button place */
let buttonPrice     = document.querySelector('.buttonToggle'); 
let buttonMove      = document.querySelector('.buttonMove'); 
/* Animation to change the amount of the prices inside the princing cards */
let annualPrices    = document.querySelectorAll('.priceInvisible'); 
let monthPrices     = document.querySelectorAll('.priceVisible'); 
/* Animation to remove the HR under the prices when they change */
let displayHRS      = document.querySelectorAll('.toggleHR');  
let hiddenHR        = document.querySelector('.hiddenHR')


buttonPrice.addEventListener('click', () => {
    buttonMove.classList.toggle('buttonAnimation'); 
    for (const annualPrice of annualPrices) {
        annualPrice.classList.toggle('hiddenPrice'); 
    }
    for (const monthPrice of monthPrices) {
        monthPrice.classList.toggle('togglePrice'); 
    }
    for (const displayHR of displayHRS) {
        displayHR.classList.add('togglePrice');
    }
    hiddenHR.classList.add('hiddenPrice')
})