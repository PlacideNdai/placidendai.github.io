// window.onload = ()=>{
//     alert( "The site may appear broken on certain phones.")
// }
// home reload to home
let home = document.getElementById('cohead');
homereloader = document.querySelector(".name")

homereloader.addEventListener('click',()=>{
    document.location.reload(1);
})

//
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

// all other pages
let allcontent = document.querySelector(".allcontent");

let chesstab,drawingtab,flowertab,randomtab,friendstab;
let spanstab = document.querySelectorAll('.tabs')
//  chess, drawing, friends, flowers, random...
chesstab = spanstab[0];
drawingtab = spanstab[1];
friendstab = spanstab[2];
flowertab = spanstab[3];
randomtab = spanstab[4];

let chesspage,drawingpage,flowerpage,randompage,friendspage;
let pages = document.querySelectorAll('.page')
chesspage = pages[0];
drawingpage = pages[1];
friendspage = pages[2];
flowerpage = pages[3];
randompage = pages[4];

pages[0].style.display = 'none';
pages[1].style.display = 'none';
pages[2].style.display = 'none';
pages[3].style.display = 'none';
pages[4].style.display = 'none';

chesstab.onclick = () =>{
    if(chesspage.style.display == 'none'){
        chesspage.style.display = 'block';
        allcontent.style.display = 'none';
    pages[1].style.display = 'none';
    pages[2].style.display = 'none';
    pages[3].style.display = 'none';
    pages[4].style.display = 'none';
    
    } else{
        allcontent.style.display = 'block';
        chesspage.style.display = 'none';
    }
}

drawingtab.onclick = () =>{
    if(drawingpage.style.display == 'none'){
        drawingpage.style.display = 'block';
        allcontent.style.display = 'none';
    pages[0].style.display = 'none';
    pages[2].style.display = 'none';
    pages[3].style.display = 'none';
    pages[4].style.display = 'none';
    
    } else{
        allcontent.style.display = 'block';
        drawingpage.style.display = 'none';
    }
}

friendstab.onclick = () =>{
    if(friendspage.style.display == 'none'){
        friendspage.style.display = 'block';
        allcontent.style.display = 'none';
    pages[0].style.display = 'none';
    pages[1].style.display = 'none';
    pages[3].style.display = 'none';
    pages[4].style.display = 'none';
    
    } else{
        allcontent.style.display = 'block';
        friendspage.style.display = 'none';
    }
}

flowertab.onclick = () =>{
    if(flowerpage.style.display == 'none'){
        flowerpage.style.display = 'block';
        allcontent.style.display = 'none';
    pages[0].style.display = 'none';
    pages[1].style.display = 'none';
    pages[2].style.display = 'none';
    pages[4].style.display = 'none';
    
    } else{
        allcontent.style.display = 'block';
        flowerpage.style.display = 'none';
    }
}

randomtab.onclick = () =>{
    if(randompage.style.display == 'none'){
        randompage.style.display = 'block';
        allcontent.style.display = 'none';
    pages[0].style.display = 'none';
    pages[1].style.display = 'none';
    pages[2].style.display = 'none';
    pages[3].style.display = 'none';
    
    } else{
        allcontent.style.display = 'block';
        randompage.style.display = 'none';
    }
}


// animation when scrolling
let cohead = document.querySelector('#conhead');

window.addEventListener('scroll', (e)=>{
    let scrolly = this.scrollY;
    if(scrolly > 20){
        cohead.style.height = 'auto';

    }else{
        cohead.style.height = "30%";
    }
});