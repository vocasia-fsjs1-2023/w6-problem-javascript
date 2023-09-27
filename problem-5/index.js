function graduates(students) {
  // Membuat objek kosong untuk menyimpan hasil lulusan
  let result = {};

  // Iterasi melalui daftar siswa
  for (let i = 0; i < students.length; i++) {
    let student = students[i];

    // Memeriksa apakah siswa lulus (score lebih besar dari 75)
    if (student.score > 75) {
      // Jika kelas belum ada dalam objek hasil, inisialisasi dengan array kosong
      if (!result[student.class]) {
        result[student.class] = [];
      }

      // Tambahkan siswa yang lulus ke kelas yang sesuai
      result[student.class].push({
        name: student.name,
        score: student.score,
      });
    }
  }

  return result;
}

// Contoh penggunaan fungsi graduates
console.log(graduates([
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

console.log(graduates([
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

console.log(graduates([]));
