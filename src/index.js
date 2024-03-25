var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
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
// interface != type
console.log(logData(333));
// ===
//@ ts-check
//@ ts-expect-error
//@ ts-ignore
//@ ts-nocheck
function getTyple(a, b) {
    return [a, b];
}
console.log(getTyple(33, 11));
console.log(getTyple("string", 11));
console.log(getTyple("hellow", " typescript"));
var doc1 = {
    id: 312,
    name: "John Doe",
    abcd: "Alphabet",
};
var www = "world"; // world2222 ?!?!?!
var greet = "hello world";
var squareWidth = "100px";
var heading1Size = "2rem";
// let heading1Size: FontSize = "2"; // !!
// let heading1Size: FontSize = "2pt"; // !!
// module
// declaration files *.d.ts
// let history = 11;
myLib.hello("greeting from another file!");
// === Decorator
function Component(selector, template) {
    // console.log(cnFunction);
    return function (cnFunction) {
        var element = document.getElementById(selector);
        element.innerHTML = template;
    };
}
var Person = function () {
    var _classDecorators = [Component("myapp", "<h1>It is done!</h1>")];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var Person = _classThis = /** @class */ (function () {
        function Person_1(name) {
            this.name = name;
        }
        Person_1.prototype.getName = function () {
            console.log(this.name);
        };
        return Person_1;
    }());
    __setFunctionName(_classThis, "Person");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Person = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Person = _classThis;
}();
// Example of a class decorator
function classDecorator(constructor) {
    return /** @class */ (function (_super) {
        __extends(class_1, _super);
        function class_1() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this.newProperty = "new property";
            _this.hello = "override";
            return _this;
        }
        return class_1;
    }(constructor));
}
var ExampleClass = function () {
    var _classDecorators = [classDecorator];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var ExampleClass = _classThis = /** @class */ (function () {
        function ExampleClass_1() {
            this.property = "property";
        }
        return ExampleClass_1;
    }());
    __setFunctionName(_classThis, "ExampleClass");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        ExampleClass = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return ExampleClass = _classThis;
}();
//@ts-nocheck
var example = new ExampleClass();
console.log(example.property); // "property"
// console.log(example.newProperty); // "new property"
// console.log(example.hello); // "override"
