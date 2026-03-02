const getColor=()=>{
  //Hex code
    const randomnumber=Math.floor(Math.random()*16777215);
    const randomcode="#"+randomnumber.toString(16);
    document.body.style.backgroundColor=randomcode;
    document.getElementById("hexaCode").innerText=randomcode;
    navigator.clipboard.writeText(randomcode);
}

//Event Call
document.getElementById("button").addEventListener(
    "click",
    getColor
)

//initial call
getColor();