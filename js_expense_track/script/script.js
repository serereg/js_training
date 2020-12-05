'use strict'

window.onload = function()
{
    document.getElementById('addExpence').addEventListener('click', addExpence);
    //debugger
};

let table = {
    head: ['Name', 'Date', 'Amount'],
    rows: [],
    id: 0,
    addRow: function(data)
    {
        this.rows.push([this.id++, ...data]);
    },
    deleteRow: function(num)
    {
        console.log(`delete ${num}`)
        // this.rows.forEach(element => {
        //     if(element[0] == num)
        //     {
        //         element = null;
        //     }
        // });
        for (let el in this.rows)
        {
            if(this.rows[el][0] == num)
            {
                console.log(this.rows[el]);
                this.rows.splice(el, 1);
            }
        }

    }
};

function addExpence()
{
    let a = document.getElementById('name').value;
    let b = document.getElementById('date').value;
    let c = document.getElementById('amount').value;
    
    table.addRow([a, b, c]);
    showTable(table);

}

function showTable(table)
{
    let table_html = document.getElementById('ExpenseTable').getElementsByTagName('tbody')[0];
    table_html.innerHTML = "";


    for (let i_r in table.rows)
    {
        let row = table_html.insertRow();
        for (let i in table.rows[i_r])
        {
            if (i > 0)
            {
                let cell = row.insertCell();
                cell.append(table.rows[i_r][i]);
                //debugger;
            }
        }
        let button = document.createElement('button');
        button.innerHTML = "x";
        button.setAttribute('id', table.rows[i_r][0].toString())
        button.addEventListener('click',()=>{
                                                table.deleteRow(table.rows[i_r][0]);
                                                showTable(table);
                                            });
        let cellControl = row.insertCell();
        cellControl.append(button);
    }

}

