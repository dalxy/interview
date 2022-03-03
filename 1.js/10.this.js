/**
 * this
 * this是什么？
 * this代表谁来调用，或者说当前执行这个逻辑的主体是谁，当前函数的执行主体是谁
 * 函数只是一个处理逻辑
 * 如何确定this的主体，核心就一条，.前面那个对象
 * 如果没有人来调，直接执行，没有明确主体，如果是非严格模式，主体是windows，如果是严格模式就是null或者undefined
 */
/*
let zhangsan = {
    name: 'zhangsan',
    getName(){
        console.log(this.name)
    },
    eat(){
        console.log(this)
    }
}

// zhangsan.getName()
// zhangsan.eat()
*/
/*
'use strict'
function fn(){
    return this
}
console.log(fn())
*/
// 如果事件绑定的时候，this就是绑定的元素
let dom = {
    addEventListener(type, callback) {
        dom["on" + type] = callback;
    },
    trigger(type) {
        dom.onclick();
    },
};
dom.addEventListener("click", function () {
    console.log(this);
});
dom.trigger("click");
