let display  = document.getElementsByClassName("display")[0];
let operations = []
function equals() {


  


let nums = display.innerHTML.split(/['\-'+''x''÷']/)
let answer;
let sums = +nums[0];
console.log(operations)

    for (let i = 1; i <= nums.length; i++) {
       if (operations[0] === '+') {
        sums += +nums[i]
        operations.shift()

             
        console.log(operations)
        console.log(nums)
        console.log(sums)
       } else if (operations[0] === '-') {
        sums -= +nums[i]
        operations.shift()
             
        console.log(operations)
        console.log(nums)
        console.log(sums)
       } else if (operations[0] === 'x') {
        sums *= +nums[i]
        operations.shift()
             
        console.log(operations)
        console.log(nums)
        console.log(sums)
       } else if (operations[0] === '÷') {
        sums /= +nums[i]
        operations.shift()
             
        console.log(operations)
        console.log(nums)
        console.log(sums)
       } 
    
    }

   
    display.innerHTML = sums
  
       

    

console.log(sums)

           
}
          
    const buttons = document.querySelectorAll(".button")


buttons.forEach(function(button) {
    button.addEventListener('click' ,function(){
        display.innerHTML +=  this.innerHTML

        if (this.innerHTML.includes('+')) {
            if (operations.length >= 1 ) {
                equals()
                operations.push('+')
                display.innerHTML += " +"
            } else {
            operations.push("+")
        }
        } else if (this.innerHTML.includes('-')) {
            if (operations.length >= 1 ) {
                equals()
                operations.push('-')
                display.innerHTML += ' -'
            } else {  operations.push("-")
            }
        } else if (this.innerHTML.includes('x')) {
            if (operations.length >= 1 ) {
                equals()
                operations.push('x')
                display.innerHTML += ' x'
            } else {operations.push('x')
            }
        } else if (this.innerHTML.includes("÷")) {
            if (operations.length >= 1 ) {
                equals()
                operations.push('÷')
                display.innerHTML += ' ÷'
            } else {operations.push("÷")
            }
        }
    })
})    
    
const equalsButton = document.getElementById('equalsbutton')

equalsButton.addEventListener('click', function() {
    if (operations.length > 0) {
        equals()
    }
})

const clearButton = document.getElementById('clear')

clearButton.addEventListener('click', function() {
    display.innerHTML = ''
    operations = []
    
})




