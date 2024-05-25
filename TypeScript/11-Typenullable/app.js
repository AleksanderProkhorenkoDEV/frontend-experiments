var _a, _b;
var user = {
    address: {
        street: {
            name: 'Plaza España'
        }
    }
};
((_b = (_a = user === null || user === void 0 ? void 0 : user.address) === null || _a === void 0 ? void 0 : _a.street) === null || _b === void 0 ? void 0 : _b.name) === 'Plaza España'
    ? console.log('Enhorabuena!. Tu envío será gratuito')
    : console.log('Ops!. Te costará 3€ el coste de envío.');
function getDefinirOrDefault(stringOrNull) {
    return stringOrNull !== null && stringOrNull !== void 0 ? stringOrNull : 'default';
}
