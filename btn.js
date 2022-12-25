let btn = document.querySelector(".cart-btn");
let mbtn = document.querySelector(".minbtn");
let pbtn = document.querySelector(".plusbtn");
btn.addEventListener("click" ,() => {
    if(btn.innertext == "add to cart"){
        btn.innertext == 1 ,
        pbtn.style.display = "inline block";
        mbtn.style.display =" inline block";
    }
});
mbtn.addEventListener("click",()=> {
    if(btn.innertext==5 ){
        pbtn.style.visibility = "hidden";
    }
    if (btn.innertext<2){
        btn.innertext=" add to cart";
        pbtn.style.visibility="visible";
        pbtn.style.display="none";
        mbtn.style.display="none";
    }
    else {
        btn.innertext= btn.innertext -1;
    }
});
pbtn.addEventListener("click",()=> {
    btn.innertext=+btn.innertext + +1;
    if(btn.innertext==5 ){
        pbtn.style.visibility = "hidden";
    }
});
 
