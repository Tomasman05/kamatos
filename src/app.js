const calcButton = document.querySelector("#calcButton")
const interestInput = document.querySelector("#interest")
const yearCountInput = document.querySelector("#yearCount")
const depositInput = document.querySelector("#deposit")
const calcRes = document.querySelector("#calcRes")
if(calcButton){
    calcButton.addEventListener("click", ()=>{
        calculate();
    })
}
function calculate(){
   let ifInterest = checkInput(interestInput.value) 
   let ifYearCount = checkInput(yearCountInput.value) 
   let ifDeposit = checkInput(depositInput.value) 
   if(ifDeposit&&ifInterest&&ifYearCount){
        const interest = Number (interestInput.value)
        const yearCount = Number (yearCountInput.value)
        const deposit = Number (depositInput.value)
        if(interest<100 && interest >0 && yearCount >0 && deposit>0){
            let final =calcResult(deposit,yearCount,interest)
            result.style.display="block"
            calcRes.value=final
            deleteInputs()
        }
        else{
            alert("A megadott értékek nem megfelelőek")
        }
   }
    else if (interestInput.value=="" || depositInput.value=="" || yearCountInput.value=="") {
        alert("Nincs adat")
    }
    else{
        alert("Hibás adattípus")
    }
}
if(interestInput && depositInput && yearCountInput){
    interestInput.addEventListener("click", ()=>{
        result.style.display="none"
    })
    depositInput.addEventListener("click", ()=>{
        result.style.display="none"
    })
    yearCountInput.addEventListener("click", ()=>{
        result.style.display="none"
    })
}
function calcResult(deposit,interest,yearCount){
    let result = (
        Math.pow((
            1+(interest/(100*yearCount))
            ),yearCount)-1
    )*deposit
    return result
}

function checkInput(input){
    let res =input.match(/^[0-9]+$/)
    return res
}
function deleteInputs(){
    interestInput.value=""
    yearCountInput.value=""
    depositInput.value=""
}