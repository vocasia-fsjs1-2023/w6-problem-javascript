function changeMe(arr) {
  const finalArray = [];

  for (let i = 0; i < arr.length; i++) {
    const biodata = {};

    biodata.firstName = arr[i][0];
    biodata.lastName = arr[i][1];
    biodata.gender = arr[i][2];
    
    if (arr[i][3]) {
      const thnSekarang = 2023;
      const thnLahir = arr[i][3];
      const age = thnSekarang - thnLahir;
      biodata.age = age;
    } else {
      biodata.age = 'Invalid Birth Year';
    }
    finalArray.push(biodata);
  }

  for (let i = 0; i < finalArray.length; i++) {
    console.log(`${i + 1}. ${finalArray[i].firstName} ${finalArray[i].lastName}:`);
    console.log({
      firstName: finalArray[i].firstName,
      lastName: finalArray[i].lastName,
      gender: finalArray[i].gender,
      age: finalArray[i].age
    });
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