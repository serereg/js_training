function unique(strings)
{
    let s = new Set(strings);
    let a = Array.from(s);
    console.log(a);
    return a;
}

export {unique}