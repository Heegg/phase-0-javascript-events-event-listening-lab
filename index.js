// ORIGINAL
// function addingEventListener() {
//     const input = document.getElementById('input');
// }

// function clickAlert() {
//     alert('I was clicked!')
// }

// input.addingEventListener('click', clickAlert);

// FIRST TRY
// function addingEventListener() {
//     const input = document.getElementById('button');
//     input.addEventListener('click', function() {
//     alert('I was clicked!');
// });
// }

// function clickAlert() {
//     alert('I was clicked!')
// }

// addEventListener('click', clickAlert);

// SECOND TRY
function addingEventListener() {
    const input = document.getElementById('input');
    input.addEventListener('click', function (){
        alert('I was clicked!')
    });
}

function moveDodferLeft() {
    const leftNumbers = dodger.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
    if (left > 0) {
        dodger.style.left = `${left - 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowLeft") {
        moveDodgerLeft();
    }
});

function moveDodferRight(){
    const rightNumbers = dodger.style.right.replace("px", "");
    const right = parseInt(rightNumbers, 10);
    if (right > 0) {
        dodger.style.right = `${right - 1}px`;
    }
}

document.addEventListener("keydown", function(e) {
    if (e.key === "ArrowRight") {
        moveDodgerRight();
    }
});