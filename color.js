let colorAction = document.querySelector('.action').value;
let colorNumber = document.querySelector('.number').value;
let colorScreen = document.querySelector('.color-screen').value;

console.log(colorAction)
console.log(colorNumber)
console.log(colorScreen)


document.querySelector('.action').addEventListener('change', (event) =>{
    document.querySelectorAll('.button-calc').forEach(p => {
        p.style.color = event.target.value;
    })
    console.log(document.querySelector('.button-calc'));
})
