// Declaring a global variable customerName
var customerName = 'bob';

// Function to uppercase the global customerName variable
function upperCaseCustomerName() {
    customerName = customerName.toUpperCase();
}

// Function to declare a global variable bestCustomer and assign it 'not bob'
function setBestCustomer() {
    bestCustomer = 'not bob'; // Declares a global variable bestCustomer
}

// Function to overwrite the global bestCustomer variable
function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

// Declaring a constant global variable leastFavoriteCustomer
const leastFavoriteCustomer = 'initial value';

// Function to attempt to change the constant leastFavoriteCustomer
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'new value'; // This will throw an error
}

// For the testing framework (Mocha) to correctly evaluate the results, ensure the initial values are set back
function resetCustomerName() {
    customerName = 'bob';
}

function resetBestCustomer() {
    delete global.bestCustomer;
}

// Export the functions and variables for the testing framework
module.exports = {
    get customerName() {
        return customerName;
    },
    upperCaseCustomerName,
    setBestCustomer,
    overwriteBestCustomer,
    get leastFavoriteCustomer() {
        return leastFavoriteCustomer;
    },
    changeLeastFavoriteCustomer,
    resetCustomerName,
    resetBestCustomer
};
