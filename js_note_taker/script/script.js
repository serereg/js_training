'use strict'


let modal = document.getElementById('modal');
let button = document.getElementById('addNote');
let span = document.getElementsByClassName('close')[0];

button.onclick = function() 
{
    //modal.style.display = 'block';
    let note = document.getElementById('noteText').value;
    notes.addItem(note);
    showTable();
};

span.onclick = function()
{
    modal.style.display = 'none';
};

window.onclick = function(event)
{
    if (event.target == modal)
    {
        modal.style.display = 'none';
    }
}

let notes =
{
    head: [],
    items: [],
    id: 0,
    addItem: function(item)
    {
        if(item == '') return;
        this.items.push([this.id++, item]);
    },
    deleteItem: function(id)
    {
        for(let i in this.items)
        {
            if (this.items[i][0] == id)
            {
                this.rows.splice(i, 1);
            }
        }
    }
}

function showTable()
{
    let table_element = document.getElementById('tableNotes').getElementsByTagName('tbody')[0];
    table_element.innerHTML = '';
    
    let row = table_element.insertRow();

    for (let i in notes.items)
    {
        if (Number(i)%2 == 0)
        {
            row = table_element.insertRow();
        }
        let cell = row.insertCell(); 
        cell.append(createDivNote(notes.items[i][1]));
    }
}

function createDivNote(text)
{
    let input = document.createElement('input');
    input.value = text;
    input.onclick = () => {showModal(text)};
    return input;
}

function showModal(text)
{
    let text_field = document.createElement('textarea');
    text_field.rows = 10;
    text_field.readOnly = true;
    text_field.classList.add('modal_text');
    text_field.value = text;
    // let modal_content = document.getElementById('modal-content');
    let modal_content = document.getElementById('modal_text');
    modal_content.innerHTML = "";
    modal_content.append(text_field);
    modal.style.display = 'block'; 
}