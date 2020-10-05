/**
 * Objects in JS
 * 
 * Objects are the representation of the real world entity, represented in JS. It has various methods and 
 * properties linked together as one single entity and we call it as an object.
 * 
 * There are 4 ways to initialize an object in JS:
 * 1. Literal Notation
 * 2. New Object
 * 3. Object.create(prototype)
 * 4. Constructor function
 */

 //1. Literal Notation of objects
const user = {
    name:'Ashutosh',
    age:23,
    hobbies:['reading','smoking','dancing','playing'],
    description:{
        height:70,
        weight:70,
        sex:'male',
        gfs:1
    },
    greet(){
        console.log('hey there, its me ',this.name);
    }
}

//The above representation is the literal notation of Object. We have encapsulated the methods and properties
console.log(user);
user.greet();
// We can also change the properties of user from outside.
user.age=22;
console.log(user);
console.log(user.description);
if(user.description.height>68)
    console.log('uff he is so tall!!');
// To use the objects properties, we can either use (.)dot notation or Object['propertyName']
var text='';
let input=document.querySelector('input');
input.addEventListener('keyup',()=>{
    text=input.value;
})

const button = document.querySelector('button');
button.addEventListener('click',()=>{
    //console.log(text);
    console.log(user[text]); // used []notation to access the user's data.
})
