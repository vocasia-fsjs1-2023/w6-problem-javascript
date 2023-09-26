function changeMe(arr) {
  // Tulis codemu disini dan console log hasilnya
  let obj = [];
  for (let i = 0; i < arr.length; i++) {
    let firstName = arr[i][0];
    let lastName = arr[i][1];
    let gender = arr[i][2];
    let age = arr[i][3];

    arr[i][3] ? (age = 2023 - arr[i][3]) : (age = "Invalid Birth Year");

    let isiObj = {
      firstName,
      lastName,
      gender,
      age,
    };
    obj.push(isiObj);
  }
  return obj;
}

// TEST CASES
// changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 38 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
console.log(
  changeMe([
    ["Christ", "Evans", "Male", 1982],
    ["Robert", "Downey", "Male"],
  ])
);
