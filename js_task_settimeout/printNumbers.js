function printNumbers(from, to)
{
    let n = from;
    let result = false;

    let timerId = setInterval(function () 
    {
        if ((n >= from && n <= to))
        {
            alert(n++);
        }
    }, 1000);
    if (n >= to)
    {
        clearInterval(timerId);
    }

}

printNumbers(3, 5);

export {printNumbers}
