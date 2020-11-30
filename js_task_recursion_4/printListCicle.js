
// let list = {
//   value: 1,
//   next: {
//     value: 2,
//     next: {
//       value: 3,
//       next: {
//         value: 4,
//         next: null
//       }
//     }
//   }
// };

function printListCicle(l)
{
  let arr = [];
  let temp_l = l;
  while (true)
  {
    arr.unshift(temp_l.value);
    if (temp_l.next != null)
    {
      temp_l = temp_l.next;
    }
    else
    {
      break;
    } 
  }

  arr.forEach(element => {
    console.log('value', element);
  });
}

export {printListCicle}
