// Global Variable

const validPin = 1234;
const transactionData = [];
const couponPin = 'junaid8217'


// (reuseable function)

// function to get input value as number
function getInputNumber(id){
    const inputFieldValueNumber = parseInt(document.getElementById(id).value)
    return inputFieldValueNumber;
}
// function to get input value
function getInputValue(id){
    return document.getElementById(id).value;
}
// function to get inner-text as number
function getInnerText(id){
     return parseInt(document.getElementById(id).innerText)
}
// function to set inner text
function setInnerText(value){
    const availableBalanceElement = document.getElementById('available-balance')
    availableBalanceElement.innerText = value
}
// function to toggle
function handleToggle(id){
    const forms = document.getElementsByClassName('form');
    
    for(const form of forms){
        form.style.display = 'none'
    }
    document.getElementById(id).style.display = 'block'
}
// function to toggle button style
function handleButtonStyle(id){
    const formBtn = document.getElementsByClassName('form-btn')
    for(const btn of formBtn){
        btn.classList.remove("border-[#0874f2]","bg-[#0874f20d]")
        btn.classList.add("border-gray-200")
    }

    document.getElementById(id).classList.remove("border-gray-200")
    document.getElementById(id).classList.add("border-[#0874f2]","bg-[#0874f20d]")
}


// log out feature
document.getElementById('log-out-btn').addEventListener('click', function(){
    window.location.href = 'index.html';
})

// add Money feature
document.getElementById('add-money-btn').addEventListener('click', function(e){
    e.preventDefault()
    const bank = document.getElementById('bank').value;
    const accountNumber = document.getElementById('account-number').value
    const addamount = getInputNumber('add-amount')

    if(addamount <= 0 ){
        alert('Invalid amount')
        return;
    }
    const addPin = getInputNumber('add-pin')
    

    const availableBalance = getInnerText('available-balance')

    if(accountNumber.length !== 11){
        alert("Please provide valid account number")
        return;
    }
    if(addPin != validPin ){
        alert("Please provide a valid pin number")
        return;
    }

    const totalNewAvalableBalance = addamount + availableBalance;
    
   setInnerText(totalNewAvalableBalance)

   const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
   console.log(transactionData)

})

// Cashout money feature

document.getElementById('withdraw-button').addEventListener('click',function(e){
    e.preventDefault();
    const withdrawAmount = getInputNumber('withdraw-amount')
    
    const agentNumber = getInputValue('agent-number')
    if(agentNumber.length !== 11){
        alert("Please provide valid agent number")
        return;
    }


    const availableBalance = getInnerText('available-balance')

    

    if(withdrawAmount <= 0 || withdrawAmount > availableBalance){
        alert('Invalid Amount')
        return
    }
    
    const addPin = getInputNumber('cashout-pin')

    if(addPin != validPin ){
        alert("Please provide a valid pin number")
        return;
    }

    const totalNewAvalableBalance = availableBalance - withdrawAmount;

    setInnerText(totalNewAvalableBalance)

    const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
   console.log(transactionData)
})

// Transfer Money Feature
document.getElementById('send-button').addEventListener('click', function(e){
    e.preventDefault();
    const transferAmount = getInputNumber('transfer-amount')
    
    const userAccountNumber = getInputValue('user-account-number')
    if(userAccountNumber.length !== 11){
        alert("Please provide valid User number")
        return;
    }


    const availableBalance = getInnerText('available-balance')

    

    if(transferAmount <= 0 || transferAmount > availableBalance){
        alert('Invalid Amount')
        return
    }
    
    const addPin = getInputNumber('transfer-pin')

    if(addPin != validPin ){
        alert("Please provide a valid pin number")
        return;
    }

    const totalNewAvalableBalance = availableBalance - transferAmount;

    setInnerText(totalNewAvalableBalance)

    const data = {
        name: "Cash Out",
        date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
   console.log(transactionData)
})

// Get Bonus feature
document.getElementById('bonus-button').addEventListener('click', function(e){
    e.preventDefault()
    const couponNumber = getInputValue("coupon-number")

    const availableBalance = getInnerText('available-balance')

    if(couponNumber !== couponPin){
        alert('The coupon is not valid')
    }
    else{
        const totalNewAvalableBalance = 20000 + availableBalance;
    
   setInnerText(totalNewAvalableBalance)
    }
})

// Pay Bill Feature
document.getElementById('pay-bill-btn').addEventListener('click', function(e){
    e.preventDefault()
    const bank = document.getElementById('bank').value;
    const billerAccountNumber = document.getElementById('biller-account-number').value
    const payAmount = getInputNumber('pay-amount')

    if(payAmount <= 0 ){
        alert('Invalid amount')
        return;
    }
    const payPin = getInputNumber('pay-pin')
    

    const availableBalance = getInnerText('available-balance')

    if(billerAccountNumber.length !== 11){
        alert("Please provide valid biller account number")
        return;
    }
    if(payPin != validPin ){
        alert("Please provide a valid pin number")
        return;
    }

    const totalNewAvalableBalance = availableBalance - payAmount ;
    
   setInnerText(totalNewAvalableBalance)

   const data = {
        name: "Add Money",
        date: new Date().toLocaleTimeString()
   }
   transactionData.push(data)
   console.log(transactionData)
})


// Transaction Feature
document.getElementById('transaction-button').addEventListener('click', function(){
    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText = ""
    for(const data of transactionData){
        const div = document.createElement('div')
        div.innerHTML = `
        <div class=" bg-white rounded-xl p-3 flex justify-between items-center mt-3">
            <div class="flex items-center">
                <div class=" p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" class="mx-auto" alt="">
                </div>
                <div class="ml-3">
                    <h1>${data.name}</h1>
                     <p>${data.date}</p>
                </div>
            </div>
            <i class="fa-solid fa-ellipsis-vertical"></i>
        </div>
        
        `
        transactionContainer.appendChild(div)

    }
})

  

// toggling feature

document.getElementById('add-money-button').addEventListener('click', function(){
    handleToggle('add-money-parent')
    handleButtonStyle('add-money-button')
})

document.getElementById('cashout-button').addEventListener('click', function(){
    handleToggle('cashout-parent')
    handleButtonStyle('cashout-button')
})

document.getElementById('transfer-button').addEventListener('click',function(){
    handleToggle('transfer-money-parent')
    handleButtonStyle('transfer-button')
})

document.getElementById('get-bonus-button').addEventListener('click',function(){
    handleToggle('get-bonus-parent')
    handleButtonStyle('get-bonus-button')
})

document.getElementById('pay-bill-button').addEventListener('click',function(){
    handleToggle('pay-bill-parent')
    handleButtonStyle('pay-bill-button')
})

document.getElementById('transaction-button').addEventListener('click',function(){
    handleToggle('transaction-parent')
    handleButtonStyle('transaction-button')
})