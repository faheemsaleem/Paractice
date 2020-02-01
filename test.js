var arr = [
  {
    id: 1,
    letter: "a"
  },
  {
    pid: 1,
    id: 2,
    letter: "b"
  },
  {
    pid: 1,
    id: 3,
    letter: "c"
  },
  {
    pid: 3,
    letter: "d",
    id: 4
  },
  {
    pid: 3,
    letter: "e",
    id: 5
  },
  {
    pid: 3,
    letter: "f",
    id: 6
  },
  {
    pid: 2,
    letter: "g",
    id: 7
  },
  {
    pid: 2,
    letter: "h",
    id: 8
  },
  {
    id: 9,
    letter: "i",
    pid: 8
  },
  {
    id: 10,
    letter: "j",
    pid: 8
  },
  {
    id: 11,
    letter: "k",
    pid: 8
  },
  {
    id: 12,
    letter: "l",
    pid: 8
  },
  {
    id: 12,
    letter: "m",
    pid: 8
  }
];

function rapedfunction(arr) {
  var x;
  var tree = [];
  var newArr = {};
  for (var i = 0; i < arr.length; i++) {
    x = arr[i];
    newArr[x.id] = x;
    newArr[x.id]["children"] = [];
  }
  // debugger;
  for (var key in newArr) {
    if (newArr[key].id) {
      for (var i in newArr) {
        if (newArr[key].id === newArr[Number(i)].pid) {
          newArr[key].children.push(newArr[Number(i)]);
        }
      }
    }
  }
  tree.push(newArr);
  return tree["0"]["1"];
}

const input = rapedfunction(arr);

// debugger;
var finalResult;
function recursiveFunctionForFindAnyLetter(array, target) {
  console.log(array.letter);
  var result = array;
  if (array.letter === target) {
    result = array.letter;
    if (result === target) {
      finalResult = result;
    }
    return finalResult;
  } else {
    if (array.length) {
      return finalResult;
    } else {
      array.children.forEach((item, i) => {
        if (item.letter === target) {
          result = recursiveFunctionForFindAnyLetter(
            item.letter,
            target
          ).toUpperCase();
        } else if (item.children.length > 0) {
          item.children.map(item => {
            if (item.children.length === 0) {
              result = recursiveFunctionForFindAnyLetter(item.letter, target);
            } else {
              item.children.map(
                item =>
                  (result = recursiveFunctionForFindAnyLetter(
                    item.letter,
                    target
                  ))
              );
            }
          });
        }
      });
    }
  }
  return result;
}
document.body.innerHTML = `<h1>${recursiveFunctionForFindAnyLetter(
  input,
  "a"
).toUpperCase()} </h1>`; // e This is Parent ID 3 This is Child ID 6

// console.log(rapedfunction(arr));
document.body.innerHTML +=
  "<pre>" + JSON.stringify(rapedfunction(arr), null, " ") + "</pre>";
