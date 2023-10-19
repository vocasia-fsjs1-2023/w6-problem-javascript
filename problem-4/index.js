function changeMe(arr) {
    // Tulis codemu disini dan console log hasilnya
    var currentYear = new Date().getFullYear();
  
  for (var i = 0; i < arr.length; i++) {
    var personData = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: 'Invalid Birth Year'
    };
    
    if (arr[i][3] !== undefined && arr[i][3] <= currentYear) {
      personData.age = currentYear - arr[i][3];
    }
    
    console.log((i + 1) + '. ' + personData.firstName + ' ' + personData.lastName + ':');
    console.log(personData);
  }
}
  
  // TEST CASES
  changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); 
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