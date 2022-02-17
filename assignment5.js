function calculateExpenseBalance(){
    //get amount of income
    const incomeAmountInput = document.getElementById('income-amount-input')
    const incomeAmount= incomeAmountInput.value;
    //get amount of food cost
    const foodAmountInput =document.getElementById('food-amount-input');
    const foodAmount = foodAmountInput.value;
    //get amount of rent
    const rentAmountInput =document.getElementById('rent-amount-input');
    const rentAmount = rentAmountInput.value;
    //get amount of clothes cost
    const clothesAmountInput =document.getElementById('clothes-amount-input');
    const clothesAmount =  clothesAmountInput.value;
    const totalExpense=parseFloat(foodAmount)+parseFloat(rentAmount)+parseFloat(clothesAmount);
    const totalBalance=parseFloat(incomeAmount)-totalExpense;
    if(totalExpense > incomeAmount){
        alert("Expense cant be greater than income")
    }
    else{
        document.getElementById('total-expenses-amount').innerText=totalExpense;
    document.getElementById('total-balance').innerText=totalBalance;
    }

    
}





//handle caculate button
document.getElementById('calculate-amount').addEventListener('click',function(){ 
   calculateExpenseBalance();       
})






    document.getElementById('save-btn').addEventListener('click',function(){ 
        const incomeAmountInput = document.getElementById('income-amount-input')
    const incomeAmount= incomeAmountInput.value;
        const currentBalance = document.getElementById('total-balance').innerText;
        const saveAmountInput =document.getElementById('save-input');
        const saveAmount =  parseFloat(saveAmountInput.value);

   const savingAmount= parseFloat(incomeAmount) * (saveAmount / 100);

   const remainingBalance =  currentBalance - savingAmount;

document.getElementById('saving-amount-input').innerText=savingAmount;
document.getElementById('remaining-balance-input').innerText=remainingBalance;
    
    })
