'use strict'


let pic = ['pic/round.png', 'pic/star.png'];
let arr = [[pic[0], pic[1], pic[0]], [pic[1], pic[1], pic[0]]];

let user = new User();

createTable(2, 3);

function createTable(rows, columns)
{
    let table = document.getElementById('gameTable').getElementsByTagName('tbody')[0];
    table.innerHTML = '';

    for (let r = 0; r < rows; r++)
    {
        let row = table.insertRow();
        for (let c = 0; c < columns; c++)
        {
            let cell = row.insertCell();
            cell.append(createDivCell(arr[r][c]));
        }
        
    }
}

function createDivCell(img_src)
{
    let div = document.createElement('div');
    div.innerHTML = "";

    let picture = document.createElement('img');
    picture.src = img_src;
    picture.classList.add('picture');
    picture.style.display = 'none';

    let square = document.createElement('div');
    square.classList.add('emptyCell');

    div.append(picture);
    div.append(square);

    div.onclick = () => {
        picture.style.display = 'block';
        square.style.display = 'none';
        user_control();
    };
    return div;
}

function User()
{
    this.arr = [];
    this.set = new Set();
    this.open = function (img)
    {
        this.arr.push(img);
        this.set.add(img);
    }
    this.checkIsWin = function()
    {
        if (this.set.size == 1 & this.arr.length >= 2)
        {
            return true;
        }
        return false;
    }
}

function user_control()
{
    user.open('sdf');
    if (user.checkIsWin())
    {
        alert("Winner!");
    }
}