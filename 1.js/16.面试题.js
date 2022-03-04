/*
async function async1() {
    console.log("async1 start");
    await async2();
    console.log("async1 end");
}
async function async2() {
    console.log("async2");
}
console.log("script start");
setTimeout(function () {
    console.log("setTimeout");
});
async1();
new Promise(function (resolve) {
    console.log("promise1");
    resolve();
}).then(function () {
    console.log("promise2");
});
console.log("script end");
*/

let funs = [];
for (var i = 0; i < 6; i++) {
    funs.push(function () {
        console.log(i);
    });
}
debugger;
funs[0]();

let funs = [];
for (let i = 0; i < 6; i++) {
    funs.push(function () {
        console.log(i);
    });
}
debugger;
funs[0]();
