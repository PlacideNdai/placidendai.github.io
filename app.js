fetch("text.json")
.then((res)=> res.json())
.then( (data) =>{
    $('#aboutme').html(data.aboutme);
})

// on hover the links
let con, others,sites, contacts,prop,hobi;
con = document.querySelector('.con');
others = document.querySelector('.othersi');
sites = document.querySelector('.sites');
contacts = document.querySelector('.contact');
prop = document.querySelector('.prop');
hobi  = document.querySelector('.hobi');

// firsts
prop.addEventListener('mouseover',()=>{
    hobi.style.display = 'block';
    sites.style.display ='none'
    contacts.style.display = 'none';
})
hobi.addEventListener('mouseout',()=>{
    setTimeout(()=>{hobi.style.display = 'none'},3000)
})

// second
others.addEventListener('mouseover',()=>{
    sites.style.display = 'block';
    hobi.style.display ='none'
    contacts.style.display = 'none';
})
sites.addEventListener('mouseout',()=>{
    setTimeout(()=>{sites.style.display = 'none'},3000)
})

// third
con.addEventListener('mouseover',()=>{
    contacts.style.display = 'block';
    hobi.style.display ='none';
    sites.style.display ='none'
})
contacts.addEventListener('mouseout',()=>{
    setTimeout(()=>{contacts.style.display = 'none'},3000)
})


