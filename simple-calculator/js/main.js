let display = document.getElementById('display');

let buttons = Array.from(document.getElementsByClassName ('button'));


// Functions (array-based, i.e. lists of ordered and stored data, that can hold items of any data type)

buttons.map( button => {                              //Array map() method creates a new array from calling a function for every array element (i.e. every element in 'buttons' named 'button')
    button.addEventListener('click', (e) => {
        switch(e.target.innerText){
            case 'C':
                display.innerText = '';
                break;
            case '=':
                try{
                    display.innerText = eval(display.innerText);
                } catch {
                    display.innerText = "Error"
                }
                break;
            case '←':
                if (display.innerText){
                   display.innerText = display.innerText.slice(0, -1);
                }
                break;
            default:
                display.innerText += e.target.innerText;
        }
    });
});