//to change the color of site using js by only clicking in button..
let modebtn=document.querySelector("#mode");
let currmode="light";

modebtn.addEventListener("click",()=>{
    if(currmode==="light"){
        currmode="dark";
        document.querySelector("body").style.backgroundcolor="black";
    } else{
        currmode="light";
        document.querySelector("body").style.backgroundcolor="white";
    }

    console.log(currmode);
});