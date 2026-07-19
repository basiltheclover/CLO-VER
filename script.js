let progress = 0;


let loading = setInterval(()=>{


progress += 1;


document.getElementById("progress").style.width = progress + "%";



if(progress >= 100){


clearInterval(loading);



document.getElementById("status").innerHTML =
"Welcome to CLO🍀VER OS!";



document.getElementById("moonMessage").innerHTML =
"🌙 Moon: Welcome! Come look around 🍀";



setTimeout(()=>{


document.getElementById("startup").style.display="none";


document.getElementById("desktop").style.display="block";


},2000);



}


},30);





function updateClock(){


let now = new Date();


document.getElementById("clock").innerHTML =
now.toLocaleTimeString();


}



setInterval(updateClock,1000);

updateClock();
