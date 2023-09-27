function changeMe(arr) {
  const resultArray = [];
  for (let i = 0; i < arr.length; i++) {
    const data = {};
    data.firstName = arr[i][0];
    data.lastName = arr[i][1];
    data.gender = arr[i][2];

    if (arr[i][3]){
      const sekarang = 2023;
      const lahir = arr[i][3];
      const age = sekarang - lahir;
      data.age = age;
    }else {
      data.age = 'invalid birth year';
    }
    resultArray.push(data);
  }
  for (let j = 0; j < resultArray.length; j++){
    console.log(`${j + 1}. ${resultArray[j].firstName} ${resultArray[j].lastName}:`);
    console.log({
      firstName: resultArray[j].firstName,
      lastName: resultArray[j].lastName,
      gender: resultArray[j].gender,
      age: resultArray[j].age
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