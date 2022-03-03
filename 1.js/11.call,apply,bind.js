/**
 *
 */
/*
function getName() {
    console.log(this.name);
}

let obj = {
    name: "zhufeng",
};
*/
// obj.getName = getName;
// obj.getName();
// delete obj.getName;

// call: 以obj作为调用方，或者说执行主体，调用getName方法
// 手写call，apply，bind
let obj = {
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
