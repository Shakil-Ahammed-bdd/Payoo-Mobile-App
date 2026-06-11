const validPin = 1234
const coupon = 4321
const transactionData = []

//  Function to get input values
function getInputValueNumber(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    const inputFieldValueNumber = parseInt(inputFieldValue)
    return inputFieldValueNumber
}

function getInputValue(id){
    const inputField = document.getElementById(id)
    const inputFieldValue = inputField.value
    return inputFieldValue
}

// function to get innerText
function getInnerText(id){
    const element = document.getElementById(id)
    const elementValue = element.innerText
    const elementValueNumber = parseInt(elementValue)
    return elementValueNumber
}

// function to set innerText
function setInnerText(value){
    // console.log(value)
    const availableBalanceElement = document.getElementById('available-balance')
    availableBalanceElement.innerText = value
}

// function to toggle
function handleToggle(id){
    const forms = document.getElementsByClassName('form')
    for(const form of forms){
    form.style.display = 'none'
   }
   document.getElementById(id).style.display = 'block'
}

// function to toggle button
function handleButtonToggle(id){
    const formBtns = document.getElementsByClassName('form-btn')

    for(const btn of formBtns){
        btn.classList.remove('border-[#0874f2]', 'bg-[#0874f20d]')
        btn.classList.add('border-gray-300')
    }
    document.getElementById(id).classList.remove('border-gray-300')
    document.getElementById(id).classList.add('border-[#0874f2]', 'bg-[#0874f20d]')
}
//  h2 text bold and color 
function handleTextToggle(id){
    const allId = ["h2-add-money","h2-cash-out","h2-transfer-money","h2-get-bonus","h2-pay-bill","h2-transactions"]
    for(const text of allId){
        document.getElementById(text).classList.remove('font-bold','text-[#0874f2]')
    }
    document.getElementById(id).classList.add('font-bold','text-[#0874f2]')
}
// logout button
document.getElementById('logout-btn').addEventListener('click',function(){
    window.location.href="./index.html"
})
// Add money
document.getElementById('add-money-btn').addEventListener('click',function(event){
    event.preventDefault()
    // console.log('add money btn clicked')

    const bank = getInputValue('select-bank')
    const accountNumber = getInputValue('account-number')
    const amount = getInputValueNumber('add-amount')

    if(amount <= 0){
        alert("invalid amount")
        return;
    }

    const pin = getInputValueNumber('add-pin')
    // console.log(bank,amount,accountNumber,pin)

    const availableBalance = getInnerText('available-balance')
    // console.log(availableBalance)

    if(accountNumber.length < 11 && accountNumber > 11){
        alert('Please provide valid account number')
        return;
    }

    if(pin !== validPin){
        alert('Please provide valid Pin number')
        return;
    }

    const totalNewAvailableBalance = amount + availableBalance;

    setInnerText(totalNewAvailableBalance)

    const data = {
        name:'Add Money',
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)

})

// Cash Out
document.getElementById('withraw-money').addEventListener('click',function(event){
    event.preventDefault()

    const agentNumber = getInputValue('agent-number')
    const amount = getInputValueNumber('cash-amount')
    const pin = getInputValueNumber('cash-pin')
    // console.log(agentNumber,amount,pin)

    const availableBalance = getInnerText('available-balance')
    // console.log(availableBalance)

    if(amount <= 0 || amount > availableBalance){
        alert("invalid amount")
        return;
    }

    if(agentNumber.length < 11 && agentNumber > 11){
        alert('Please provide valid account number')
        return;
    }

    if(pin !== validPin){
        alert('Please provide valid Pin number')
        return;
    }

    const totalNewAvailableBalance =availableBalance - amount;

    setInnerText(totalNewAvailableBalance)

    const data = {
        name:'Cash Out',
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)

})

// Transfer Money
document.getElementById('send-now').addEventListener('click',function(event){
    event.preventDefault()

    const userAccountNumber = getInputValue('user-account-number')
    const userAmount = getInputValueNumber('user-amount')
    const userPin = getInputValueNumber('user-pin')
    console.log(userAccountNumber,userAmount,userPin)

    const availableBalance = getInnerText('available-balance')
    // console.log(availableBalance)

    if( userAmount <= 0 || userAmount > availableBalance){
        alert("invalid amount")
        return;
    }

    if(userAccountNumber.length < 11 && userAccountNumber > 11){
        alert('Please provide valid account number')
        return;
    }

    if(userPin !== validPin){
        alert('Please provide valid Pin number')
        return;
    }

    const totalNewAvailableBalance = availableBalance - userAmount;

    setInnerText(totalNewAvailableBalance)

    const data = {
        name:'Transfer Money',
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)

})

