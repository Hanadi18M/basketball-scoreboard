let homeScore = 0 
let guestScore = 0 
const home = document.getElementById('home')
const guest = document.getElementById('guest')
const btnNewGame = document.getElementById('btn-new-game')
const time = 0
const timerGame = document.getElementById('timer')

function incrementHomeByOne(){
   homeScore += 1 
   home.textContent = homeScore
}

function incrementHomeByTow(){
    homeScore += 2 
    home.textContent = homeScore
 }


 function incrementHomeByThree(){
    homeScore += 3 
    home.textContent = homeScore
 }

 function incrementGuestByOne() {
    guestScore += 1
    guest.textContent = guestScore
 }

 function incrementGuestByTow() {
    guestScore += 2
    guest.textContent = guestScore
 }

 function incrementGuestByThree() {
    guestScore += 3
    guest.textContent = guestScore
 }


 btnNewGame.addEventListener('click', function(){
    homeScore = 0
    guestScore = 0
    home.textContent = homeScore
    guest.textContent = guestScore
 })


