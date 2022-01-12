// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName(customerName) {
    var customerName = customerName.toUpperCase();
    return customerName;
}
console.log(upperCaseCustomerName(customerName));

function setBestCustomer() {
    bestCustomer = 'not bob';
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
}

function leastFavoriteCustomer() {
    const leastCustomer = 'bob';
    function changeLeastFavoriteCustomer() {
        const leastCustomer= 'actually rick';
    }
    const resultFromSecondFunc = secondFunc();
    return resultFromSecondFunc;
}