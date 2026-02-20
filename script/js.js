// console.log('Ooooooo')

document.getElementById('btn-login').addEventListener('click', function(){
    // console.log('login done')
    // 1 get the mobile number
    const inputNumber= document.getElementById('input-number');
    const contactNumber= inputNumber.value;
    console.log(contactNumber);

    // 2 get the pin
    const inputPin= document.getElementById('input-pin');
    const contactPin= inputPin.value;
    console.log(contactPin);
    
    // 3 match pin and mobile number
    if(contactNumber=='01234567890' && contactPin=='1234'){
        // 3.1 true:::>> alert> homepage
        alert('Login Success')
        window.location.assign("home.html")
    }
    // 3.2 false:::>> alert> return
    else{
        alert('Login Failed');
    }
    return;
    
})