// 字面量创建对象，是一个语法糖，内部调用的是new Object
// Object是一个函数,也是一个实例，用来创建普通对象，有__proto__
let obj = { name: "dy" };
let obj1 = new Object();
console.dir(obj1);
// Object哪来的？
// Object也是一个函数，函数也是一个对象，肯定也是new出来的
// Object是函数类的一个实例
/* 实现原理
function add(a, b) {
    return a + b;
}
let minus = new Function("a", "b", "return a-b");
console.log(add(1, 2));
console.log(minus(2, 1));
*/
