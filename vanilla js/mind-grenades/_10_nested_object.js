// #01 - check whether value exists in the nested object

let nestedObject = {
  data: {
    info: {
      moreData: {
        moreInfo: {
          number: {
            myNumber: 36,
            myString: 'test',
          },
        },
        moreInfo1: {
          number: {
            myNumber: 54,
            myString: 'test123',
          },
        },
      },
    },
  },
};

function doesContain(obj, value) {
  for (let key in obj) {
    if (obj[key] === value) {
      return true;
    } else if (typeof obj[key] === 'object') {
      if (doesContain(obj[key], value)) return true;
    }
  }
  return false;
}

console.log('returned value 1: ', doesContain(nestedObject, 36)); // true
console.log('returned value 2: ', doesContain(nestedObject, 'test1')); // false
console.log('returned value 3: ', doesContain(nestedObject, 'test')); // true
console.log('returned value 4: ', doesContain(nestedObject, 54)); // true


// 02 - extract all the names from the object
let family = {
  id: 1,
  name: 'Parent',
  children: [
    {
      id: 2,
      name: 'Child 1',
      children: [
        {
          id: 5,
          name: 'Grandchild 1.1',
          children: [],
        },
        {
          id: 6,
          name: 'Grandchild 1.2',
          children: [],
        },
      ],
    },
    {
      id: 3,
      name: 'Child 2',
      children: [],
    },
    {
      id: 4,
      name: 'Child 3',
      children: [
        {
          id: 7,
          name: 'Grandchild 3.1',
          children: [],
        },
      ],
    },
  ],
};


let names = [];
const getNames = obj => {
  for (let key in obj) {
    if (key === 'name') {
      names.push(obj[key]);
    } else if (key === 'children') {
      if (obj[key].length > 0) {
        for (let i = 0; i < obj[key].length; i++) {
          getNames(obj[key][i]);
        }
      }
    }
  }
};

getNames(family);
console.log(names);
// Output - ['Parent','Child 1','Grandchild 1.1','Grandchild 1.2','Child 2','Child 3','Grandchild 3.1']
