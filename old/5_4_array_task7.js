function sumInput()
{
    let arr = [];
    let user_input = '';
    while(true)
    {
        user_input = prompt('type smth:', '');
        if (user_input == '' || user_input == null)
            break;
        arr.push(user_input);
    } 
    
    return arr;
}

let arr = sumInput();

alert(arr);