const loginBtn = document.getElementById("login-button-id");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//for deposit function
const depositButton = document.getElementById("deposit-btn-id");
depositButton.addEventListener("click",function(){
    const depositAmount = document.getElementById("deposit-amount-id").value;
    const depositNumber = parseFloat(depositAmount);

    const currentAmount = document.getElementById("current-amount-id").innerText;
    const currentAmountNumber = parseFloat(currentAmount);
    const totalAmount = depositNumber+currentAmountNumber;
    document.getElementById("current-amount-id").innerText = totalAmount;
    document.getElementById("deposit-amount-id").value = "";
    

    const currentBalance = document.getElementById("current-balance-id").innerText;
    console.log(currentBalance);
    const currentBalanceNumber = parseFloat(currentBalance);
    
    const totalBalance = depositNumber+currentBalanceNumber;
    document.getElementById("current-balance-id").innerText = totalBalance;
})