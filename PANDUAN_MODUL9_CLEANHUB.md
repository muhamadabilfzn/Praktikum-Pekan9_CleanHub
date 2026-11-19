# CleanHub — Tugas Praktikum Nomor 2 Modul 9

## Penyesuaian dari proyek Tugas Akhir Modul 8

- Modul `Petugas` sekarang menggunakan halaman React dan CRUD Inertia (`useForm`). Lima isian: nama lengkap, username (tambah), email, password, nomor HP, area kerja.
- Modul `Artikel` sekarang menggunakan halaman React dan CRUD AJAX `fetch()`. Lima item utama: judul, kategori, konten, status publikasi, dan berkas (JPG/PNG/PDF, maksimal 2 MB). Operasi memakai JSON dan FormData.
- Semua route pengelolaan tetap memakai middleware `auth` dan `role:admin` yang sudah ada pada CleanHub. Role lain (`petugas` dan pengguna biasa) tetap tersedia pada sistem asli.
- Halaman publik dan login Blade asli dipertahankan agar fitur Tugas Akhir lainnya tidak hilang. Karena proyek asli bukan Laravel React Starter Kit, autentikasi lama berbasis session tetap dipakai; ini adalah integrasi Inertia + React ke aplikasi yang sudah ada, bukan migrasi penuh ke Fortify.

## Menjalankan (Windows/Laragon/XAMPP)

1. Salin `.env.example` menjadi `.env`, lalu sesuaikan koneksi database CleanHub yang sudah digunakan.
2. Jalankan `composer update inertiajs/inertia-laravel --with-all-dependencies` (atau `composer install` setelah lock diperbarui).
3. Jalankan `npm install` dan `npm run build`.
4. Jika APP_KEY belum ada, jalankan `php artisan key:generate`.
5. Jalankan `php artisan migrate` (jangan gunakan `migrate:fresh` bila ada data penting).
6. Jalankan `php artisan storage:link`.
7. Jalankan `php artisan optimize:clear`, `php artisan module:list`, `php artisan route:list`.
8. Jalankan `php artisan serve` dan `npm run dev` pada terminal terpisah.
9. Login menggunakan akun admin CleanHub yang sudah tersedia; buka `/admin/petugas` dan `/admin/artikel`.

## Bukti yang perlu diambil sendiri

1. Login dan tampilan admin.
2. `php artisan module:list` dan `php artisan route:list`.
3. Petugas: daftar, tambah, validasi, edit, hapus.
4. Artikel: daftar, modal tambah, validasi 422, edit, hapus.
5. Tab Network Fetch/XHR saat tambah/edit artikel (response JSON).
6. File JPG/PNG/PDF yang dibuka dari tautan, folder `storage/app/public/artikel`, dan kolom `thumbnail` di tabel `articles`.
7. Error 403 ketika akun nonadmin mengakses `/admin/petugas` atau `/admin/artikel`.

## Catatan

- File `.env`, database lokal, `.git`, `vendor`, dan `node_modules` sengaja tidak disertakan.
- Proyek ini belum diuji dengan browser dan database pengguna. Pastikan hasil build dan alur CRUD diuji di komputer sendiri sebelum pengumpulan.
- `composer.lock` dari proyek awal belum diperbarui karena lingkungan ini tidak menjalankan Composer. Jalankan `composer update inertiajs/inertia-laravel --with-all-dependencies` satu kali sebelum `composer install` berikutnya.
