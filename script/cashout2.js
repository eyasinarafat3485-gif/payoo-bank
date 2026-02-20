document.getElementById('btn-cashout').addEventListener('click', function(){
    // 1 get agent number and validate 
    const cashoutNumber= getValueFromInput('cashout-number');
    // console.log(cashoutNumber);
    if(cashoutNumber.length !=11){
        alert('Invalid Agent Number');
        return;
    }

    // 2 get the amount
    const cashoutAmount= getValueFromInput('cashout-amount');
    // console.log(cashoutAmount)
    
    // 3 get current balance
    const currentBalance= getBalance();

    // 4 calculate new balance
    const newBalance= currentBalance- Number(cashoutAmount);
    console.log(newBalance);
    if(newBalance < 0){
        alert('Invalid Balance');
        return;
    }

      const pin= getValueFromInput('cashout-pin');
    if(pin=='1234'){
        alert('Cashout Successful');
        setBalance(newBalance);

        // 1 history-container ke dhore nea asbo
        const history= document.getElementById('history-container');

        // 2 new div create korbo
        const newHistory= document.createElement('div');

        // 3 new div innerHtml add korbo
        newHistory.innerHTML=` 
        <div class="transaction-card p-5 bg-base-100">
        Cashout ${cashoutAmount} Taka Success to ${cashoutNumber},  at ${new Date()}
        </div>
        `
        // 4 history container e newdiv ke append korbo
        history.append(newHistory);
    
    }
    else{
        alert('Invalid Pin');
        return;
    }
    

})


// // console.log('cash out pay and done')
// document.getElementById('btn-cashout').addEventListener('click', function(){
//     // console.log('aga taka de')

//     // 1 get agent number and validate 
//     const cashoutNumberInput= document.getElementById('cashout-number');
//     const cashoutNumber= cashoutNumberInput. value ;
//     console.log(cashoutNumber);
//     if(cashoutNumber.length !=11){
//         alert('Invalid Agent Number');
//         return;
//     }
    
//     // 2 get the amount , validate, convert to number
//     const cashoutAmountInput= document.getElementById('cashout-amount');
//     const cashoutAmount= cashoutAmountInput. value;
//     console.log(cashoutAmount);

//     // 3 get current balance
//     const balanceElement= document.getElementById('balance');
//     const balance= balanceElement.innerText;
//     console.log(balance); 

//     // 4 calculate new balance
//     const newBalance= Number(balance)- Number(cashoutAmount);
//     // console.log(newBalance);

//     if(newBalance < 0){
//         alert('Invalid Amount');
//         return;
//     }
//     // get the pin and verify
//     const cashoutPinInput= document.getElementById('cashout-pin');
//     const pin= cashoutPinInput.value; 
//     if(pin==='1234'){
//         alert('cashout successful');
//         console.log(newBalance);
//         balanceElement.innerText= newBalance
//     }
//     else{
//         alert('Invalid Pin');
//         return;
//     }

//     // 5.1 true:: show an alert > set balance
//     // 5.1 false:: show an error alert > set balance

// })