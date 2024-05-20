/* --------------- Type params of functions --------------- */
var add = function (a, b) {
    if (b === void 0) { b = 0; }
    return a + b;
};
var result = add(1, 3);
/* --------------- Type functions --------------- */
var combineFunctions;
var multiply = function (a, b) {
    return a * b;
};
var sayHello = function () {
    return 'Hello my friend';
};
var user = 'Bob';
if (user === 'pep') {
    combineFunctions = multiply;
}
else {
    combineFunctions = sayHello;
}
/* --------------- Type never --------------- */
var generateError = function (message) {
    throw new Error(message);
};
generateError('This is a error message');
