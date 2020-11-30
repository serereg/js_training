function fib(n)
{
    let result_1 = 1;
    let result_2 = 1;
    let result = 1;
    for (let i = 1; i < n-1; i++)
    {
        console.log(result_1, result_2);
        result = result_2 + result_1;
        result_1 = result_2;
        result_2 = result;
    }
    return result;
}

export {fib}
