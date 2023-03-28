let ans = document.getElementById("inputText");

let calculate= (num) => {
    ans.value = ans.value + num;
}

let result=()=>{
    try{
        
        // eval() is a function property of the global object. The argument of the eval() function is a string. It will evaluate 
        // the source string as a script body, which means both statements and expressions are allowed. It returns the 
        // completion value of the code.
        ans.value = eval(ans.value);
    }
    catch(err){
        alert("Enter the valid input!!!")
    }
}

// function for all clear
function allClear(){
    ans.value = "";
}

// function for delete
function del(){
    // slice(0, -1) -> -1 means it remove last 1 digit & if I will put -2 then it will remove last 2 digits
    ans.value = ans.value.slice(0, -1);
}