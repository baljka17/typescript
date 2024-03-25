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

//@ ts-check
//@ ts-expect-error
//@ ts-ignore
//@ ts-nocheck

function getTyple<T, U>(a: T, b: U): [T, U] {
  return [a, b];
}
console.log(getTyple(33, 11));
console.log(getTyple("string", 11));
console.log(getTyple("hellow", " typescript"));

// === infer

type a = ReturnType<(a: number) => never>;
type b = ReturnType<(a: number) => never>;
type c = ReturnType<(a: number) => never>;

// type d = ReturnType<T extends (...args: any) => any> = T extends (
//   ...args: any
// ) => infer R
//   ? R
//   : any
// >;

// === mapped type

// PICK
interface Doc {
  id: number;
  data: string | number[];
  size: string | number;
  readonly name: string;
  location: URL;
  owner: string;
  date: number;
  version: number;
}

type MyPick<T, U extends keyof T> = {
  [K in U]: T[K];
};

type MyPickerType = MyPick<Doc, "data" | "location">;
// let a: MyPickerType = {data:"hello", owner: 'asdfadf'}
type ROType = Readonly<Doc>;

type MyReadonly<T> = {
  readonly [S in keyof T]: T[S];
};

type MyRonly = MyReadonly<Doc>;

// +, - ? / Modify

type MyRO1<T> = {
  -readonly [S in keyof T]+?: T[S];
};

type AA = MyRO1<Doc>;

// ===
type FeatureFlags = {
  darkMode: () => void;
  newUserProfile: () => void;
};

type OptionFlags = {
  darkMode: boolean;
  newUserProfile: boolean;
}; // Destination to implement

type NewOptionFlags<T> = {
  [K in keyof T]: boolean;
};

type BB = NewOptionFlags<FeatureFlags>;

// === intersection

type MyReadonlyIntersection<T> = {
  [K in keyof T]+?: T[K];
} & { id: number; name: string; abcd: string }; // no question mark, add custom property

type CC = MyReadonlyIntersection<Doc>;

let doc1: CC = {
  id: 312,
  name: "John Doe",
  abcd: "Alphabet",
};

// === AS

type MyGetter<T> = {
  // [K in keyof T as `hello`]: T[K];
  // [K in keyof T as `get${string & K}`]: T[K];
  // [K in keyof T as `get${Capitalize<string & K>}`]: T[K];
  [K in keyof T as `get${Capitalize<string & K>}`]: () => T[K];
};

type as1 = MyGetter<Doc>;

// === Exclude Property

type ExcludeProperty<T> = {
  // [K in keyof T]: T[K];
  // [K in keyof T as never]: T[K];
  // [K in keyof T as Delete<K, "owner" | "date" | "size">]: T[K];
  [K in keyof T as Exclude<K, "owner" | "date" | "size" | "location">]: T[K];
};

type DD = ExcludeProperty<Doc>;

type Delete<T, U> = T extends U ? never : T;

// Delete<"owner", "owner" | "date">;

type D2 = Delete<"a", "c" | "a" | "b">;

// === mapping example 1

type SquareEvent = { kind: "square"; x: number; y: number };
type CircleEvent = { kind: "circle"; radius: number };

type GenerateEventListener<Events extends { kind: string }> = {
  [E in Events as `on${Capitalize<E["kind"]>}Event`]: (event: E) => void;
};

type EventListeners = GenerateEventListener<SquareEvent | CircleEvent>;

// === mapping example 2

type DBFields = {
  id: { format: "increment" };
  name: { type: string; length: number };
  password: { type: string; length: number; secret: true };
  creditcard: { number: string; expire: string; secret: true };
};

type PublicFields<T> = {
  [K in keyof T]: T[K] extends { secret: true } ? true : false;
};

type SecretKeys = PublicFields<DBFields>;

// === template type/ template literal type

type World = "world";

let www: World = "world"; // world2222 ?!?!?!

type Greeting = `hello ${World}`;

let greet: Greeting = "hello world";
// let greet: Greeting = "hello world1111"; // Error!!

type Width = `${number}px`;

const squareWidth: Width = "100px";
// const squareWidth: Width = "100"; // !!!

type Metric = "px" | "rem" | "em"; // union
type FontSize = `${number}${Metric}`;

let heading1Size: FontSize = "2rem";
// let heading1Size: FontSize = "2"; // !!
// let heading1Size: FontSize = "2pt"; // !!

// module

// declaration files *.d.ts

// let history = 11;

myLib.hello("greeting from another file!");

// === Decorator

function Component(selector: string, template: string) {
  // console.log(cnFunction);
  return function (cnFunction: any) {
    const element = document.getElementById(selector);
    element!.innerHTML = template;
  };
}

@Component("myapp", "<h1>It is done!</h1>")
// @Component
class Person {
  public name: string;
  constructor(name: string) {
    this.name = name;
  }
  getName() {
    console.log(this.name);
  }
}

// Example of a class decorator
function classDecorator<T extends { new (...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = "new property";
    hello = "override";
  };
}

@classDecorator
class ExampleClass {
  property = "property";
}
//@ts-nocheck
const example = new ExampleClass();
console.log(example.property); // "property"
// console.log(example.newProperty); // "new property"
// console.log(example.hello); // "override"
