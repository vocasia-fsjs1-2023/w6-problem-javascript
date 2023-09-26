function changeMe(arr) {
  for (let i = 0; i < arr.length; i++) {
    let person = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: arr[i][3] ? new Date().getFullYear() - arr[i][3] : 'Invalid Birth Year'
    };

    console.log(`${i + 1}. ${person.firstName} ${person.lastName}:`);
    console.log(person);
  }

  if (arr.length === 0) {
    console.log('""');
  }
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
// Output:
// 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 40 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }

changeMe([]); // Output: ""
