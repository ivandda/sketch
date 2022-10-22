
// let div = document.querySelector('div')
// let text = document.createElement('button')
// let div2 = document.createElement('div')
//
// div2.classList.add('redDiv')
// div2.style.backgroundColor='red'
//
//
//
//
// div.style.backgroundColor='lightblue'
// div.appendChild(text)
// div.appendChild(div2)



let containerDiv = document.querySelector('#containerDiv')
let numberOfDivs = 4
// let bigDiv = document.createElement('div'); bigDiv.classList.add("bigDiv");
// let smallDiv = document.createElement('div'); smallDiv.classList.add("smallDiv");
// let smallDiv = document.querySelector('.smallDiv')
let arr = []

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
    this.style.backgroundColor = 'black'
}
