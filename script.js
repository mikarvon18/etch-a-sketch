const container = document.querySelector("#container");
const btn = document.querySelector ("#btn");
btn.addEventListener("click", btnClick);

function changeColor(e) {
    //e.target.style.backgroundColor = "orange";
    if (e.target.classList.length === 1){
        e.target.classList.add('orange')
    } else if (e.target.classList.length === 2){
        e.target.classList.add('green')
    } else if (e.target.classList.length === 3) {
        e.target.classList.add('blue');
    } else if (e.target.classList.length === 4) {
        e.target.classList.add('red');
    }
    
}
function btnClick(){
    console.log("Button clicked")
    let newValue = prompt("How many numbers per side?", "16")
    main(parseInt(newValue))
}
function main(num){
    if (num > 100) {
        num = 100
    }
    container.innerHTML = '';
    size = (960 / num) - 2
    console.log(size)
    let div
    for (let i = 0; i < num; i++) {
        for (let j = 0; j < num; j++) {
            div = document.createElement('div');
            div.classList.add('hoverbox');
            div.style.height = size + "px"
            div.style.width = size + "px"
            container.appendChild(div)
            div.addEventListener('mouseenter', function (e) {
                changeColor(e);
            });
        }
    }
}
main(16)