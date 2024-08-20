const PI = 3.14;

// - What is the difference between ***var*** and ***let***?
var is function scoped while let is block scoped. let can not be redeclared but can be reassigned. Var can be redeclared and reassigned.

// - What is the difference between **var** and ***const***?
var is function scoped while const is block scoped. const can not be redeclared or reassigned. Var can be redeclared and reassigned
// - What is the difference between **let** and **const**?
let can be reassigned but const cannot. 
// - What is hoisting?
var uses hoisting which means the variable declaration code is run first or invoked before the rest of the code runs. when calling an undeclared variable it returns undefined if later invoked with var.