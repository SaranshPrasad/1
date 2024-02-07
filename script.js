let yes = document.getElementById('yes')
let no = document.getElementById('no')
let txt =  document.getElementById('txt')
let image = document.getElementById('image')
let secTxt = document.getElementById('sectxt')


no.addEventListener('click', ()=>{
    txt.innerHTML = ``
        image.src = `./cry.gif`
        sectxt.innerHTML = `Mujhe rulaya tumne firse na ...`
        no.classList.add('hide')
        yes.classList.remove('hide')
});

yes.addEventListener('click', ()=>{
    image.src = `./bubu-dudu.gif`
    image.style = `width:300px; height:300px`
    txt.innerHTML = ``
    no.classList.add('hide')
    yes.classList.add('hide')
    sectxt.innerHTML = `Yayyy cutieeee meriii maan gyiii ...😘`
})