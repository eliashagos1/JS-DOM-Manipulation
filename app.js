let btn = document.querySelector('#btn');
let changeColor = document.querySelector('.color-btn');
let paragraphTwo = document.querySelector('.p2');
let mainContent = document.querySelector('.main-content');
let resetBtn = document.querySelector('.reset-color');
let colorIndex = 0;

//Function and Event Listener for cycling through various color options
function colorSwitch(){
    const colors = ['grey', 'green', 'blue', 'pink'];
    mainContent.style.backgroundColor = colors[colorIndex];
    colorIndex = (colorIndex + 1) % colors.length; // set-up for getting next color
  }

changeColor.addEventListener('click', colorSwitch);

//Function and Event Listener for reseting the main content background color
function resetColor(){
    mainContent.style.backgroundColor = 'black';
}

resetBtn.addEventListener('click', resetColor);

//Function and Event Listener for displaying and removing additional content
function displayContent(){
    if(paragraphTwo.style.display === 'block'){
        paragraphTwo.style.display = 'none';
        btn.innerText = 'Reveal more';
    } else{
        paragraphTwo.style.display = 'block';
        btn.innerText = 'Reveal less';
    }
}

btn.addEventListener('click', displayContent);
