'use strict'


window.onload = () => {
    let button = document.getElementById('check');
    let input = document.getElementById('input_raw_phrase');
    button.onclick = () =>{ alert( vowelCounter(input.value))};
}

function vowelCounter(text)
{
    let num = 0;
    let regexp = '[aeiou]';
    
    let result = Array.from(text.matchAll(regexp));
    num = result.length;
    return num;
}
