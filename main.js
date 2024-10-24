let display  = document.getElementsByClassName("display")[0];

function equals() {
if (display.innerHTML.includes('+')) {
let nums = display.innerHTML.split('+')
display.innerHTML = +nums[0] + +nums[1]
} else if (display.innerHTML.includes('-')) {
    let nums = display.innerHTML.split('-')
    display.innerHTML = +nums[0] - +nums[1]
    } else if (display.innerHTML.includes('÷')) {
        let nums = display.innerHTML.split('÷')
        display.innerHTML = +nums[0] / +nums[1]
        } else if (display.innerHTML.includes('x')) {
            let nums = display.innerHTML.split('x')
            display.innerHTML = +nums[0] * +nums[1]
            } 

            function onClick() {
                console.log('clicked ')
            }
}
          
    const buttons = document.querySelectorAll(".button")


buttons.forEach(function(button) {
    button.addEventListener('click' ,function(){
        display.innerHTML += this.innerHTML
    })
})    
    
const equalsButton = document.getElementById('equalsbutton')

equalsButton.addEventListener('click', equals)

const clearButton = document.getElementById('clear')

clearButton.addEventListener('click', function() {
    display.innerHTML = ''
})




