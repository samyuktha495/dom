function b(){
let k=document.getElementById("p");
let a=document.getElementById("btn");

k.style.backgroundColor="red"
k.style.fontSize="80px"
k.style.borderRadius="50px"
k.style.display="inline"
console.log(k)
}

//TASK 2

function c(){
    let images=document.getElementById("div")
    let button=document.getElementById("button2")
    button.style.width="100px"
    


    images.innerHTML=`<img id="i1"src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-169994-674010.jpg&fm=jpg"width="300px"height="200px"/>
    <img id="i2" src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_640.jpg"width="300px"height="200px"/>
    <img id="i3" src="https://th.bing.com/th/id/OIG1.wQ7nqzXG6LLji1s3MrOP"width="300px"height="200px"/>`

    let image1=document.getElementById("i1")
    image1.style.borderRadius="30px"
    let image2=document.getElementById("i2")
    image2.style.borderRadius="100px"
    let image3=document.getElementById("i3")
    image3.style.borderRadius="50%"
    
}
