// starting..

// variable groups
let bio = document.getElementById("bios");
let hobbies = document.getElementById("hobbies");
console.log("Js starting...");

let theBio;
let data_details = null;
function Bio() {
    // fetch for the file
    fetch("./info.json")
        .then((res) => res.json())
        .then((data) => {
            bio.innerHTML = data.Aboutme;
            theBio = data.Aboutme;
            data_details = data;
            let cutts = theBio.split("<br>");
            cutts.forEach(element => {
                let changedBIO = element.replace("<br>", "");
                // testing(changedBIO);
            });
        });
        console.log("Done");

}
// when the window or tab reload
window.onload = ()=>{
    Bio();
}

let allHover = document.querySelectorAll(".commonhead");

allHover.forEach(element => {
    element.addEventListener('mouseover', (event) => {
        if (element == allHover[0]) {
            // reload or replace the text with the bio
            Bio();
        } else if (element == allHover[1]) {
            
            // hobbies
            hobbies_fun(bio);
        } else if (element == allHover[2]) {
           
            // qiock links to other sites
            quicklinks_fun(bio);
        } else if (element == allHover[3]) {
            
            // contants
            contacts_fun(bio);
        } else if (element == allHover[4]) {
            
            // yaeh which should be random stuff
            yeah_fun(bio);
        }
    });
});


// if I need the out event
allHover.forEach(element => {
    element.addEventListener('mouseout', (out) => {

    })
});


function quicklinks_fun(bio){
    bio.innerHTML = "";
    bio.innerHTML = data_details.quicklinks;
}

function hobbies_fun(bio){
    bio.innerHTML = data_details.hobbies;
}

function yeah_fun(bio){
    bio.innerHTML = data_details.yeah;
}

function contacts_fun(bio){
    bio.innerHTML = data_details.contacts;
}
/// ignore
function testing(readBio) {
    if ('speechSynthesis' in window) {
        let message = new SpeechSynthesisUtterance();
        let voices = speechSynthesis.getVoices();
        message.text = readBio;

        // finding voices
        let englishVoices = voices.find(function (voice) {
            return (voice.lang.startsWith('en') && voice.gender.toLocaleLowerCase().includes('male'));
        });

        message.voice = englishVoices;
        speechSynthesis.speak(message);
    } else {
        alert("Sorry!");
    }
}

function messageConsole(mess){
    console.log(mess);
}