const button1 = document.getElementById(`one`);

button1.onclick = function() {

    alert("You clicked the first button! Congrats!")
};

const h3 =document.querySelector("h3");


h3.addEventListener(`mouseover`,() => {

alert(`You hovered over the second elememt! Congrats!`)
});





const form = document.querySelector(`form`);

form.addEventListener(`submit`,() => {
    const entry = form.elements.value[0]; alert(`${entry}`);

})



const darkMode = document.getElementById(`dm`);


darkMode.addEventListener(`click`, () => {
    body.classlist.toggle("dark-mode");
body.addEventListener(`click`, () => {});
body.classlist.toggle(`dark-mode`)

});



const times = document.getElementById(`times`);


//5b
let click = 0;
times.onclick = () =>{
    click++;
    if (click ===2){
        alert(`You clicked the last button! Congrats!`)
    } else if (click ===3){
        alert(`Oh no! This button is NOT going to work anymore`)
        num++;
    }else{
        times.disabled = true;
    }
}

