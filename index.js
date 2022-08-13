// first access and import the all html file in your JS flot
const billTotalInput = document.querySelector("#billTotalInput");

const tipInput = document.querySelector("#tipInput");

const numberOfPeople = document.querySelector("#numberOfPeople");

const perPersonTotal = document.querySelector("#perPersonTotal");

// AND STRICTLY SET THE NUMBER IN YOUR FILE MEAN WHEN USER ENTER STRING VALUE CHANGE TO THE NUMBER
let numberOfPeoples = Number(numberOfPeople.innerText);

// THESE 3 FUNCTION ARE VERY IMPORTANT OF THE PROJECT KEEP FOLLOW THE STEPS OK
const calculateBill = () => {
  // BILL VALUE CONVERT INTO THE NUMBER THIS IS THE FIRST STEP
  const bill = Number(billTotalInput.value);
  // GET THE TIP FROM USER AND CONVERT INTO PERCENTAGE DIVIDE BY 100
  const tipPercentage = Number(tipInput.value) / 100;
  console.log("divide", tipPercentage);
  // AND MULTIPLY THE BILL AND TIP PERCENTAGE BECAUSE THIS THE FORMULA...
  const totalAmount = bill * tipPercentage;
  // AND CAME VALUE YOU HAVE TO PLUS MULTIPLY VALUE AND BILL VALUE
  const total = totalAmount + bill;

  // AND DEVIDED BY PER PERSON TOTAL OF PEOPLES
  const perPersonTotals = total / numberOfPeoples;

  // AND DOM RENDER THE PER PERSON BILL
  perPersonTotal.innerText = `$${perPersonTotals.toFixed(2)}`;
};

const increasePeople = () => {
  // FIRST INCREASE THE NUMBER OF PEOPLE IN THE CONTENT
  numberOfPeoples += 1;
  // SECOND DOM RENDER THE VALUE OF THE NUMBER OF PEOPLES
  numberOfPeople.innerText = numberOfPeoples;
  // AND CALCULATE THE PER PERSON OF THE BILL METHOD IN THE BOX
  calculateBill();
};

const decreasePeople = () => {
  numberOfPeoples -= 1;

  if (numberOfPeoples <= 0) {
    alert("Don't Press The Button AnyMore");
  }

  numberOfPeople.innerText = numberOfPeoples;

  calculateBill();
};
