let result = "";
function append(num){
    const view = document.getElementById("view");
    if (view.innerHTML === "0"){
        view.innerHTML = num;
    }
    else if (view.innerHTML.length >= 9){
        return;
    }
    else{
        view.innerHTML = view.innerHTML+num;
    }
    console.log(view.innerHTML);
    console.log(view.innerHTML.length)
}
function operation(op){
    const view = document.getElementById("view");
    if (op === "+" || op === "-" || op === "*" || op === "/"){
        result+=view.innerHTML;
        result=result+op;
        view.innerHTML = "0";
        console.log(result);
    }
    else if (op === "clear"){
        result = "";
        view.innerHTML = "0";
    }
    else if (op === "negative"){
        if(result.charAt(result.length-1)==="0"){
            return;
        }
        if(view.innerHTML.charAt(0)==="-"){
            view.innerHTML = view.innerHTML.substring(1);
            return;
        }
        for(let i = result.length-1; i <=0; i++){
            if(result.charAt(result.length-1)==="0"){
                break;
            }
            if(result.charAt(i)==="+" || result.charAt(i)==="-" || result.charAt(i)==="*" || result.charAt(i)==="/"){
                result = result.substring(0, i+1) + "-" + result.substring(i+1);
                break;
            }
        }
        view.innerHTML = "-"+view.innerHTML;
    }
    else if (op === "="){
        result+=view.innerHTML;
        result = eval(result); 
        view.innerHTML = result;
        result = "";
    }
    else if(op ==="%"){
        num = parseInt(view.innerHTML);
        num*=0.01;
        view.innerHTML = num.toString();
    }
}
