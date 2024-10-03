// oru button click aakiya ath display aaakn
const appendToDisplay=(content)=>{
 output.value+=content   
}
// to work the = button
showresult=()=>{
    // here eval is used to give the result it is already defined bt the input should be in the form of string
    // here try catch is used to handle runtime error
    try {
        output.value=eval(output.value)

    } catch {
        output.value=""
        output.placeholder="invalid expression!!!"
    }
}

// to work c
clearall=()=>{
    output.value=""
    output.placeholder="0"

}

// to work backspace
remove=()=>{
    // here slice is used to to remove the specific part here -1 is used to remove the last number
    output.value=output.value.slice(0,-1)
  
}
