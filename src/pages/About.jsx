import { profile, skills } from '../data/profile'

export default function About() {
  return (
    <article className="about">
      <header className="about__head">
        <h1 className="about__title">Tentang saya</h1>
        <p className="about__lead">
          Saya {profile.name}, mahasiswa S1 yang senang mengubah masalah sehari-hari di sekolah dan layanan publik menjadi aplikasi web yang rapi dan mudah dipakai.
        </p>
      </header>

      <div className="about__grid">
        <figure className="about__portrait" aria-label="Inisial Alfin Rido">
          <span className="about__initials">AR</span>
          <figcaption>Web developer, Laravel dan React</figcaption>
        </figure>

        <div className="about__body">
          <section aria-labelledby="latar">
            <h2 id="latar">Latar belakang</h2>
            <p>
              Sebagian besar karya saya berangkat dari kebutuhan nyata. HafalQU, proyek skripsi saya, lahir dari pertanyaan sederhana: bagaimana guru bisa melihat perkembangan hafalan tiap siswa tanpa mencatat satu per satu di buku.
            </p>
            <p>
              Saya tertarik pada konteks pendidikan Islam, karena di sana teknologi harus tetap sederhana, jelas, dan sopan terhadap penggunanya.
            </p>
          </section>

          <section aria-labelledby="cara">
            <h2 id="cara">Cara saya bekerja</h2>
            <dl className="about__list">
              <dt>Mulai dari pengguna</dt>
              <dd>Saya menentukan peran dan alur tiap pengguna lebih dulu, baru menggambar layar dan menulis kode.</dd>
              <dt>Uji sebelum rilis</dt>
              <dd>Black box testing di setiap iterasi dan kuesioner UAT untuk semua peran pengguna.</dd>
              <dt>Tinggalkan dokumentasi</dt>
              <dd>Dokumen serah terima dan buku panduan pengguna saya siapkan bersama aplikasinya.</dd>
            </dl>
          </section>

          <section aria-labelledby="keahlian">
            <h2 id="keahlian">Keahlian</h2>
            <ul className="about__skills">
              {skills.flatMap((s) => s.items).map((i) => (
                <li key={i}>{i}</li>
              ))}
            </ul>
          </section>
        </div>
      </div>
    </article>
  )
}
