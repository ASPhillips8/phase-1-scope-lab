var customerName = `bob`;
const leastFavoriteCustomer = `least liked`;

function upperCaseCustomerName() {
  customerName = customerName.toUpperCase();
}

function setBestCustomer () {
  bestCustomer = `not bob`;
}

function overwriteBestCustomer () {
  bestCustomer = `maybe bob`;
}

function changeLeastFavoriteCustomer () {
  leastFavoriteCustomer = 'tony';
}
changeLeastFavoriteCustomer()