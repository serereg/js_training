window.onload = function()
{
    document.getElementById('addExpence').addEventListener('click', addExpence);
    //debugger
}

function addExpence()
{
    let a = document.getElementById('name').value;
    let b = document.getElementById('date').value;
    let c = document.getElementById('amount').value;
    let table = document.getElementById('ExpenseTable').getElementsByTagName('tbody')[0];
    addRow(table, a, b, c);
}

function addRow(table, a, b, c)
{
    let row = table.insertRow();

    let cellA = row.insertCell();
    cellA.append(a);
    let cellB = row.insertCell();
    cellB.append(b);
    let cellC = row.insertCell();
    cellC.append(c);

    let button = document.createElement('button');
    button.innerHTML = "Delete";
    let cellControl = row.insertCell();
    cellControl.append(button);
}