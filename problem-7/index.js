function highestScore(students) {
  // Membuat objek kosong untuk menyimpan siswa dengan nilai tertinggi dari setiap kelas
  let result = {};

  // Iterasi melalui daftar siswa
  for (let i = 0; i < students.length; i++) {
    let student = students[i];

    // Jika kelas belum ada dalam objek hasil, inisialisasi dengan siswa pertama
    if (!result[student.class]) {
      result[student.class] = {
        name: student.name,
        score: student.score,
      };
    } else {
      // Jika kelas sudah ada dalam objek hasil, periksa apakah nilai siswa saat ini lebih tinggi
      if (student.score > result[student.class].score) {
        // Jika nilai lebih tinggi, update siswa dengan nilai tertinggi
        result[student.class] = {
          name: student.name,
          score: student.score,
        };
      }
    }
  }

  return result;
}

// TEST CASE
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

console.log(highestScore([])); // {}
