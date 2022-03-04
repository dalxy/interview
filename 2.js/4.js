function two() {
    console.log(a);
}
function one() {
    var a = 2;
    two();
}
var a = 1;
one(); //1

let globalEC = {
    // this: globalThis, //windows
    outer: null, //外部执行上下文环境 相当于es3中的scopeChain
    variableEnviroment: { two() {}, one() {}, a: 1 },
    lexicalEnviroment: [{}],
};
let twoEC = {
    outer: globalEC,
    variableEnviroment: {
        a: 1,
        two() {
            console.log(a);
        },
    },
};
