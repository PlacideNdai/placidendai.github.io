// time
let greet = document.querySelector('.time');
function greetTime(){
    let now = new Date();
    let nowmodified = now.getHours();
    if(nowmodified < 12 ){
        greet.innerHTML = "Good Morning!";
    } else if(nowmodified < 18){
        greet.innerHTML = "Good Afternoon!"
    } else if(nowmodified >= 18 ){
        greet.innerHTML = "Good Evening!"
    }
}
greetTime();

// smile
let emotearray = ["♟️","🎸","🎹","⌨️","🎨","🪴","🛹","🎱","🎮"];
let emote = document.querySelector('.emote');


setInterval( ()=>{
    let randommote = Math.floor(Math.random() *emotearray.length);
    emote.innerHTML = emotearray[randommote];
}, 1000);

//  rotating the log
// music

let btnsong = document.getElementById('song');
let song = document.getElementById('backso');

let playing = false;
function play(){
    if(playing == false){
        btnsong.innerHTML = "⏸";
        song.play();
        playing = true;
    }else if(playing == true){
        song.pause();
        playing  = false;
        btnsong.innerHTML = "▶️";
    }
}