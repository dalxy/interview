/**
 * 作用域链
 */
function one(){
    var a = 1;
    function two(){
        console.log(a)
    }
    return two
}

var a = 2
var outer_two = one()
outer_two()

var twoEcecuteContextVo = {
    one: '()=>{}',
    a: undefined,
    outer_two: undefined
}
var globalExecutionContext = {
    VO: globalExecutionContextVo,
    scopeChain: [twoEcecuteContextVo]
}
globalExecutionContext.VO.a = 2
globalExecutionContext.VO.outer_two = one()
var oneEcecuteContextVo = {
    two: '()=>{}',
    a: undefined
}
var oneExecutionContext = {
    VO: oneEcecuteContextVo,
    scopeChain: [oneEcecuteContextVo, twoEcecuteContextVo]
}
oneExecutionContext.oneEcecuteContextVo.a = 1
globalExecutionContext.VO.outer_two = 'two'
var twoEcecuteContextVo = {
    
}
var twoExecutionContext = {
    VO: twoEcecuteContextVo,
    scopeChain: [twoEcecuteContextVo, oneEcecuteContextVo, twoEcecuteContextVo]
}
