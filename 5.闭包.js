function one() {
    var a = 1;
    // var name = "one";
    function two() {
        var b = 2;
        // var name = "two";
        function three() {
            var c = 3;
            // var name = "three";
            return () => console.log(a, b, c);
        }
        return three();
    }
    return two();
}
var fn = one();
// fn();

let globalEC = {
    this: globalThis,
    outer: null,
    variableEnviroment: { one() {}, fn: undefined },
    lexicalEnviroment: [{}],
};

globalEC.variableEnviroment.fn = globalEC.variableEnviroment.one();

let oneEC = {
    this: globalThis,
    outer: globalEC,
    variableEnviroment: { two() {}, a: 1 },
    lexicalEnviroment: [{}],
};
let twoEC = {
    this: globalThis,
    outer: oneEC,
    variableEnviroment: { three() {}, b: 2 },
    lexicalEnviroment: [{}],
};
let threeEC = {
    this: globalThis,
    outer: twoEC,
    variableEnviroment: { c: 3 },
    lexicalEnviroment: [{}],
};

fnEc = {
    outer: globalEC,
    closures: [{ b: 2 }, { a: 1 }],
    variableEnviroment: { c: 3 },
};

function getValue(name, ec) {
    for (let i = ec.closures.length - 1; i >= 0; i--) {
        if (name in ec.closures[i]) {
            return ec.closures[i][name];
        }
    }
    if (ec.outer) {
        return getValue(name, ec.outer);
    }
    return null;
}
console.log(getValue("a", fnEc), getValue("b", fnEc), getValue("c", fnEc));
