function manipulateString(inpString,callback){
    const manipulateString = inpString.toUpperCase();
    callback(manipulateString);
}
function logString(manipulateString){
    console.log(`The manipulated string is : ${manipulateString} `);
}
manipulateString("LEARNING the concepts of  CALLBACK", logString)

//console.log(manipulateString)