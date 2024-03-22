const phone: string = "99202020";

const x: 3 | 4 | 5 = 3;

console.log(phone);

const obj: Object = {
  name: "John",
  age: 32,
};
console.log("object :>> ", obj);

function add(a: number, b: number): number {
  return a + b;
}

console.log(add(33, 11));

// == Options

function printNumber(num: number | string | boolean) {
  console.log(num);
}

printNumber(11);
printNumber("eleven");
printNumber(true);

let gender: "male" | "female" = "male";

gender = "female";

console.log(gender);

// === type
type BinaryGender = "male" | "female";

type ModernGender = BinaryGender | "transgender" | "LGBTQ+++";

let person: ModernGender = "transgender";

console.log(person);

// === types in fuction

function printX(num: number | string) {
  if (typeof num === "string") {
    console.log(num.toUpperCase());
  } else {
    console.log(num * num);
  }
}

printX(11);
printX("hello typescript!");

// === object type

type Color = "red" | "blue" | "green" | "transparent";

let dot = {
  x: 300,
  y: 450,
  color: "transparent",
};
console.log(dot.color);

let dot2: {
  x: number;
  y: number;
  color: Color;
} = {
  x: 300,
  y: 450,
  color: "blue",
};
console.log(dot2.color);

// === type alias
type Dot = {
  x: number;
  y: number;
  color: Color;
  opaque?: Color; // optional
};

let dot3: Dot = {
  x: 100,
  y: 530,
  color: "green",
};
let dot4: Dot = {
  x: 100,
  y: 530,
  color: "green",
  opaque: "transparent",
};

console.log(dot3.color);

function dotMovement(pt: Dot): Dot {
  pt.x += 200;
  pt.y += 150;
  pt.color = "red";
  return pt;
}

console.log(dotMovement(dot3));

// === array

// let days = ["mon", "tue", "wed"];
let days: string[] = ["mon", "tue", "wed"];

days.forEach((day) => {
  console.log(day.toUpperCase()); // string function
});

let custom: { item: number | boolean | null }[] = [];
let customOR: { item: number | boolean | null }[] | string = []; // string array or object array

// === tuple

type Unit = "MB" | "GB" | "TB";

type Pc = {
  name: string;
  year: number;
  hdd: { size: number; metric: string };
};

let computer1: Pc = {
  name: "laptop",
  year: 2024,
  hdd: {
    size: 500,
    metric: "TB",
  },
};
console.log(computer1);

// === Enum // tseejlehed amar
enum UnitEnum {
  Mb,
  Gb,
  Tb,
} // number index
enum UnitEnumAlias {
  Mb = "mb",
  Gb = "gb",
  Tb = "tb",
} // alias

console.log(UnitEnum.Gb);
console.log(UnitEnumAlias.Gb);

enum Http_Response {
  SUCCESS = 200,
  ERROR = 503,
  NOT_FOUND = 404,
}

console.log(Http_Response.NOT_FOUND);

// === never

let xx: never;
let yy: never;

const hello = () => {
  // throw new Error();
  console.log(1);
};

// xx = hello();

// === function overload

function calc(): number;
function calc(a: number): number;
function calc(a: number, b: number): number;

function calc(a?: number, b?: number): number {
  if (a === undefined) return 0;
  if (b === undefined) return a + a;
  return a + b;
}

// === Generic
// X type variable
function logData<T>(data: T): T {
  return data;
}
console.log(logData("hello"));
console.log(logData({ name: "John" }));
console.log(logData(333));

//@
// === Interface = declare structure

interface Face {
  name: string;
  age: number;
  fn: () => {};
}

// interface != type

console.log(logData(333));

// ===

//@ts-check
//@ ts-expect-error
//@ ts-ignore
//@ ts-nocheck
//@ts-check

function getTyple<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}
console.log(getTyple(33, 11));
console.log(getTyple("string", 11));
console.log(getTyple("hellow", " typescript"));
