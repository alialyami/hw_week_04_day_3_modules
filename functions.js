/* Howework Week 04 Day 03 */


/*
js
function sayHello(name){
    console.log(`Hi, ${name}!`)
}*/
var sayHello = (name) =>{ console.log(`Hi, ${name}!`)
}



/*
function getOlder(age){
    return age+50
}
*/
var getOlder = (age) => { return age+50 }







//Debug
const multiply = (num1, num2) => {console.log(num1 * num2);} 

const subtractFive = (num) => 
	{
        const diff = 5 - num; 
	console.log(diff);
    }




    const printName = (name) =>{
	console.log(name)

    }

    module.exports = {
        sayHello : sayHello,
        getOlder : getOlder
        }
        