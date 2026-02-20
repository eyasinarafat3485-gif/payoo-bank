document.getElementById('btn-pay-bill').addEventListener('click', function(){
    // console.log('add money button')

    // 1 get bank account
    const payBank= getValueFromInput('pay-bill-bank');
    // console.log(bankAccount)
    if(payBank== 'Select bank'){
        alert('Please select a bank');
        return;
    }

    // 1 get agent number and validate 
    const payBillNumber= getValueFromInput('pay-bill-number');
    console.log(payBillNumber);
    if(payBillNumber.length !=11){
        alert('Invalid Pay Bill Number');
        return;
    }

    /// 3 get the amount
    const payAmount= getValueFromInput('pay-bill-amount');
    console.log(payAmount);

    // 4 get current balance
    const currentBalance= getBalance();

    
    // 4 calculate new balance
    const newBalance= currentBalance - Number(payAmount);
    console.log(newBalance);
     if(newBalance <0){
        alert('Invalid Balance');
        return;
    }

    // 
    const pin= getValueFromInput('pay-bill-pin');
    if(pin=='1234'){
        alert('Pay Bill Success');
        setBalance(newBalance);

        // 1 history-container ke dhore nea asbo
        const history= document.getElementById('history-container');

        // 2 new div create korbo
        const newHistory= document.createElement('div');

        // 3 new div innerHtml add korbo
        newHistory.innerHTML=`
        <div class="transaction-card p-5 bg-base-100">
        Pay Bill ${payAmount} Taka Success to ${payBillNumber},  at ${new Date()}
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