const emiAmountInput = document.querySelector(".emi-amount");
const interestRateInput = document.querySelector(".interest-rate");
const emiTenureInput =  document.querySelector(".emi-tenure");

const emiValue = document.querySelector(".loan-emi .value");
const totalInterest = document.querySelector(".total-interest .value");
const totalAmount = document.querySelector(".total-amount .value");

const calculatebtn = document.querySelector(".calculate-btn");

let emiAmount = parseFloat(emiAmountInput.value);
let rate = parseFloat(interestRateInput.value);
let tenure = parseFloat(emiTenureInput.value);

let interest = rate / 12 / 100 ;

const calculateEMI = () => {

    let emi = emiAmount * interest * (Math.pow(1 + interest , tenure)/
    (Math.pow(1+ interest , tenure) -1));

    return emi;
};

const updateData = (emi) => {

    emiValue.innerHTML = Math.round(emi);

    let Amount = Math.round(tenure * emi);
    totalAmount.innerHTML = Amount;

    let interestpayable = Math.round(Amount - emiAmount);
    totalInterest.innerHTML = interestpayable;
};

const init = () => {

    let emi = calculateEMI();
    updateData(emi);

};

init();
