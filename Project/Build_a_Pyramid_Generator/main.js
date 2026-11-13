const pyramid = (str,num,check) => {
    let result = '';
    if(check === false){
        for(let i = 0;i<num;i++){
            result += " ".repeat(num - i - 1)
            result += str.repeat(2*i+1)
            result += "\n";
        }
    }
    else{
        for(i = num-1;i>=0;i--){
            result += " ".repeat(num - i - 1)
            result += str.repeat(2*i+1)
            result += "\n";
        }
    }
    return result
}
console.log(pyramid("O",5,false))
console.log(pyramid("O",5,true))