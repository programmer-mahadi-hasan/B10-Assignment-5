// --------COMMON SHARED FUNCTION---------//

// change btn color
function changeBtnColor(id1, id2) {
    id1.classList.remove('btn-outline');
    id1.classList.add('btn-accent');
    id2.classList.remove('btn-accent');
    id2.classList.add('btn-outline');
}

// donation amount calculation and show

function donateCalcAndAddHistory(input, accountBalance, donationBalance, id1, id2, donateText) {
    if (input === '') {
        alert('Invalid Input! Try again.');
        return;
    }

    const inputNumber = parseFloat(input);

    if (isNaN(inputNumber)) {
        alert('Invalid Input! Try again.');
        return;
    }
    if (inputNumber > accountBalance) {
        alert('You have insufficient funds! Try again.')
        return;
    }
    if (inputNumber <= 0) {
        alert('Invalid Input! Try again.');
        return;
    }
    else {
        const newDonationBalance = donationBalance + inputNumber;
        const newAccountBalance = accountBalance - inputNumber;
        document.getElementById(id1).innerText = newDonationBalance;
        document.getElementById(id2).innerText = newAccountBalance;
        donateAddToHistory(inputNumber, donateText);
        document.getElementById("my_modal_5").showModal();
    }

}

//add donation info to history

function donateAddToHistory(donateAmount, donateText) {
    const date = new Date();
    const div = document.createElement('div');
    div.classList.add('p-8', 'border', 'rounded-xl');
    div.innerHTML =
        `
         <h2 class="text-xl font-bold">${donateAmount} ${donateText.innerText}</h2>
        <h3 class="font-light mt-4">${date.toString()}</h3>
    `
    document.getElementById("history-section").appendChild(div);
    console.log(div)
    return;
}