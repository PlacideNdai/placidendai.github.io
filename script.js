// window.onload = ()=>{
//     alert( "The site may appear broken on certain phones.")
// }

let greet = document.getElementById('greet');


function greetings(){
    let now = new Date();
    let hours = now.getHours();


    if(hours >= 0 && hours <= 12){
        greet.innerHTML = ("Good Morning!")
    } else if(hours >= 12 && hours <= 18){
        greet.innerHTML = ("Good Afternoon!")
    } else if(hours >= 18){
        greet.innerHTML = ("Good Evening!")
    }
}
greetings();

// smiles changer
function secondEmote(){
    let smile = document.getElementById('smile');
    let emotearray = ["😃","😄","😁","😆","😅",'🤣','😂','🙂','🙃','😉','😊','😇','🥰','😍','🤩','😘','😗','☺️','😚','😙','🥲','😋','😛','😜','🤪','😝'];

    randomemote = Math.floor(Math.random() * emotearray.length)
    smile.innerHTML = (emotearray[randomemote]);
}
setInterval(secondEmote,1000)