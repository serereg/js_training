window.onload = function()
{    
    document.getElementById("submitListItem").addEventListener('click', addItem);
    document.getElementById("clearListItem").addEventListener('click', clearList);
    
};
let n = 1;
function addItem()
{
    let el = document.createElement('li');
    el.innerHTML = document.getElementById('listItem').value;
    document.getElementById('listOfItems').appendChild(el);

    let button = document.createElement('button');
    button.innerHTML = "Done"; 
    button.setAttribute("id", "button"+n++);
    document.getElementById('listOfItems').appendChild(button);
    
};

function clearList()
{
    let ul = document.getElementById('listOfItems');
    ul.innerHTML = "";
};

function doneItem()
{
    ;
}

