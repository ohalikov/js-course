var div,
    container = document.getElementById("containerBlackElements")
    container2 = document.getElementById("containerGreyElements")

container.style.display = "flex" 
container2.style.display  = "flex"


// each element equal #5, 'cuase i -> global
for (var i=0; i < 5; i ++) {
    div = createElementWithStyles("rgba(0,0,0,1)")
    div.onclick = function() {
        alert("this is box #" + i);
    };
    container.appendChild(div)
}


// each element not equal #5, 'cuase i -> local
for (let i=0; i < 5; i ++) {
    div = createElementWithStyles("rgba(0,0,0,0.5)")
    div.onclick = function() {
        alert("this is box #" + (i+1));
    };
    container2.appendChild(div)
}



function createElementWithStyles(rgbColor) {
    div = document.createElement("div")
    div.style.width = "50px"
    div.style.margin = "5px"
    div.style.height = "50px"
    div.style.background = rgbColor
    return div
}