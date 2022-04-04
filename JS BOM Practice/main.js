(function userInput() {
    let input = window.document.getElementById('enteredKey')
    input.addEventListener('keydown', (e) => {
        alert('You Pressed: ' + e.key)
    });
}());


(function userClicked() {
    let clicked = window.document.getElementById('clicked')
    clicked.addEventListener('click', (event) => {
        if (event.button === 0) { // 0 = left click
            alert('You Clicked Left Mouse Button')
        } else if (event.button === 2) { // 2 = right click
            alert('You Clicked Right Mouse Button')
        } else { // 1 = middle click
            alert('You Clicked Middle Mouse Button')
        }
    })
}());


window.document.addEventListener('keydown',(e) => {
    if(e.altKey && e.key ==='w'){
        alert('clock stopped..')
        clearInterval(window)
    }
})

window.document.getElementById('Clock').onclick = () => {
    alert('Clock Started ...')
    var currClock = window.document.getElementById('current-clock')
    currClock.innerHTML = new Date().toLocaleTimeString()

    setInterval(() => {
        currClock.innerHTML = new Date().toLocaleTimeString()
    }, 1000)
};
