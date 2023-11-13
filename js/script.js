function sighUpDropDownFunction(elementId) {
    document.getElementById(elementId).classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function (event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}
let images = ['imgJava.jpg','kobzar.jpg']
let currentIndex = 0;

function changeNextPic() {
    currentIndex ++;
    if(currentIndex>=images.length){
        currentIndex = 0;
    }
    let image = images[currentIndex]
    document.getElementById("qqq").src = 'images/' + image
}
function changePreviousPic() {
    currentIndex --;
    if(currentIndex < 0){
        currentIndex = images.length -1;
    }
    let image = images[currentIndex]
    document.getElementById("qqq").src = 'images/' + image
}

