function convert()
{
    let money = +document.getElementById('money').value;
    let time = +document.getElementById('time').value;
    let interestrate = +document.getElementById('interestrate').value;
    let interrest_rate = interestrate/12 * time ; 
    Amountofprofit = money * interrest_rate;
    
    document.getElementById('result').innerHTML = "Result: " + Amountofprofit;

    
}