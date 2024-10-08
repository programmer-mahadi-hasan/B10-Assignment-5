//btn changes hide donation show history

document.getElementById("history-btn").addEventListener('click', function(event){
    const donationSection = document.getElementById("donation-section");
    donationSection.classList.add('hidden');
    const donationBtn = document.getElementById("donation-btn");
    changeBtnColor(event.target,donationBtn);
    const historySection = document.getElementById("history-section");
    historySection.classList.remove('hidden');
    const footer = document.getElementById("footer");
    footer.classList.add('hidden');
})

document.getElementById("donation-btn").addEventListener('click', function(event){
    const donationSection = document.getElementById("donation-section");
    donationSection.classList.remove('hidden');
    const historyBtn = document.getElementById("history-btn");
    changeBtnColor(event.target, historyBtn);
    const historySection = document.getElementById("history-section");
    historySection.classList.add('hidden');
    const footer = document.getElementById("footer");
    footer.classList.remove('hidden');
})


// ----- amount calculation-----//

//noakhali donate btn
document.getElementById("noakhali-donate-btn").addEventListener('click',function () {
    const accountBalance = document.getElementById("account-balance").innerText;
    const accountBalanceNumber = Number(accountBalance);
    const noakhaliBalance = document.getElementById("noakhali-donate-balance").innerText;
    const noakhaliBalanceNumber = Number(noakhaliBalance);
    const noakhaliInput = document.getElementById("noakhali-amount-input").value;
    const donateText = document.createElement('span');
    donateText.innerText = 'Taka is Donated for Flood at Noakhali, Bangladesh'
    donateCalcAndAddHistory(noakhaliInput,accountBalanceNumber,noakhaliBalanceNumber,"noakhali-donate-balance","account-balance",donateText);
    document.getElementById("noakhali-amount-input").value = '';
})

//feni donate btn
document.getElementById("feni-donate-btn").addEventListener('click',function () {
    const accountBalance = document.getElementById("account-balance").innerText;
    const accountBalanceNumber = Number(accountBalance);
    const feniBalance = document.getElementById("feni-balance").innerText;
    const feniBalanceNumber = Number(feniBalance);
    const feniInput = document.getElementById("feni-input").value;
    const donateText = document.createElement('span');
    donateText.innerText = 'Taka is Donated for Flood Relief in Feni,Bangladesh'
    donateCalcAndAddHistory(feniInput,accountBalanceNumber,feniBalanceNumber,"feni-balance","account-balance",donateText);
    document.getElementById("feni-input").value = '';

})

// injured quota btn
document.getElementById("quota-donation-btn").addEventListener('click',function () {
    const accountBalance = document.getElementById("account-balance").innerText;
    const accountBalanceNumber = Number(accountBalance);
    const quotaBalance = document.getElementById("quota-balance").innerText;
    const quotaBalanceNumber = Number(quotaBalance);
    const quotaInput = document.getElementById("quota-input").value;
    const donateText = document.createElement('span');
    donateText.innerText = 'Taka is Donated for Aid for Injured in the Quota Movement'
    donateCalcAndAddHistory(quotaInput,accountBalanceNumber,quotaBalanceNumber,"quota-balance","account-balance",donateText);
    document.getElementById("quota-input").value = '';

})
