let paintMethod = 'click'
if (confirm("Hover mode?")) {
    paintMethod = "mouseover";
} else {
    paintMethod = 'click';
}

let clickHoverSwitch = document.querySelector('#clickHoverSwitch')
let containerDiv = document.querySelector('#containerDiv')
let smallDivSlider = document.querySelector('#smallDivSlider')
let numberOfDivs = 10
// let paintMethod = 'click'
let borderX = false
let paintBorder = true
let arr = []

// const hoverOption = document.querySelector('#hoverOption');
//
// hoverOption.addEventListener('click',()=>{
//     console.log(hoverOption.checked)
//
//     if(hoverOption.checked === true){
//         paintMethod = 'mouseover'
//         console.log('hover')
//     }
// })

smallDivSlider.addEventListener('click',()=>{
    numberOfDivs = smallDivSlider.value
    console.log((numberOfDivs))
    containerDiv.replaceChildren()
    createDivs()
})


// COLORS-------------------------------------------------------------------------------------

let color = ""
color = 'black'
let manualColorPicker = document.querySelector('#manualColorPicker')
// let stringColorPicker = document.querySelector('#stringColorPickerColorPicker')
// let submitButton = document.querySelector('#submitStringColorPicker')

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

function submitEraseAll(){
    console.log("ERASE ALL");
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.backgroundColor = 'white'
        arr[i].style.boxShadow = '0 0 0 1px lightgrey'
    }

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

// COLORS-------------------------------------------------------------------------------------

function createDivs() {
    for (let i = 0; i < numberOfDivs; i++) {
        let bigDiv = document.createElement('div');
        bigDiv.classList.add("bigDiv");
        containerDiv.appendChild(bigDiv);

        for (let i = 0; i < numberOfDivs; i++) {
            let smallDiv = document.createElement('div');
            smallDiv.classList.add("smallDiv");
            if (borderX === true) smallDiv.style.border = '1px solid #f4f4f4';
            bigDiv.appendChild(smallDiv);

            arr.push(smallDiv)
        }
    }


    for (let i = 0; i < arr.length; i++) {
        arr[i].addEventListener(paintMethod, paint)
    }
}

createDivs()

function paint(){
    if(color === 'black') {
        this.style.backgroundColor = 'black'
        if(paintBorder === true) {
            this.style.boxShadow = '0 0 5px black'
        }
    }

    if(color === 'white') {
        this.style.backgroundColor = 'white'
        if(paintBorder === true) {
            this.style.boxShadow = '0 0 0 1px lightgrey'
        }
    }

    if(color === 'rainbow') {
        this.style.backgroundColor = getRandomColor()
        if(paintBorder === true) this.style.boxShadow = '0 0 0 0'
    }

    if(color === 'pastel') {
        this.style.backgroundColor = getPastelColor()
        // if(paintBorder === true) this.style.boxShadow = getRandomColor()
        if(paintBorder === true) this.style.boxShadow = '0 0 0 0'
    }
    else {
        this.style.backgroundColor = color
        if(paintBorder === true) this.style.boxShadow = '0 0 0 0'
    }
}
