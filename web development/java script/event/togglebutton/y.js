let x=document.querySelector("button")
let currMode="light";//dark
x.addEventListener("click",()=>
{
    if(currMode==="light")
    {
        currMode="dark"
        document.querySelector("body").style.backgroundColor="black"
    }
    else{
        currMode="light"
        document.querySelector("body").style.backgroundColor="white"
        
    }
    console.log(currMode)
})