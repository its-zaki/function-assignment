// Question no 2

function fullName (fname , lname){
    console.log( "Welcome Mr" +" "+ fname + lname)
    
    
}
fullName ( prompt("Enter your First Name ") , prompt("Enter your Second Name"))

// Question no 3

function AddTwoNumber(num1 , num2){
    if(typeof(num1) == "number" && typeof(num2) == "number") {
        let sum = num1 + num2;
        console.log(sum);
    }
    else{
        console.log("bhaijan number dalo input ma");
    }

}
AddTwoNumber ( +prompt("Enter First Number") , +prompt("Enter Second Number")  );

// Question no 5

function NumberSquare(number){
    if(typeof(number)=="number"){
        let square = number * number ;
        return square
        
    }
    
}

const result = NumberSquare(+prompt("Enter Your Number"));
console.log(result);

// Question no 4

function TwoNumberOperation (num1 , num2 ,operator){
    if(typeof(num1)=="number" && typeof(num2)=="number" && operator =="+" ){
        let sum = num1 + num2 ;
        return sum 
    }
    else if(typeof(num1)=="number" && typeof(num2)=="number" && operator =="-" ){
        let sub = num1 - num2 ;
        return sub
    }
    else if(typeof(num1)=="number" && typeof(num2)=="number" && operator =="*" ){
        let multi = num1 * num2 ;
        return multi 
    }
    else if(typeof(num1)=="number" && typeof(num2)=="number" && operator =="/" ){
        let division = num1 / num2 ;
        return division 
    }
    else {
        return ("bhaijan input sahi dalo");
    }
    
}

const output = TwoNumberOperation(+prompt("Enter Your Number") , +prompt("Enter Your Number") , prompt("Enter Your Operator") );
console.log(output);
