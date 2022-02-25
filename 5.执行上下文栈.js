/**
 * 执行上下文栈
 * 栈是一个数据，里面放着很多执行上下文
 * 每次函数执行，都会产生一个执行上下文
 * 只有一个全局上下文，可以通过this访问
 * 全局上下文的VO，也被称为GO(Global Object)，全局对象
 * 全局对象上的属性可以在任何地方被访问到
 * 在浏览器端GO就是window
 * 函数中的执行上下文的属性无法直接访问，为了保护函数中的变量
 */