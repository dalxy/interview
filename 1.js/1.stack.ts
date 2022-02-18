
/*class Stack{
    private items: number[] = [];
    push(element: number) {
        this.items.push(element);
    }
    pop(): number{
        return this.items.pop();
    }
}

let stack = new Stack();
// console.log(stack.push);
stack.push(1);
stack.push(2);
stack.push(3);
console.log(stack.items);
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.items);
*/

function one(){
    console.log(1)
    function two(){
        console.log(2)
        function three(){
            console.log(3)
        }
        three()
    }
    two()
}

one()