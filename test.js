var arr = [
  {
    id: 1,
    a: "a"
  },
  {
    pid: 1,
    id: 2,
    b: "b"
  },
  {
    pid: 1,
    id: 3,
    c: "c"
  },
  {
    pid: 3,
    d: "d",
    id: 4
  },
  {
    pid: 3,
    e: "e",
    id: 5
  },
  {
    pid: 3,
    f: "g",
    id: 6
  },
  {
    pid: 2,
    g: "h",
    id: 7
  },
  {
    pid: 2,
    h: "g",
    id: 8
  },
  {
    id: 9,
    i: "i",
    pid: 8
  },
  {
    id: 10,
    j: "j",
    pid: 8
  },
  {
    id: 11,
    k: "k",
    pid: 8
  },
  {
    id: 12,
    l: "l",
    pid: 8
  },
  {
    id: 12,
    m: "m",
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

console.log(rapedfunction(arr));
document.body.innerHTML =
  "<pre>" + JSON.stringify(rapedfunction(arr), null, " ") + "</pre>";
