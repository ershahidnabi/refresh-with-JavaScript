let val1 = 10;
let val2 = 5;
function addNum(num1, num2) {
    let total = num1 + num2;
    return total;
}
let result1 = addNum(val1, val2);
let result2 = addNum(10, 2);

/*
Javascript Execution Context

1. Global Execution Context 
    - alocated inside 'this'

2. Function Execution Context

3. Eval Execution Context

1- Memory Creation Phase    or  Creation Phase
// to alot memory
    - val1 -> undefined
    - val2 -> undefined
    - addNum -> defination
    - result1 -> undefined
    - result2 -> undefined

2- Execution Phase
// to execute
    - val1 <- 10
    - val2 <- 5
    - addNum -> [
        new variable env
                +
        execution phase
    ]           ------------>>
            Memory Phase
            val1 -> undefined
            val2 -> undefined
            total -> undefined
                ----------------->>
                Execution Context
                num1 -> 10
                num2 -> 5
                total -> 15
                    //  total -- return -->global execution


*/
/*

CALL STACK


*/
