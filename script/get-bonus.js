// console.log('BONus')
document.getElementById('btn-get-bonus').addEventListener('click', function(){
    // console.log('need bonus')
    const getBonusNumber= getValueFromInput('get-bonus-number');
    console.log(getBonusNumber);
    if(getBonusNumber=="01234567890"){
        alert('Congratulation You Get Bonus');
        
         // 1 history-container ke dhore nea asbo
        const history= document.getElementById('history-container');

        // 2 new div create korbo
        const newHistory= document.createElement('div');

        // 3 new div innerHtml add korbo
        newHistory.innerHTML=`
        <div class="transaction-card p-5 bg-base-100">
        Coupon Bonus ${getBonusNumber},  at ${new Date()}
        </div>
        `
        // 4 history container e newdiv ke append korbo
        history.append(newHistory);

    }
    else{
        alert('Invalid Coupon Number');
        return;
    }
})