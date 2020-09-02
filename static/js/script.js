let allButtons = document.getElementsByTagName('button');

let copyAllButtons = [];
for (i=0; i < allButtons.length; i++) {
    copyAllButtons.push(allButtons[i].classList[1]);
}

function buttonColorChange(theButton) {
    if (theButton.value === 'red') {
        buttonRed();
    } else if (theButton.value === 'green') {
        buttonGreen();
    } else if (theButton.value === 'reset') {
        buttonReset();
    } else if (theButton.value === 'random') {
        randomColor();
    }
}

function buttonRed() {
    for (i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-danger');
    }
}

function buttonGreen() {
    for (i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add('btn-success');
    }
}

function buttonReset() {
    for (i=0; i < allButtons.length; i++) {
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(copyAllButtons[i]);
    }
}

function randomColor() {
    let choices = ['btn-primary', 'btn-danger', 'btn-success', 'btn-warning'];

    for (i=0; i < allButtons.length; i++) {
        let randomNumber = Math.floor(Math.random() * 4);
        allButtons[i].classList.remove(allButtons[i].classList[1]);
        allButtons[i].classList.add(choices[randomNumber]);
    }
}