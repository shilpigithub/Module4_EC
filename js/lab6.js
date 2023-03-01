// GLOBAL VARIABLES
let futureValue;
let investment;
let rate;
let years;

// COLLECT VALUES FROM THE USER

investment = parseFloat(prompt('Enter investment amount as xxxx.xx'));
while(isNaN(investment)){
    investment = parseFloat(prompt('Invalid amount \nPlease enter investment amount as xxxx.xx'));
}

while(true){
    rate = parseFloat(prompt('Enter interest rate as xx.x'));
    if(isNaN(rate))
        alert('Please enter a valid rate (number)')
    else if( rate < 0 || rate >30)
        alert('Please enter a realistic rate between 0 and 30')
    else
        break

}

while(true){
    years = parseInt(prompt('Enter the number of years you want to invest for'));
    if(isNaN(years))
        alert('Please enter a year in umber')
    else if(years < 1 || years > 30)
        alert('Please enter years between 1 and 30')    
    else 
        break
}


// CALCULATE FUTURE VALUE
futureValue = investment;
for (let i = 0; i < years; i++) {
    futureValue = futureValue + (futureValue * rate / 100);
}

// DISPLAY RESULT
document.write(`Investment amount: $${investment.toFixed(2)}<br>`);
document.write(`Interest rate: ${rate.toFixed(2)}%<br>`);
document.write(`Years: ${years}<br>`);
document.write(`Future value: $${futureValue.toFixed(2)}`);