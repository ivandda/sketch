
let containerDiv = document.querySelector('#containerDiv')
let numberOfDivs = 12
let arr = []

let color = ""
color = 'black'
let manualColorPicker = document.querySelector('#manualColorPicker')
let stringColorPicker = document.querySelector('#stringColorPickerColorPicker')
let submitButton = document.querySelector('#submitStringColorPicker')

function submitColor(){
    function camelize(str) {
        return str.replace(/\W+(.)/g, function(match, chr)
        {
            return chr.toUpperCase();
        });
    }

    let colorX = document.getElementById("stringColorPicker").value;
    colorX = camelize(colorX)
    console.log(colorX)
    color = colorX
}

function submitColorRainbow(){
    console.log('rainbow')
    color = "rainbow"
}

function submitColorPastel(){
    console.log("pastel")
    color = 'pastel'
}

function submitColorBlack(){
    console.log("black")
    color = 'black'
}

function submitColorErase(){
    console.log("erase")
    color = 'white'
}

manualColorPicker.addEventListener('input',()=>{
    let colorManualColorPicker = manualColorPicker.value;
    color = colorManualColorPicker
    console.log(color)
})

// submitButton.addEventListener('submit',(event)=>{
//     event.preventDefault()
//     console.log(1)
//
// })
// stringColorPicker.addEventListener('input',()=>{
//     let colorStringColorPicker = stringColorPicker.value;
//     color = colorStringColorPicker
// })

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function getPastelColor(){
    let hue = Math.floor(Math.random() * 360);
    let pastel = 'hsl(' + hue + ', 100%, 80%)';
    return pastel;
}



for(let i = 0; i < numberOfDivs; i++) {
    let bigDiv = document.createElement('div'); bigDiv.classList.add("bigDiv");
    containerDiv.appendChild(bigDiv);

    for(let i = 0; i < numberOfDivs; i++) {
        let smallDiv = document.createElement('div');
        smallDiv.classList.add("smallDiv");
        bigDiv.appendChild(smallDiv);

        arr.push(smallDiv)
    }
}


for (let i = 0; i < arr.length; i++) {
    arr[i].addEventListener('mouseover', paint)
}

function paint(){
    if(color === 'black') {
        this.style.backgroundColor = 'black'
    }

    if(color === 'rainbow') {
        this.style.backgroundColor = getRandomColor()
    }

    if(color === 'pastel') {
        this.style.backgroundColor = getPastelColor()
    }
    else this.style.backgroundColor = color
}
