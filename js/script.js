const loginBtn = document.getElementById("login-button-id");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//for deposit function
const depositButton = document.getElementById("deposit-btn-id");
depositButton.addEventListener("click", function () {
    const depositAmount = document.getElementById("deposit-amount-id").value;
    const depositNumber = parseFloat(depositAmount);
    document.getElementById("deposit-amount-id").value = "";

    function update(id,depositNumber) {
        const current = document.getElementById(id).innerText;
        const currentNumber = parseFloat(current);
        const total = depositNumber + currentNumber;
        document.getElementById(id).innerText = total;
    }
    update("current-amount-id",depositNumber);
    update("current-balance-id",depositNumber);

})

