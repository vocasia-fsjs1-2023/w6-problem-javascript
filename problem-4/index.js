function changeMe(arr) {
  // Tulis codemu disini dan console log hasilnya
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    let person = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: arr[i][3]
    };

    if (typeof person.age !== 'number') {
      person.age = 'Invalid Birth Year';
    }

    result.push(person);
  }

  if (result.length === 0) {
    return '';
  }

  return result;
}

// TEST CASES
console.log(changeMe(([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']])));
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
console.log(changeMe([])); // ""