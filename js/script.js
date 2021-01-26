const loginBtn = document.getElementById("login-button-id");
loginBtn.addEventListener("click", function () {
    const loginArea = document.getElementById("login-area");
    loginArea.style.display = "none";
    const transactionArea = document.getElementById("transaction-area");
    transactionArea.style.display = "block";
})

//for deposit button
const depositButton = document.getElementById("deposit-btn-id");
depositButton.addEventListener("click", function () {
    const inputAmount = getInput("deposit-amount-id");
    update("current-amount-id", inputAmount);
    update("current-balance-id", inputAmount);
})
//for withdraw button
const withdrawButton = document.getElementById("withdraw-btn-id");
withdrawButton.addEventListener("click", function () {
    const inputAmount = getInput("withdraw-amount-id");
    update("withdraw-balance-id", inputAmount);
    updateNeg("current-balance-id", inputAmount)
})

function getInput(id) {
    const inputAmount = document.getElementById(id).value;
    const inputNumber = parseFloat(inputAmount);
    document.getElementById(id).value = "";
    return inputNumber;
}

function update(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = depositNumber + currentNumber;
    document.getElementById(id).innerText = total;
}
function updateNeg(id, depositNumber) {
    const current = document.getElementById(id).innerText;
    const currentNumber = parseFloat(current);
    const total = currentNumber - depositNumber;
    document.getElementById(id).innerText = total;
}