function changeMe(arr) {
  const thisYear = new Date().getFullYear();

  if (arr.length === 0) {
    console.log("This Array is Empty!");
  } else {
    for (let i = 0; i < arr.length; i++) {
      //Create Object
      var profile = {};

      //Set Value Object
      profile.firstName = arr[i][0];
      profile.lastName = arr[i][1];
      profile.gender = arr[i][2];

      if (!arr[i][3] || arr[i][3] > thisYear) {
        profile.age = "Invalid Birth Year";
      } else {
        profile.age = thisYear - arr[i][3];
      }

      //Print Object
      console.log(`${i + 1}. ${profile.firstName} ${profile.lastName}:`);
      console.log(profile);
    }
  }
}

// TEST CASES
changeMe([
  ["Christ", "Evans", "Male", 1982],
  ["Robert", "Downey", "Male"],
]);
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
