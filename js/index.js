//btn changes hide donation show history

document.getElementById("history-btn").addEventListener('click', function(event){
    const donationSection = document.getElementById("donation-section");
    donationSection.classList.add('hidden');
    const donationBtn = document.getElementById("donation-btn");
    changeBtnColor(event.target,donationBtn);
    const historySection = document.getElementById("history-section");
    historySection.classList.remove('hidden');
})

document.getElementById("donation-btn").addEventListener('click', function(event){
    const donationSection = document.getElementById("donation-section");
    donationSection.classList.remove('hidden');
    const historyBtn = document.getElementById("history-btn");
    changeBtnColor(event.target, historyBtn);
})


// donation amount calculation 

document.getElementById("noakhali-donate-btn").addEventListener('click',function () {
    const accountBalance = document.getElementById("account-balance").innerText;
    const accountBalanceNumber = parseFloat(accountBalance);
    const noakhaliBalance = document.getElementById("noakhali-donate-balance").innerText;
    const noakhaliBalanceNumber = parseFloat(noakhaliBalance);
    const noakhaliInput = document.getElementById("noakhali-amount-input").value;
    doDonationAmountCalc(noakhaliInput,accountBalanceNumber,noakhaliBalanceNumber,"noakhali-donate-balance","account-balance");
})