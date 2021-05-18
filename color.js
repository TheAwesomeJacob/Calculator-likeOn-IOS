
document.querySelector('.action').addEventListener('input', (event) =>{
    document.querySelectorAll('.button-calc').forEach(p => {
        p.style.color = event.target.value;
    })
})

document.querySelector('.number').addEventListener('input', (event) =>{
    document.querySelectorAll('.button-calc:last-child').forEach(p => {
        p.style.backgroundColor = event.target.value;
    })
})

document.querySelector('.color-screen').addEventListener('input', (event) =>{
    document.querySelector('.screen').style.backgroundColor = event.target.value;
    })