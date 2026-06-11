// login button functionality
document.getElementById('loginButton').addEventListener('click',function(event){
    event.preventDefault()

    const mobileNumber = 16474537980;
    const pinNumber = 4444;

    const mobileNumberValue = document.getElementById('mobile-number').value;
    const mobileNumberValueConverted = parseInt(mobileNumberValue);

    const pinNumberValue = document.getElementById('pin-number').value;
    const pinNumberValueConverted = parseInt(pinNumberValue);

    // console.log(mobileNumberValueConverted, pinNumberValueConverted)

    if(mobileNumberValueConverted === mobileNumber && pinNumberValueConverted === pinNumber){
        // console.log('All value mach');
        window.location.href="./home.html"
    }else{
        // console.log('Invalid Credentials');
        alert('Invalid Credentials');
    }
})