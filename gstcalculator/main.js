const amount = document.getElementById('amount')
const per = document.getElementById('percentage')
const tax = document.getElementById('tax')
const result = document.getElementById('result')

let ans = 0.0

result.textContent = `ACTUAL AMOUNT : 0 ${amount.value} + GST ${per.value} = TOTAL : 0`

function calculator(){
    if(per.value==5 && tax.value=='exclusive'){
        ans = 5/100*Number(amount.value)
        ans = ans+Number(amount.value);
       result.textContent = `ACTUAL AMOUNT  : ${amount.value} + GST : ${per.value} = TOTAL : ${ans}`
    }
    else if(per.value==12 && tax.value=='exclusive'){
        ans = 12/100*Number(amount.value)
        ans = ans+Number(amount.value);
        result.textContent = `ACTUAL AMOUNT  : ${amount.value} + GST : ${per.value} = TOTAL : ${ans}`
    }
    else if(per.value==18 && tax.value=='exclusive'){
        ans = 18/100*Number(amount.value)
        ans = ans+Number(amount.value);
        result.textContent = `ACTUAL AMOUNT  : ${amount.value} + GST : ${per.value} = TOTAL : ${ans}`
    }
    else if(per.value==23 && tax.value=='exclusive'){
        ans = 23/100*Number(amount.value)
        ans = ans+Number(amount.value);
        result.textContent = `ACTUAL AMOUNT  : ${amount.value} + GST : ${per.value} = TOTAL : ${ans}`
    }
    else if(per.value==5 && tax.value=='inclusive'){
       ans = Number(amount.value)/100*5
       result.textContent = `ACTUAL AMOUNT : ${amount.value-ans} + GST : ${ans} = Total : ${amount.value}`
    }
    else if(per.value==12 && tax.value=='inclusive'){
       ans = Number(amount.value)/100*12
       result.textContent = `ACTUAL AMOUNT : ${amount.value-ans} + GST : ${ans} = Total : ${amount.value}`
    }
    else if(per.value==18 && tax.value=='inclusive'){
       ans = Number(amount.value)/100*18
       result.textContent = `ACTUAL AMOUNT : ${amount.value-ans} + GST : ${ans} = Total : ${amount.value}`
    }
    else if(per.value==23 && tax.value=='inclusive'){
       ans = Number(amount.value)/100*23
       result.textContent = `ACTUAL AMOUNT : ${amount.value-ans} + GST : ${ans} = Total : ${amount.value}`
    }
}