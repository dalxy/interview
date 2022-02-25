function one(){
    var a = 1
    function two(){
        var b = 2
        function three(){
            var c = 3
            debugger
            console.log(a,b,c)
        }
        three()
    }
    two()
}
one()
// 全局上下文
var executeContextStack = []
var globalExecuteContext = {
    VO: {one: '()=>{'}
}
executeContextStack = [globalExecuteContext]
var oneEcecuteContext = {
    VO: { a: 1, two: '()=>{}'}
}
executeContextStack = [oneEcecuteContext,globalExecuteContext]

var twoEcecuteContext = {
    VO: { b: 2, three: '()=>{}'}
}
executeContextStack = [twoEcecuteContext,oneEcecuteContext,globalExecuteContext]

var threeEcecuteContext = {
    VO: { c: 3 }
}
executeContextStack = [threeEcecuteContext,twoEcecuteContext,oneEcecuteContext,globalExecuteContext]

// 变量的值是如何查找的
function getVariableValue(varName){
    for(let i = 0; i < executeContextStack.length; i++){
        if(varName in executeContextStack[i]){
            return executeContextStack[varName].VO[varName]
        }
    }
}