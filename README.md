<!--
堆：先进先出
栈：先进后出

变量类型
    六种基本数据类型 Boolean Null Undefined Number String Symbol
    一种引用类型 object {} [] /^$/ new Date() Math

执行上下文
    创建阶段
        创建变量对象（VO）
        确定作用域链
        确定this指向
    执行阶段
        变量赋值
        函数赋值
        函数执行
            函数执行时，会创建一个执行环境（执行上下文），上下文中有一个属性叫变量对象（VO），基本数据类型的值存储在变量对象中，引用数据类型的值存储在堆中，并赋予变量对象该值在堆中的地址
            修改变量时，基本数据类型的值直接重新赋值，引用数据类型通过修改指针指向新的地址
    注：编译
        1.处理参数，把参数放入VO
        2.扫描所有代码，找出function声明，从上往下依次执行 在编译阶段，会处理所有函数声明，如果有重复的声明，后面会覆盖前面的声明
        3.扫描var关键字 var不是赋值，只声明，值是undefined
        4.在编译阶段不会处理let变量，let的变量不会放到VO里
    执行上下文多了之后以栈的形式排列，称为执行上下文栈

执行上下文栈（调用栈）
    遵循先进后出
    栈底永远是全局上下文，栈顶为当前正在执行的上下文

激活对象（AO，Activation Object）
当one开始的时候，因为oneEC处于执行栈的顶端，这个时候，oneVo就会成为AO,新增this指针
Activation Object oneVo.this = window
local == AO

作用域
闭包有两部分组成，一个是当前的执行上下文A，一个是在该执行上下文中创建的函数B（内部函数引用了外部函数变量）
当B执行的时候引用了当前执行上下文A中的变量就会产出闭包
当一个值失去引用的时候就会会标记，被垃圾收集回收机回收并释放空间
闭包的本质就是在函数外部保持内部变量的引用，从而阻止垃圾回收
调用栈的并不会影响作用域链,函数调用栈是在执行时才确定，而作用域规则是在代码编译阶段就已经确定了（作用域链是在函数创建的时候确定的，函数的调用栈是在函数执行的时候确定的）
MDN定义:闭包是指这样的作用域foo,它包含了一个函数fn，这个函数fn1可以调用被这个作用域所封闭的变量a、函数等内容

垃圾回收机制
当从全局变量出发，无法引用到一个变量的时候，会被回收

var和let
window不能访问let定义的变量？
es6最新规定，let定义在AO，不在GO

this
this是什么？
this代表谁来调用，或者说当前执行这个逻辑的主体是谁，当前函数的执行主体是谁
 * 函数只是一个处理逻辑
 * 如何确定this的主体，核心就一条，.前面那个对象
 * 如果没有人来调，直接执行，没有明确主体，如果是非严格模式，主体是windows，如果是严格模式就是null或者undefined
如果事件绑定的时候，this就是绑定的元素

call
call: 以obj作为调用方，或者说执行主体，调用getName方法
手写call，apply，bind

{let obj = {
    name: "zhufeng",
    age: 13,
};
!(function (protype) {
    function getDefaultContext(context) {
        context = context || window;
        let type = typeof context;
        if (["number", "string", "boolean".includes(type)]) {
            context = new context.constructor(context);
            return context;
        }
    }

    function call2(context, ...args) {
        context = getDefaultContext(context);
        let symbal = Symbol("fn");
        context.symbal = this;
        context.symbal(...args);
        delete context.symbal;
    }

    // 手写apply
    function apply2(context, args) {
        context = getDefaultContext(context);
        let symbal = Symbol("fn");
        context.symbal = this;
        context.symbal(...args);
        delete context.symbal;
    }

    // 手写bind
    function bind2(context, ...outerArgs) {
        return (...args) => this.call(context, ...outerArgs, ...args);
    }

    protype.call2 = call2;
    protype.apply2 = apply2;
    protype.bind2 = bind2;
})(Function.prototype);

function getName(age, home) {
    console.log(this.name, age, home);
}

getName.call2(obj, 10, "beijing");
getName.apply2(obj, [10, "beijing"]);
let bindGetName = getName.bind2(obj, 10);
bindGetName("zhufeng");
}

面向对象
1.js数据类型分为二种：
基本类型 string boolean null undefined symbol number
引用类型 都是对象： 数组[] 对象{} /^$/ Date Math Function是一种特殊的对象
2.对象和基本数据类型的本质区别是什么？
基本类型只是一个值
对象类型是若干个类型的集合，一切引用类型都是对象
函数和数组也是对象
3.函数为什么特殊，和其他对象的本质区别是什么？
function本质上来说是可以生产别的对象的，它是一个对象的工厂，所有的对象，包括函数本身都是生产出来的
4.为什么函数会出现？他能解决什么问题？
为了加快生产对象的速度，就有了函数，函数可以用来批量的生产对象
对象的属性分为两种，有些属性是特有的，有些属性是共有的
为了节约内存和性能，
把批量创建的对象（构造函数实例）共有的属性放到构造函数的原型上
.运算符，先找实例的属性，如果找到了返回使用；如果找不到，就查找实例的prototype属性，如果有，直接返回
实例有__proto__,没有prototype,构造函数有prototype
特殊性：
1.Function.prototype === Function.__proto__
2.Object.prototype.__proto__ === null
3.函数的祖宗就是Function
4.Object对象的祖宗是null

为什么要有原型链
为了实现属性和方法的共享
为什么要有函数
函数的核心作用是批量创建对象
-->
<!--继承
 -->