// js
let music, blog, hlights, contact;
music = document.querySelector(".music");
blog = document.querySelector(".blog");
hlights = document.querySelector(".hlights");
contact = document.querySelector(".contacts");
aboutm = document.getElementById('aboutm');
// getting data from json.
fetch("text.json")
    .then( (res) => 
         res.json())
    .then( (data) =>{ 
        music.innerHTML = data.music;
        blog.innerHTML = data.blog;
        hlights.innerHTML = data.hlights;
        contact.innerHTML = data.contact;
        aboutm.innerHTML = data.aboutme;
    })

// blinking dot
    let number  = 0;
    let time, now, nowmod, timedis, date;
    timedis = document.getElementById("timedis");
    let days = ["Sunday","Monday", "Tuesday","Wednesday","Thursday","Friday","Saturday"];
    wel = document.getElementById('wel');
    date = document.getElementById('date');

setInterval(()=>{

        if(number == 0){
            wel.innerHTML = "Welcome";
            number = 1;
        } else if(number == 1){
            wel.innerHTML = "Welcome.";
            number = 0;
        }
// time
        time = new Date();
        now = time.toLocaleTimeString();
        timedis.innerHTML = now;
//  day
        nowmod = time.toDateString();
        date.innerHTML = nowmod;
},1000);

let words = ["good", "glad","joyful","great","sweet","cool","blessed","strong","best","friendly","super","brilliant","superior","awesome","fabulous","wonderful","marvelous","profitable","noble","faithful","faultless","breathtaking","gentle","incredible"]

let reads = 0;
let ins = document.querySelector(".shows");
setInterval(()=>{
    let randomword = Math.floor(Math.random() * words.length);
    // console.log(words[randomword]);
    ins.innerHTML ="Have a "+ words[randomword] +" day!";
    
}, 100);
