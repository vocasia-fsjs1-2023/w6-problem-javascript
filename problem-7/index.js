function highestScore(students) {
  let result = {};

  for (let i = 0; i < students.length; i++) {
    let currentStudent = students[i];
    let max = result[currentStudent.class] || { name: '', score: 0 };

    if (currentStudent.score > max.score) {
      max.name = currentStudent.name;
      max.score = currentStudent.score;
    }

    result[currentStudent.class] = max;
  }

  return result;
}

// Test cases
console.log(highestScore([
  {
    name: 'Dimitri',
    score: 90,
    class: 'foxes'
  },
  {
    name: 'Alexei',
    score: 85,
    class: 'wolves'
  },
  {
    name: 'Sergei',
    score: 74,
    class: 'foxes'
  },
  {
    name: 'Anastasia',
    score: 78,
    class: 'wolves'
  }
]));

console.log(highestScore([
  {
    name: 'Alexander',
    score: 100,
    class: 'foxes'
  },
  {
    name: 'Alisa',
    score: 76,
    class: 'wolves'
  },
  {
    name: 'Vladimir',
    score: 92,
    class: 'foxes'
  },
  {
    name: 'Albert',
    score: 71,
    class: 'wolves'
  },
  {
    name: 'Viktor',
    score: 80,
    class: 'tigers'
  }
]));

console.log(highestScore([]));