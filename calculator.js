exports.add = function (num1, num2) {
    dontExport();
    return parseInt(num1, 2) + parseInt(num2, 2);
}
exports.product = function (num1, num2) {
    dontExport();
    return parseInt(num1, 10) * parseInt(num2, 10);
}
exports.message = "Hello india"

function dontExport() {
    console.log("Calculator")
}