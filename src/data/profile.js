// Ganti nilai di bawah ini dengan data asli Anda sebelum deploy.
export const profile = {
  name: 'M. Alfin Rido',
  role: 'Mahasiswa dan web developer',
  email: 'alfin@example.com', // TODO: ganti dengan email aktif
  github: '', // contoh: 'https://github.com/username'
  linkedin: '', // contoh: 'https://linkedin.com/in/username'
}

export const skills = [
  { group: 'Back end', items: ['Laravel', 'PHP', 'MySQL', 'REST/AJAX'] },
  { group: 'Front end', items: ['React', 'Tailwind CSS', 'JavaScript', 'Blade'] },
  { group: 'Alat kerja', items: ['Git dan GitHub', 'Composer', 'Vite', 'Vitest'] },
  { group: 'Data', items: ['Python', 'Pandas', 'scikit-learn'] },
]

export const projects = [
  {
    id: 'hafalqu',
    title: 'HafalQU',
    category: 'Aplikasi web',
    year: '2026',
    status: 'Proyek skripsi',
    summary:
      'Aplikasi pemantauan hafalan Al-Qur’an untuk SDIT Ulul Albab Mataram. Admin, guru, dan siswa punya dashboard masing-masing, lengkap dengan bank soal per juz dan surah, kuis, sistem level dan poin, serta laporan Excel dan PDF.',
    tags: ['Laravel', 'Tailwind CSS', 'AJAX', 'Hostinger'],
  },
  {
    id: 'edutrack',
    title: 'EduTrack',
    category: 'Aplikasi web',
    year: '2026',
    status: 'Tugas kuliah',
    summary:
      'Panel admin untuk mengelola mahasiswa, kursus, dan nilai ujian. Mendukung relasi many-to-many, login admin dengan middleware, unggah tugas, laporan nilai per mahasiswa, serta unit dan feature test.',
    tags: ['Laravel', 'PHP', 'Testing'],
  },
  {
    id: 'simrs',
    title: 'SIMRS',
    category: 'Aplikasi web',
    year: '2026',
    status: 'Sistem rumah sakit',
    summary:
      'Alur pengajuan laporan antara staf dan kepala instalasi. Akun dibedakan per peran, nama kepala ruangan terisi otomatis dari instalasi yang dipilih, dan dokumen mendukung tanda tangan digital.',
    tags: ['Akun berjenjang', 'Form pengajuan', 'Tanda tangan'],
  },
  {
    id: 'bbcafe',
    title: 'BBcafe',
    category: 'Landing page',
    year: '2026',
    status: 'Situs usaha',
    summary:
      'Halaman satu layar untuk kafe bergaya vintage di Senggigi, Lombok Barat. Memuat menu, lokasi, testimoni, dan tombol reservasi lewat WhatsApp.',
    tags: ['HTML', 'Tailwind CSS', 'AOS'],
  },
  {
    id: 'housing',
    title: 'Analisis California Housing',
    category: 'Data science',
    year: '2026',
    status: 'Final project kursus',
    summary:
      'Satu notebook yang mencakup eksplorasi data, model machine learning untuk memprediksi harga rumah, computer vision, NLP, dan bagian konseptual.',
    tags: ['Python', 'Pandas', 'scikit-learn'],
  },
]
