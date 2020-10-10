function generate() {
    
    let length = document.getElementById('length').value;
    let uppercase = document.getElementById('uppercase').checked;
    let lowercase = document.getElementById('lowercase').checked;
    let numbers = document.getElementById('numbers').checked;
    let symbols = document.getElementById('symbols').checked;
    
    let pass = '';

    for (let i = 0; pass.length < length; i++) {
        
        let decision = Math.floor(Math.random() * 4) + 1;
        if(uppercase && decision === 1)
            pass += getLetter().toUpperCase();
        if(lowercase && decision === 2)
            pass += getLetter();
        if(numbers && decision === 3)
            pass += getNumber();
        if(symbols && decision === 4)
            pass += getSymbol();

    }
    document.getElementById('password').innerHTML = pass;
}

function getLetter() {
    let letter = Math.floor(Math.random() * 26) + 97;
    return String.fromCharCode(letter);
}

function getNumber() {
    return Math.floor(Math.random() * 10);
}

function getSymbol() {
    let symbol = Math.floor(Math.random() * 13) + 33;
    
    return (String.fromCharCode(symbol));
}

function copy()
{
    let copy = document.createElement('textarea');
    copy.value = document.getElementById('password').innerHTML;
    document.body.appendChild(copy);
    copy.select();
    document.execCommand('copy');
    document.body.removeChild(copy);
    
    setTimeout(()=>{
        document.getElementById('clipboard').innerHTML = "Copied";
    }, 0);
    
    setTimeout(()=>{
        document.getElementById('clipboard').innerHTML = "Copy";
    }, 1000);
    
}