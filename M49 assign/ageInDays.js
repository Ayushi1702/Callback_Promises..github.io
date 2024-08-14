const person ={
    firstname: " pippa",
    lastName: "oppo",
    age:22,
};
function ageInDays(personObject,callback){
    const fullname = `${personObject.firstname} ${personObject.lastName}`;
    const ageInDays = personObject.age*365;
    callback(fullname, ageInDays);
}
 function logResult(fullname, ageInDays){
    console.log(`the person's fullname is ${fullname} and their age in days is ${ageInDays}`);
    }
    
ageInDays(person,logResult);