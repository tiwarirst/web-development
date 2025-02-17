let btn=document.querySelector("#btn1")

// btn.onclick=(e)=>  //event object ccontain data about the object
// {
//     alert("Radhe radhe")
//     console.log(e)
//     console.log(e.type )
//     console.log(e.target )
// }
btn.addEventListener("click",()=>{   //it is a event listener
    alert("happened")
})

// let di=document.querySelector("div")
// di.onmouseover=()=>{
//     // alert("mouse is hoverred the div.")
//     alert(prompt("Enter the number"))
// }