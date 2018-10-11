//Listen for submit

document.getElementById('loan-form').addEventListener('submit', calculateResults);

//Calculate the results
function calculateResults(e) {

  console.log('Calculating...');

  //UI variables
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');


  const principle = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  //Computed monthly payments

  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principle * x * calculatedInterest) / (x - 1);
  if (isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments) - principle).toFixed(2);

  } else {
    showError('Please Check Your Numbers');
  }

  e.preventDefault();

}


// Show Error

function showError(error) {

  //Create a div
  const errorDiv = document.createElement('div');


  //Get elements
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');


  //Add class 
  errorDiv.className = 'alert alert-danger';

  //Create text node
  errorDiv.appendChild(document.createTextNode(error));


  //Insert Error Above Heading
  card.insertBefore(errorDiv, heading);

  //Clear Error after 3 seconds
  setTimeout(clearError, 3000);

}


//Clear Error
function clearError() {
  document.querySelector('.alert').remove();
}