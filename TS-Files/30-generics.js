// console.log("All About the Generics in Ts");
// let names: Array<string> = [];
// let promise: Promise<string> = new Promise((resolve, reject) => {
//       setTimeout(() => {
//             resolve('sesolving is done ');
//       }, 4000)
// })
// promise.then((data) => {
//       data.split('');
//       console.log(data);
// })
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
// // creating a generics functions
// function identity<T>(arg: T): T {
//       return arg;
// }
// const output1 = identity<string>("hello"); // returns "hello"
// const output2 = identity<number>(123); // returns 123
// console.log(output1, output2);
// // function
// function identity1<T>(arg: T): T {
//       return arg;
// }
// const output11 = identity({ ali: 'hassan', name: 'husnain' }); // returns "hello"
// const output22 = identity('My name is ali hassan'); // returns 123
// console.log(output11, output22);
// console.log(output11.name);
// // function
// function identity12<T>(arg: T, l: T) {
//       return Object.assign(arg, l);
// }
// const output111 = identity12({ ali: 'hassan', name: 'husnain' }, { ahsan: "M Ahsan" }); // returns "hello"
// // const output221 = identity12({ahsan:"M Ahsan"}); // returns 123
// console.log(output111);
// console.log(output111);
// //
// // finction
// function merge<T, U>(obj1: T, obj2: U): T & U {
//       return { ...obj1, ...obj2 };
// }
// const merged = merge({ name: "John", roll: 45 }, { age: 30 });
// console.log(merged);
// console.log(merged.roll);
function extraFromObject(obj, key) {
    return obj[key];
}
var l = extraFromObject({ name: 'Ali Hassan', age: 23, roll: 5063 }, 'name');
console.log(l);
// generics for clas{s
var Storage1 = /** @class */ (function () {
    function Storage1() {
        this.data = [];
    }
    Storage1.prototype.addItem = function (item) {
        this.data.push(item);
    };
    Storage1.prototype.remove = function (item) {
        this.data.splice(this.data.indexOf(item), 1);
    };
    Storage1.prototype.getItems = function () {
        return __spreadArray([], this.data, true);
    };
    return Storage1;
}());
var obg = new Storage1();
obg.addItem('Ali Hassan');
obg.addItem('Ali Hassan1');
obg.addItem('Ali Hassan2');
obg.addItem(23);
obg.addItem('Ali Hassan4');
obg.remove(50);
console.log(obg.getItems());
// we can also specific type
var obg1 = new Storage1();
// obg1.addItem('Ali Hassan'); error
obg1.addItem(23);
obg1.addItem(45);
obg1.addItem(233);
obg1.addItem(45);
obg1.remove(45);
console.log(obg1.getItems());
// object type 
var obg2 = new Storage1();
obg2.addItem({ name: 'Ali hassan', age: 'Hashim' });
obg2.addItem({ cast: 'Zazai ', fest: 'Allam Mohammad iqbal' });
obg2.addItem({ sun: 'Moons', loop: 'Sardar' });
console.log(obg2.getItems());
// generics utility types 
console.log("These are the built in for generics in typ script");
function addCourse(title, desc, dat) {
    var data = {};
    data.title = title;
    data.desc = desc;
    data.dat = dat;
    return data;
}
var names = ['Ali', 'Asim', 'Babar'];
