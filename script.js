const convert = document.querySelector(".convert")
const reset = document.querySelector(".reset")
const change = document.querySelector(".change")
const input = document.querySelector(".input")
const divAlert = document.querySelector(".div-alert")

convert.addEventListener("click",()=>{
    if(input.value === ""){
        const pAlert = document.createElement("p");
        pAlert.textContent =    `insert correct value`
        pAlert.style.fontWeight = "bold"
        pAlert.style.color = "red"
        divAlert.append(pAlert)
    }else{
        
    }
})


