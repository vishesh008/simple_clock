const sec_hand = document.querySelector('.sec');
const hour_hand = document.querySelector('.hour');
const min_hand = document.querySelector('.min');
function setDate(){
    const now = new Date();
    const seconds = now.getSeconds();
    const sec_degree = (seconds/60)*360 +90;
    sec_hand.style.transform = `rotate(${sec_degree}deg)`;

    const minute = now.getMinutes();
    const minutes_degree = (minute/60)*360;
    min_hand.style.transform = `rotate(${minutes_degree}deg)`;

    
    const hours = now.getHours();
    const hour_degree = (hour_degree/60)*360;
    hour_hand.style.transform = `rotate(${hour_degree}deg)`;
    
}
setInterval(setDate, 1000);