//Initializing the code setup

/*There are two problems with Synchronous JS. First is that it is single threaded and hence we have to follow a 
particular order of execution and this can cause trouble in our code performance. Hence we came up with something
called Asynchronous JS. 

It has 3 things:
1. Callbacks
2. promises
3. Async/await
*/


//Example of Synchronous code
console.log('Before..');
var text=0;
for(var i=0;i<100000000;i++)
{
    text=i;    
    
}
var anotherText=text;
for(text;text>=0;text--)
{
    anotherText=text;
    
}
var text=0;
for(var i=0;i<100000000;i++)
{
    text=i;    
    
}
var anotherText=text;
for(text;text>=0;text--)
{
    anotherText=text;
    
}
var text=0;
for(var i=0;i<100000000;i++)
{
    text=i;    
    
}
var anotherText=text;
for(text;text>=0;text--)
{
    anotherText=text;
    
}
text=0;
for(var i=0;i<100000000;i++)
{
    text=i;    
    
}
anotherText=text;
for(text;text>=0;text--)
{
    anotherText=text;
    
}
text=0;
for(var i=0;i<100000000;i++)
{
    text=i;    
    
}
anotherText=text;
for(text;text>=0;text--)
{
    anotherText=text;
    
}
console.log('after');

const para= document.querySelector('p');

para.innerText='Too lengthy tasksss!!';

//As we can see in this code, that it takes full time for execution of that lenghty code and then 
//proceeds to next. Hence this is not useful much. 