// Get Bonus
document.getElementById('get-bonus').addEventListener('click',function(event){
    event.preventDefault()

    const code = getInputValueNumber('bonus-coupon')
    
    const availableBalance = getInnerText('available-balance')
    // console.log(availableBalance)

    const bonus = 1000;

    if(code === coupon){
        const totalNewAvailableBalance = availableBalance + bonus;

        document.getElementById('available-balance').innerText = totalNewAvailableBalance;
        console.log(totalNewAvailableBalance)
    }else{
        alert("Please provide valid Coupon Code...")
    }

    const data = {
        name:'Get Bonus',
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
})

// Pay Bill
document.getElementById('pay-now').addEventListener('click',function(event){
    event.preventDefault()
    // console.log('add money btn clicked')

    const pay = getInputValue('select-bill')
    const billAccountNumber = getInputValue('bill-account-number')
    const payAmount = getInputValueNumber('pay-amount')
    const payPin = getInputValueNumber('pay-pin')
    // console.log(pay,billAccountNumber,payAmount,payPin)

    const availableBalance = getInnerText('available-balance')
    // console.log(availableBalance)

    if( payAmount <= 0 || payAmount > availableBalance){
        alert("invalid amount")
        return;
    }

    if(billAccountNumber.length < 11 && billAccountNumber > 11){
        alert('Please provide valid account number')
        return;
    }

    if(payPin !== validPin){
        alert('Please provide valid Pin number')
        return;
    }
    const totalNewAvailableBalance = availableBalance - payAmount;

    setInnerText(totalNewAvailableBalance) 
    // console.log(totalNewAvailableBalance)

    const data = {
        name:'Pay Bill',
        date: new Date().toLocaleTimeString()
    }

    transactionData.push(data)
})

// transactions
document.getElementById('transaction').addEventListener('click',function(event){
    // event.preventDefault()

    const transactionContainer = document.getElementById('transaction-container')
    transactionContainer.innerText = ''

    for(const data of transactionData){
        const div = document.createElement('div')
        div.innerHTML = `
        <div class="bg-white rounded-xl p-3 flex justify-between items-center mt-3">
                <div class="flex items-center">
                  <div class="p-3 rounded-full bg-[#f4f5f7]">
                    <img src="./assets/wallet1.png" class="mx-auto" alt="" />
                  </div>
                  <div class="ml-3">
                    <h1 class="font-semibold">${data.name}</h1>
                    <small>${data.date}</small>
                  </div>
                </div>
                <i class="fa-solid fa-ellipsis rotate-90"></i>
              </div>
        `
        transactionContainer.appendChild(div)
    }
})


// toggling Feature
// add money
document.getElementById('add-button').addEventListener('click',function(){
    handleToggle('add-money-parent')

    handleButtonToggle('add-button')
    handleTextToggle("h2-add-money")
    
})
// cash out
document.getElementById('cash-out-button').addEventListener('click',function(){
    handleToggle('cash-out-parent')

    handleButtonToggle('cash-out-button')
    handleTextToggle("h2-cash-out")
    
})
// transfer money
document.getElementById('transfer-button').addEventListener('click',function(){
    handleToggle('transfer-parent')

    handleButtonToggle("transfer-button")
    handleTextToggle('h2-transfer-money')
})
// bonus
document.getElementById('bonus-button').addEventListener('click',function(){
    handleToggle('bonus-parent')

    handleButtonToggle('bonus-button')
    handleTextToggle("h2-get-bonus")
})
// pay bill
document.getElementById('pay-bill').addEventListener('click',function(){
    handleToggle('pay-bill-parent')

    handleButtonToggle('pay-bill')
    handleTextToggle("h2-pay-bill")
})
// transactions
document.getElementById('transaction').addEventListener('click',function(){
    handleToggle('transaction-parent')

    handleButtonToggle('transaction')
    handleTextToggle("h2-transactions")
})
