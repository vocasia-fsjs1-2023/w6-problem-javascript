function changeMe(arr) {
    // Tulis codemu disini dan console log hasilnya
  for (let i = 0; i < arr.length; i++) { 
    let dataDiri = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      //mendapatkan tahun saat ini dengan date 
      //jika data pada index ke3 bernilai true maka akan mengurangi tahun saat ini dengan data, jika false menghasilkan invalid
      age: arr[i][3] ? new Date().getFullYear() - arr[i][3] : 'Invalid Birth Year'
    };

    console.log(`${i + 1}. ${dataDiri.firstName} ${dataDiri.lastName}:`);
    console.log(dataDiri);
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