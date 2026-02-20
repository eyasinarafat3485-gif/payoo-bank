// console.log('transfer done')
document.getElementById('btn-transfer').addEventListener('click', function(){
    // console.log('heoo buddy')

    // 1 get agent number and validate 
    const transferNumber= getValueFromInput('transfer-number');
    console.log(transferNumber);
    if(transferNumber.length !=11){
        alert('Invalid Transfer Number');
        return;
    }
    // 2 get the amount
    const transferAmount= getValueFromInput('transfer-amount');
    // console.log(transferAmount);

    // 3 get current balance
    const currentBalance= getBalance();

    // 4 calculate new balance
    const newBalance= currentBalance - Number(transferAmount);
    console.log(newBalance);
     if(newBalance <0){
        alert('Invalid Balance');
        return;
    }
    const pin= getValueFromInput('transfer-pin');
    if(pin=='1234'){
        alert('Transfer Success');
        setBalance(newBalance);
        // 1 history-container ke dhore nea asbo
        const history= document.getElementById('history-container');

        // 2 new div create korbo
        const newHistory= document.createElement('div');

        // 3 new div innerHtml add korbo
        newHistory.innerHTML=`
        <div class="transaction-card p-5 bg-base-100">
        Transfer ${transferAmount} Taka Success to ${transferNumber},  at ${new Date()}
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