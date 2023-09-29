function changeMe(arr) {
  // Tulis codemu disini dan console log hasilnya
  let currentYear = new Date().getFullYear();
  for (let i = 0; i < arr.length; i++) {
    const birthYear = arr[i][3];
    const age = currentYear - (birthYear || currentYear);
    const person = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: age > 0 ? age : 'Invalid Birth Year'
    };
    
    console.log(`${i + 1}. ${person.firstName} ${person.lastName}:`);
    console.log(person);
  }
}
// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male', 2024]]); 
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
changeMe([]); // ""
