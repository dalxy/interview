// 自定义函数实现闭包，保护变量
function _extends(Child, Father) {
    function Temp() {
        this.constructor = Child;
    }
    Temp.prototype = Father.prototype;
    Child.prototype = new Temp();
}

var Father = (function () {
    function Father(name) {
        this.name = name;
    }
    Father.prototype.getName = function () {
        console.log(this.name);
    };
    (Father.staticFatherName = "FatherName"),
        (Father.taticGetFatherName = function () {
            console.log(Father.staticFatherName);
        });
    return Father;
})();

var Child = (function (_super) {
    _extends(Child, _super);
    //_super = Father
    function Child(name, age) {
        // this其实是指向子类的实例， new Object{}子类的实例
        // 是在调用父类的构造函数，初始化父类的私有属性
        _super.call(this, name);
        // this.name = name;
    }
    Child.prototype.getName = function () {
        console.log(this.name);
    };
    (Child.staticChildName = "ChildName"),
        (Child.taticGetChildName = function () {
            console.log(Child.staticChildName);
        });
    return Child;
})(Father);

let child = new Child("zhufeng", 10);
child.getName();
child.getAge();
Child.staticGetChildName();
Child.staticGetFatherName();

export {};
