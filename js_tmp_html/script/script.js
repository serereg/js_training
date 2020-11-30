window.onload = function(){
    document.getElementById("body").addEventListener( 'click', changeColor);
}


function changeColor()
{
    let change = confirm(`change color?` + document.getElementById("body").classList);
    if (change)
    {
        if (document.getElementById("body").classList.contains('body2') )
        {
            document.getElementById("body").classList.remove('body2');
            document.getElementById("body").classList.add('body1');
        }
        else if (document.getElementById("body").classList.contains('body1') )
        {
            document.getElementById("body").classList.remove('body1');
            document.getElementById("body").classList.add('body2');
        }
    }
}