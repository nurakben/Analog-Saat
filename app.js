const sec = document.querySelector(".secs");
const min = document.querySelector(".mins");
const hours = document.querySelector(".hours");
const digital = document.querySelector("#digital");
function tiktak() {
    let milisecond = new Date().getMilliseconds();
    let second = new Date().getSeconds();
    let minute = new Date().getMinutes();
    let hour = new Date().getHours();
    
    sec.style.transform =  `rotate(${180 + (second * 6)+ (milisecond/1000)*6 }deg)`
    min.style.transform =  `rotate(${180 + (minute * 6)}deg)`
    hours.style.transform =  `rotate(${180 + ((hour-2) * 6)}deg)`
    digital.innerHTML = hour + ':' + (minute<10 ? '0'+minute : minute) + ':' + (second<10 ? '0'+second : second) ;
}

setInterval(tiktak, 250);