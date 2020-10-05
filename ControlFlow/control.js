var animal= '';
const input = document.querySelector('input');
input.addEventListener('keyup',()=>{
    animal=input.value;
})
const img = document.querySelector('img');
const button = document.querySelector('button');
button.addEventListener('click',()=>{
    if(animal=='cat')
    {
        console.log(animal);
        console.log(img);
        img.attributes.src.value='./cat.jpeg';
    }
    else if(animal=='dog')
    {
        img.attributes.src.value='./dog.jpeg';
    }
    else 
    {
        img.attributes.src.value='./error.jpeg'
    }


});

