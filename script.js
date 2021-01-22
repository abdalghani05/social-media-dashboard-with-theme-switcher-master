var btn=document.getElementById("btn");


function darkmode(){
    if(document.body.style.backgroundColor=="rgb(255, 255, 255)"){
        document.body.style.backgroundColor="#111"
        document.getElementById("text").style.color="#fff"
        document.getElementById("header").classList.add("header")
        document.getElementById("total").style.color="#8187A8";
        document.getElementById("dark").style.color="#fff"
        document.getElementById("text2").style.color="#fff"
        document.getElementsByTagNameNS("").backgroundColor
        btn.checked=true;
    }
    else{
        document.body.style.backgroundColor="rgb(255, 255, 255)"
        document.getElementById("text").style.color="#000"
        document.getElementsByClassName("header");
        document.getElementById("header").classList.remove("header")
        document.getElementById("total").style.color="#6E7180";
        document.getElementById("dark").style.color="#000"
        document.getElementById("text2").style.color="#000"
        btn.checked=false;
    }
}