// console.log(typeof 1);
// console.log(typeof 1);

// let a = 1;
// let b = new a.constructor(a);
// console.log(b);
// console.log(typeof b);

function demo(x, ...args) {
    console.log(...args);
    // let a = "xx";
    x.getName = getName;
    x.getName(...args);
}
let obj = {};
demo(obj, 2, 3);

function getName(age, home) {
    console.log(this.name, age, home);
}

// function call2(context, ...args) {
//     context = getDefaultContext(context);
//     let symbal = Symbol("fn");
//     context.symbal = this;
//     context.symbal(...args);
//     delete context.symbal;
// }
