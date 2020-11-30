
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

function printList(l)
{
  
  if (l.next == null)
  {
    console.log('value', l.value)
  }
  else
  {
    printList(l.next)
    console.log('value', l.value);
  }
    
}

export {printList}
