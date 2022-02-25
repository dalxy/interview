/**
 * 
 */
/*
function one(m, n){
    //let VO = { m : 1, b : 2, fn : () :> 2, a : undefined, b : undefined, }
    //let oneEC = { oneVO, this: window, scopeChain:[oneVO, globalEC.VO] }
    console.log(m,n)
    var a = 0
    function fn(){
        return 1
    }
    function fn(){
        return 1
    }
    var b = 1
}
one(1, 2)


var a = 1;
function fn(m) { console.log('fn'); }
function fn(m) { console.log('new_fn'); }
function a() { console.log('fn_a'); }
console.log(a); //1
fn(1); //new_fn
var fn = 'var_fn';
console.log(fn); //var_fn*/
function one(m){
    var a = 1
    function two(){
        console.log(a, 'two')
    }
    two()
}
one(1)


// 第一阶段
let globalVo = {
    one: 'fn one'
}
let globalEC = {
    VO: globalVo,
    this: window,
    scopeChain: [globalVo]
}

// 上下文栈
let ECStack = []
ECStack.push(globalEC)

// 第二阶段
let oneVo = {
    two: 'fn two'
}
let oneEC = {
    VO: oneVo,
    this: window,
    scopeChain: [oneVo, globalVo]
}
ECStack.push(oneEC)
// 当one开始的时候，因为oneEC处于执行栈的顶端，这个时候，oneVo就会成为AO,新增this指针
// Activation Object oneVo.this = window

let twoVo = {
    
}
let twoEC = {
    VO: twoVo,
    this: window,
    scopeChain: [twoVo, oneVo, globalVo]
}
ECStack.push(twoEC)
// VO=>AO oneVo.this=window
ECStack.pop(twoEC)
ECStack.pop(oneEC)