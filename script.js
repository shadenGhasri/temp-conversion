const convert = document.querySelector(".convert")
const reset = document.querySelector(".reset")
const change = document.querySelector(".change")
const input = document.querySelector(".input")
const divAlert = document.querySelector(".div-alert")
const title = document.querySelector(".title")

convert.addEventListener("click",()=>{
    if(input.value === ""){
        const pAlert = document.createElement("p");
        pAlert.textContent =    `insert correct value`
        pAlert.style.fontWeight = "bold"
        pAlert.style.color = "red"
        divAlert.append(pAlert)
    }else if(title.textContent ===  "converter ºC to ºF"){
        let resultValue = (input.value  * 1.8) + 32
        const pAlert = document.createElement("p");
        pAlert.textContent =    `${input.value}ºC to ${resultValue}ºF`
        pAlert.style.fontWeight = "bold"
        pAlert.style.color = "black"
        divAlert.append(pAlert)

    }else if(title.textContent ===  "converter ºF to ºC"){
        let resultValue = (input.value -32) * 5 / 9
        const pAlert = document.createElement("p");
        pAlert.textContent =    `${resultValue}ºF to ${input.value}ºC`
        pAlert.style.fontWeight = "bold"
        pAlert.style.color = "black"
        divAlert.append(pAlert)

    }
})


reset.addEventListener("click",()=>{
    input.value = ''
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

