function changeMe(arr) {
  // Tulis codemu disini dan console log hasilnya
  var currentYear = new Date().getFullYear();
  var result = "";

  for (var i = 0; i < arr.length; i++) {
    var obj = {};
    obj.firstName = arr[i][0];
    obj.lastName = arr[i][1];
    obj.gender = arr[i][2];

    if (arr[i][3] !== undefined && arr[i][3] <= currentYear) {
      obj.age = currentYear - arr[i][3];
    } else {
      obj.age = "Invalid Birth Year";
    }

    result += i + 1 + ". " + arr[i][0] + " " + arr[i][1] + ":\n";
    result += JSON.stringify(obj, null, 2) + "\n";
  }

  console.log(result);
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]);
// Output:
// 1. Christ Evans:
// {
//   "firstName": "Christ",
//   "lastName": "Evans",
//   "gender": "Male",
//   "age": 38
// }
// 2. Robert Downey:
// {
//   "firstName": "Robert",
//   "lastName": "Downey",
//   "gender": "Male",
//   "age": "Invalid Birth Year"
// }

changeMe([]);
// Output: ""
