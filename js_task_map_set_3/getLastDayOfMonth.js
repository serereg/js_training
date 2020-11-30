function getLastDayOfMonth(date, month)
{
    let n_d = new Date(date, month);
    n_d.setMonth(n_d.getMonth()+1);
    n_d.setDate(0);
    let max_day = n_d.getDate();
    console.log(max_day);
    return max_day;
}

export {getLastDayOfMonth}
