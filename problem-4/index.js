function changeMe(arr) {
  let currentYear = new Date().getFullYear(); 

  for (let i = 0; i < arr.length; i++) {
    let personData = {
      firstName: arr[i][0],
      lastName: arr[i][1],
      gender: arr[i][2],
      age: 'Invalid Birth Year' 
    };


    if (arr[i][3] !== undefined && arr[i][3] <= currentYear) {
d
      personData.age = currentYear - arr[i][3];
    }


    console.log(i + 1 + '. ' + personData.firstName + ' ' + personData.lastName + ':');
    console.log(personData);
  }
}


changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]);
changeMe([]);
