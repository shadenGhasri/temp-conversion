const convert = document.querySelector(".convert")
const reset = document.querySelector(".reset")
const change = document.querySelector(".change")
const input = document.querySelector(".input")
const divAlert = document.querySelector(".div-alert")
const pAlert = document.querySelector(".pAlert")
const title = document.querySelector(".title")

convert.addEventListener("click",()=>{
    if(input.value === ""){
        pAlert.textContent =    `insert correct value`
        pAlert.style.color = "red"

    }else if(title.textContent ===  "converter ºC to ºF"){
        let resultValue = (input.value  * 1.8) + 32
        pAlert.textContent =    `${input.value}ºC to ${resultValue}ºF`
        pAlert.style.color = "black"

    }else if(title.textContent ===  "converter ºF to ºC"){
        let resultValue = (input.value -32) * 5 / 9
        pAlert.textContent =    `${resultValue}ºF to ${input.value}ºC`
        pAlert.style.color = "black"

    }
})


reset.addEventListener("click",()=>{
    input.value = ''
    pAlert.textContent = ""
    // divAlert.style.visibility = "hidden"
});

change.addEventListener("click",()=>{
    if(title.textContent === "converter ºC to ºF"){
        title.textContent = "converter ºF to ºC"
        input.placeholder = "ºF"

    }else{
        title.textContent = "converter ºC to ºF"
        input.placeholder = "ºC"
    }
});

