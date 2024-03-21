var phone = "99202020";
var x = 3;
console.log(phone);
var obj = {
    name: "John",
    age: 32,
};
console.log("object :>> ", obj);
function add(a, b) {
    return a + b;
}
console.log(add(33, 11));
// == Options
function printNumber(num) {
    console.log(num);
}
printNumber(11);
printNumber("eleven");
printNumber(true);
var gender = "male";
gender = "female";
console.log(gender);
var person = "transgender";
console.log(person);
// === types in fuction
function printX(num) {
    if (typeof num === "string") {
        console.log(num.toUpperCase());
    }
    else {
        console.log(num * num);
    }
}
printX(11);
printX("hello typescript!");
var dot = {
    x: 300,
    y: 450,
    color: "transparent",
};
console.log(dot.color);
var dot2 = {
    x: 300,
    y: 450,
    color: "blue",
};
console.log(dot2.color);
var dot3 = {
    x: 100,
    y: 530,
    color: "green",
};
var dot4 = {
    x: 100,
    y: 530,
    color: "green",
    opaque: "transparent",
};
console.log(dot3.color);
function dotMovement(pt) {
    pt.x += 200;
    pt.y += 150;
    pt.color = "red";
    return pt;
}
console.log(dotMovement(dot3));
// === array
// let days = ["mon", "tue", "wed"];
var days = ["mon", "tue", "wed"];
days.forEach(function (day) {
    console.log(day.toUpperCase()); // string function
});
var custom = [];
var customOR = []; // string array or object array
var computer1 = {
    name: "laptop",
    year: 2024,
    hdd: {
        size: 500,
        metric: "TB",
    },
};
console.log(computer1);
// === Enum // tseejlehed amar
var UnitEnum;
(function (UnitEnum) {
    UnitEnum[UnitEnum["Mb"] = 0] = "Mb";
    UnitEnum[UnitEnum["Gb"] = 1] = "Gb";
    UnitEnum[UnitEnum["Tb"] = 2] = "Tb";
})(UnitEnum || (UnitEnum = {})); // number index
var UnitEnumAlias;
(function (UnitEnumAlias) {
    UnitEnumAlias["Mb"] = "mb";
    UnitEnumAlias["Gb"] = "gb";
    UnitEnumAlias["Tb"] = "tb";
})(UnitEnumAlias || (UnitEnumAlias = {})); // alias
console.log(UnitEnum.Gb);
console.log(UnitEnumAlias.Gb);
var Http_Response;
(function (Http_Response) {
    Http_Response[Http_Response["SUCCESS"] = 200] = "SUCCESS";
    Http_Response[Http_Response["ERROR"] = 503] = "ERROR";
    Http_Response[Http_Response["NOT_FOUND"] = 404] = "NOT_FOUND";
})(Http_Response || (Http_Response = {}));
console.log(Http_Response.NOT_FOUND);
// === never
var xx;
var yy;
var hello = function () {
    // throw new Error();
    console.log(1);
};
function calc(a, b) {
    if (a === undefined)
        return 0;
    if (b === undefined)
        return a + a;
    return a + b;
}
// === Generic
// X type variable
function logData(data) {
    return data;
}
console.log(logData("hello"));
console.log(logData({ name: "John" }));
console.log(logData(333));
