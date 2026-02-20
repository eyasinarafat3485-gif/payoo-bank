document.getElementById('btn-add-money').addEventListener('click', function(){
    // console.log('add money button')

    // 1 get bank account
    const bankAccount= getValueFromInput('add-money-bank');
    // console.log(bankAccount)
    if(bankAccount== 'Just Select a Bank'){
        alert('Please select a bank');
        return;
    }

    // 2 get bank account number
    const bankAccountNumber= getValueFromInput('add-money-number');
    if(bankAccountNumber.length !=11){
        alert('Invalid Account Number')
        return;
    }

    // 3 get amount
    const amount= getValueFromInput('add-money-amount');
    const newBalance= getBalance() + Number(amount);
    console.log(newBalance);

    // 4 get pin
    const pin= getValueFromInput('add-money-pin');
    if(pin=='1234'){
        alert(`Add Money Success from ${bankAccount}, at ${new Date()}`);
        setBalance(newBalance);

        // 1 history-container ke dhore nea asbo
        const history= document.getElementById('history-container');

        // 2 new div create korbo
        const newHistory= document.createElement('div')

        // 3 new div innerHtml add korbo
        newHistory.innerHTML=` 
        <div class="transaction-card p-5 bg-base-100">
        Add Money ${amount} Taka Success from ${bankAccount}, Account-Number ${bankAccountNumber} at ${new Date()}
        </div>
        `
        // 4 history container e newdiv ke append korbo
        history.append(newHistory);
  
    }
    else{
        alert('Invalid Pin')
        return;
    }

})