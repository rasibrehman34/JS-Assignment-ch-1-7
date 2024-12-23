// alert name 
function alertName() {
    let message = "this is alert message"
    alert(message)
    document.getElementById("statement").innerHTML = message;
}

// alert number 
function alertNum() {
    let number = 20;
    alert(number)
    document.getElementById("output").innerHTML = number;
}

// variable nanme 
function VarName() {
    let number = 30;
    let showName =  "Variable is: number"
    document.getElementById("statement").innerHTML = showName;
    let value = number;
    document.getElementById("output").innerHTML = number;

}

// camelCase
function camelCase() {
    let case1 = ["variableName","variableNumber","alertPrint"]
    console.log(case1)
    document.getElementById("statement").innerHTML = case1;
}


// Subtract 2 Numbers 
function sub() {
    let a = 10;
    let b = 20;
    let c = a - b;
    console.log(c)
    document.getElementById("statement").innerHTML = " a = 10, b = 20";
    document.getElementById("output").innerHTML = c;

}

// Multiply 2 Numbers
function mult() {
    let a = 10;
    let b = 20;
    let multiply = a * b;
    console.log(multiply)
    document.getElementById("statement").innerHTML = " a = 10, b = 20";
    document.getElementById("output").innerHTML = multiply;

}

// Divide 2 Numbers
function divide(){ 
    let a = 10;
    let b = 20;
    let Divide = a / b;
    console.log(Divide)
    document.getElementById("statement").innerHTML = "a = 10, b = 20 ";
    document.getElementById("output").innerHTML = Divide;

}

// Calculate some Numbers
function cal() {
    let a = 40;
    let b = 20;
    let c = 5;
    let d  = 10
    let calculation = [c*(a + b)/d];
    console.log(calculation)
    document.getElementById("statement").innerHTML = "a = 40, b = 20, c = 5, d = 10 [c*(a + b)/d]" ;
    document.getElementById("output").innerHTML = calculation;


    
}



// function for clear the statement boxes
function clearStatement() {
    document.getElementById("statement").innerHTML = " ";
    
}
// function for clear the output boxes
function clearResult() {
    document.getElementById("output").innerHTML = " ";
    
}
   

   
