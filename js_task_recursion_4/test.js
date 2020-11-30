import {printList} from "./printList.js" 
import {printListCicle} from "./printListCicle.js" 

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};


let list2 = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
describe("printList", function() {
  it("printList list", function() {
    printList(list)
  });
  it("printListCicle list", function() {
    printListCicle(list2)
  });
  
});

mocha.run();