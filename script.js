var btn=document.getElementById("btn");

btn.addEventListener('click',()=>{
    if(document.body.style.backgroundColor=="rgb(255, 255, 255)"){
        document.body.style.backgroundColor="#111"
        document.getElementById("text").style.color="#fff"
        btn.checked=true;
    }
    else{
        document.body.style.backgroundColor="rgb(255, 255, 255)"
        document.getElementById("text").style.color="#000"
        btn.checked=false;
    }
})