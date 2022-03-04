function fn() {
    var a = 1;
    let b = 2;
    {
        //第一个代码块
        let b = 3;
        var c = 4;
        let d = 5;
        // console.log(a, b, c, d); //TODO
    }
    {
        //第二个代码块
        let b = 6;
        let d = 7;
        // console.log(a, b, c, d);
    }
}
fn();
/**1.全局下编译
 * es5创建VO，激活后成为AO
 * es6 VariableEnviroment 变量环境 var function + lexicalEnviroment
 *
 */
let globalEC = {
    // this: globalThis, //windows
    outer: null, //外部执行上下文环境 相当于es3中的scopeChain
    variableEnviroment: { fn() {} },
    lexicalEnviroment: [{}],
};
/* 静态作用域

let fnEC = {
    this: globalThis,
    outer: globalEC.VariableEnviroment,
};*/
// 编译fn
let fnEC = {
    this: globalThis,
    outer: globalEC.variableEnviroment,
    variableEnviroment: { a: undefined, c: undefined },
    lexicalEnviroment: [{ b: undefined }],
};
// 执行fn，进入第一个代码块的时候
fnEC.variableEnviroment.a = 1;
fnEC.lexicalEnviroment[0].b = 2;
// 函数执行时，遇到新的代码块，就会创建一个新的词法环境对象
fnEC.lexicalEnviroment.push({ b: undefined, d: undefined });
fnEC.lexicalEnviroment[1].b = 3;
fnEC.variableEnviroment.c = 4;
fnEC.lexicalEnviroment[1].d = 5;

// fnEC.lexicalEnviroment.push({ b: undefined, d: undefined });
// fnEC.lexicalEnviroment[2].b = 6;
// fnEC.lexicalEnviroment[2].d = 7;

function getValue(name, ec) {
    for (let i = ec.lexicalEnviroment.length - 1; i >= 0; i--) {
        if (name in ec.lexicalEnviroment[i]) {
            return ec.lexicalEnviroment[i][name];
        }
    }
    if (name in ec.variableEnviroment) {
        return ec.variableEnviroment[name];
    }
    if (ec.outer) {
        return getValue(name, ec.outer);
    }
    return null;
}
console.log(
    getValue("a", fnEC),
    getValue("b", fnEC),
    getValue("c", fnEC),
    getValue("d", fnEC)
);

fnEC.lexicalEnviroment.pop();
fnEC.lexicalEnviroment.push({ b: undefined, d: undefined });
fnEC.lexicalEnviroment[1].b = 6;
fnEC.lexicalEnviroment[1].d = 7;
