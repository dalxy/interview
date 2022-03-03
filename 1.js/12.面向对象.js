/**
 * 面向对象
 * 1.js数据类型分为二种：
 * 基本类型 string boolean null undefined symbol number
 * 引用类型 都是对象： 数组[] 对象{} /^$/ Date Math Function是一种特殊的对象
 */
function Persion(name, age) {
    (this.name = name), (this.age = age);
}

function _new(clazz, ...args) {
    let obj = {};
    obj.__proto__ = clazz.prototype;
    clazz.call(obj, ...args);
    return obj;
}

let persion = new Persion("dy", 10);
let _persion = _new(Persion, "dy", 10);
console.log(_persion);
// 把批量创建的对象（构造函数实例）共有的属性放到构造函数的原型上
Persion.prototype.eat = () => {
    console.log("eat");
};
_persion.__proto__.eat();
// .运算符，先找实例的属性，如果找到了返回使用；如果找不到，就查找实例的prototype属性，如果有，直接返回
// 实例有__proto__,没有prototype,构造函数有prototype
