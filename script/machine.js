console.log('Machine added');

// machine id -> input value
function getValueFromInput(id){
    const input= document.getElementById(id);
    const value= input.value;
    console.log(id, value);
    return value;
}

// machine -> balance
function getBalance(){
    const balanceElement= document.getElementById('balance')
    const balance= balanceElement.innerText;
    console.log(Number(balance))
    return Number(balance);
}

// machine value -> set Balance
function setBalance(value){
    const balanceElement= document.getElementById('balance');
    balanceElement.innerText= value;
}

// machine id -> hide all > show id
function showOnly(id){
    const addMoney= document.getElementById('add-money');
    const cashout= document.getElementById('cashout');
    const transfer= document.getElementById('transfer');
    const getbonus= document.getElementById('get-bonus');
    const paybill= document.getElementById('pay-bill');
    const history= document.getElementById('history');
    // console.log(`add Money-${addMoney}, cashOut-${cashout}`)

    // shobaike hide kore daw
    addMoney.classList.add('hidden');
    cashout.classList.add('hidden');
    transfer.classList.add('hidden');
    getbonus.classList.add('hidden'); 
    paybill.classList.add('hidden'); 
    history.classList.add('hidden'); 
    
     

    // id wala element ta ke show koro
    const selected= document.getElementById(id);
    selected.classList.remove('hidden');
}
