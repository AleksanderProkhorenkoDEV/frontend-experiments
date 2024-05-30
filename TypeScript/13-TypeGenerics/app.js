function indentity(arg) {
    return arg;
}
var str = indentity('one');
var num = indentity(2);
var bool = indentity(true);
var Generic = /** @class */ (function () {
    function Generic() {
        this.item = [];
    }
    return Generic;
}());
var inst = new Generic;
inst.item.push("1");
