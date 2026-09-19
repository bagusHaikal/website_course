# Product Requirement Document (PRD)

## 1. Document Overview
* **Project Name:** On-Demand Online Course & Learning Platform
* **Reference System:** Infinite Learning Indonesia Platform
* **Version:** 1.0
* **Target Audience:** Developers, Designers, Product Managers, Tech Leads
* **Tech Stack:**
  * **Frontend:** React.js, Tailwind CSS, Redux Toolkit / React Context
  * **Backend:** Node.js, Express.js
  * **Database:** PostgreSQL (Relational) + Redis (Session & Caching)
  * **Storage & Media:** AWS S3 / Cloudflare R2, Cloudflare Stream / Video.js

---

## 2. Product Summary & Objectives
Platform pembelajaran online yang berfokus pada pelatihan vokasi dan *upskilling* digital. Sistem ini memungkinkan pengguna membeli kursus secara satuan untuk mendapatkan **akses tanpa batas waktu (unlimited/lifetime access)** ke materi belajar berbasis video, artikel, dan aset pendamping yang dapat dipelajari secara mandiri (*on-demand*).

### Key Value Propositions
* **Pay-per-Course (Beli Satuan):** Tidak ada biaya berlangganan. Sekali bayar untuk akses selamanya.
* **On-Demand & Flexible Learning:** Pembelajaran mandiri (*asynchronous*) yang dapat diakses kapan saja.
* **Work-Based Project & Portfolio:** Capstone project berbasis industri untuk membangun portofolio riil.
* **Dedicated Mentor Support:** Pendampingan mentor untuk peninjauan tugas dan bimbingan.
* **Career Support & Certification:** Review CV, persiapan interview, dan penerbitan sertifikat resmi otomatis setelah kelulusan.

---

## 3. User Personas & System Roles

### 3.1. System Roles
1. **Student (Siswa):**
   * Menjelajahi katalog, membeli kursus, mengakses materi belajar unlimited, melacak progres, mengunggah tugas/capstone, dan mengunduh sertifikat.
2. **Instructor / Mentor:**
   * Mengelola kurikulum (modul & pelajaran), memeriksa tugas siswa, melihat analitik kursus, dan mengelola profil instruktur.
3. **Admin:**
   * Memverifikasi & mempublikasikan kursus baru, mengelola akun pengguna, memantau transaksi & refund, serta mengonfigurasi sistem platform.

---

## 4. Functional Requirements (Spesifikasi Fitur Fungsional)

### 4.1. Guest & Discovery (Katalog & Informasi Utama)


#### Section: Navigation Bar

- **Layout:** Fixed top, full-width, glass-panel dark theme
- **Left:** Logo Infinite Learning (klik -> scroll to top)
- **Center:** Menu navigation dengan dropdown
  - Home
  - Program (dropdown: Bootcamp, Workshop, Belajar Mandiri, Lihat Semua Program)
  - Corporate (dropdown: Corporate Training, Partnership, Hire Our Graduates)
  - Program Mandiri
- **Right:** Search bar + Masuk / Daftar Sekarang buttons
- **Mobile:** Hamburger menu dengan sub-menu bertingkat
- **Auto-hide:** Navbar tersembunyi saat scroll ke bawah, muncul saat scroll ke atas
- **Dropdown behavior:** Click untuk buka/tutup, klik di luar untuk tutup
#### Section: Hero Banner

- **Title:** "Belajar Tanpa Batas, Kapan Pun & Dimana Pun"
- **Subtitle:** "Platform pembelajaran online yang menyatukan seluruh kebutuhanmu untuk belajar vokasi dan upskilling digital — dari kampus merdeka hingga belajar mandiri."
- **CTA Button:** "Temukan Programmu"
- **Background Image:** `hero-banner-placeholder.jpg`
- **Background Gradient Overlay:** Semi-transparent black gradient overlay to improve text contrast
- **Layout:** Centered content with max-width container, CTA button below subtitle

#### Section: Program Slider (Mengganti "Featured Programs")

- **Title:** "Program Unggulan"
- **Subtitle:** "" *(opsional, bisa kosongkan dulu)*
- **UI Design:**
  - Slider horizontal otomatis (auto-slide)
  - **Navigation Arrow:** Kiri-kanan (prev/next)
  - **Tidak ada pagination dots**
  - Responsive: 1 card di mobile, sampai 3 card di desktop
- **Cards (Berisi 4 Program):**
  1. **"Kampus Merdeka"**
     - Thumbnail: `program-kampus-merdeka.jpg`
     - Deskripsi: "Cocok untuk kamu yang ingin magang, konversi SKS, dibimbing mentor, dapat sertifikat resmi, dan siap terjun ke dunia kerja."
     - Tombol: "Pelajari Selanjutnya"
  2. **"Workshop"**
     - Thumbnail: `program-workshop.jpg`
     - Deskripsi: "Cocok untuk kamu yang ingin belajar spesifik dibidang tertentu atau mencoba dulu sebelum mendalami suatu tanpa harus berkomitmen jangka panjang."
     - Tombol: "Pelajari Selanjutnya"
  3. **"Bootcamp"**
     - Thumbnail: `program-bootcamp.jpg`
     - Deskripsi: "Cocok untuk kamu yang sedang mencari pekerjaan atau opportunity baru dan ingin mendalami atau upskill di bidang tertentu dengan pembelajaran dan bimbingan yang intensive."
     - Tombol: "Pelajari Selanjutnya"
  4. **"Belajar Mandiri"**
     - Thumbnail: `program-belajar-mandiri.jpg`
     - Deskripsi: "Cocok untuk kamu yang lebih senang belajar mandiri, mengikuti pace dan timeline diri sendiri."
     - Tombol: "Pelajari Selanjutnya"

#### Section: FAQ

- Title: "Frequently Asked Questions"
- Subtitle: ""
- UI Design:
  - Accordion component for desktop and mobile
  - Each accordion item contains:
    - Question title
    - Icon chevron (right-facing, rotates 90deg when active)
  - Default state: All accordion items closed
- **FAQ Items:**
  - Q1: "Apa yang dimaksud dengan 'Belajar Tanpa Batas'?"
    - A1: "Ini berarti Anda bisa mengakses semua materi kursus yang Anda beli tanpa batas waktu."
  - Q2: "Bagaimana saya bisa membeli kursus?"
    - A2: "Anda dapat membeli kursus dengan mengklik tombol 'Beli Sekarang' pada halaman detail kursus."
  - Q3: "Apakah ada garansi uang kembali?"
    - A3: "Ya, kami menawarkan garansi uang kembali 100% dalam 7 hari pertama."
  - Q4: "Bagaimana cara mengakses materi kursus setelah membeli?"
    - A4: "Setelah pembayaran berhasil, Anda akan menerima email konfirmasi dan dapat mengakses kursus melalui akun Anda."

#### Section: Alumni Showcase

- Title: "Connect with Our Alumni"
- Subtitle: ""
- UI Design:
  - Horizontal scrollable cards on mobile
  - Grid layout of 3 cards per row on desktop
  - Each card contains:
    - Profile image (rounded full)
    - Name
    - Program
    - Workplace
  - Hover effect: Shadow lift + slight scale-up
- **Alumni:**
  - Alumni 1:
    - Name: "Rizky Pratama"
    - Program: "Fullstack Developer Bootcamp"
    - Workplace: "PT. Inovasi Digital"
  - Alumni 2:
    - Name: "Siti Nurhaliza"
    - Program: "UI/UX Design Workshop"
    - Workplace: "CV. Kreatif Teknologi"
  - Alumni 3:
    - Name: "Andi Wijaya"
    - Program: "Data Science Imersive"
    - Workplace: "Startup Teknologi XYZ"

### Section Footer
- Logo "https://lms-v2.infinitelearningstudent.id/logo-white.png"
 - Kawasan Ekonomi Khusus (KEK) Nongsa, Jalan Hang Lekiu KM 2 Sambau
 - Kecamatan Nongsa, Kota Batam, Kepulauan Riau
 - 29465
- Program
 - Bootcamp
 - Workshop
 - Belajar Mandiri
- Corporate
 - Corporate Training
 - Partnership
 - Hire Our Graduates
- Program Mandiri
 - Website Development 
 - Mobile Development
 - Artificial Intelligence
- Our Social Media
 - Logo Instagram
 - Linkedin
 - Tiktok
 - Youtube
- no telp "+62 823 8759 7266"
- email "info@infinitelearning.id "

### 4.2. Transaksi & Hak Akses (Checkout & Payment)
* **Checkout System:** Pembelian langsung per item (Pay-per-course).
* **Payment Gateway Integration:** Dukungan QRIS, Virtual Account (VA), E-Wallet, dan Kartu Kredit melalui Midtrans/Xendit.
* **Voucher & Coupon:** Fitur klaim kode diskon promo saat checkout.
* **Unlimited Access Provisioning:** Setelah transaksi dikonfirmasi `completed`, sistem secara otomatis mendaftarkan `user_id` ke kursus tersebut tanpa batas kedaluwarsa.

### 4.3. Student Learning Space (Course Player)
* **Adaptive Video Player:** Fitur *resume last position*, pengaturan kecepatan putar (0.5x - 2x), dan proteksi streaming video.
* **Content Delivery:** Modul berbasis video, artikel teks, dan lampiran file (PDF, ZIP, source code).
* **Progress Tracking:** Pelacakan otomatis status penyelesaian pelajaran per siswa.
* **Q&A / Discussion Forum:** Kolom tanya-jawab spesifik pada tiap modul pelajaran antara siswa dan mentor.
* **Assignment Submission:** Sistem upload tugas/capstone project dengan format file tertentu.
* **Automatic Certificate Generator:** Penerbitan sertifikat PDF secara otomatis saat progres mencapai 100%.

### 4.4. Mentor & Instructor Dashboard
* **Course Builder:** Antarmuka drag-and-drop untuk pembuatan modul dan pelajaran.
* **Task & Assignment Review:** Modul pemeriksaan tugas/capstone project siswa oleh mentor dengan fitur feedback dan scoring.
* **Analytics & Reports:** Laporan jumlah siswa terdaftar, pendapatan per kursus, tingkat penyelesaian materi, dan rating/review.

### 4.5. Admin Dashboard
* **Course Moderation:** Approval atau reject kursus baru sebelum dipublikasikan.
* **User Management:** Aktivasi/deaktivasi akun, manajemen role user.
* **Transaction Monitoring:** Daftar semua transaksi, status pembayaran, dan proses refund jika diperlukan.
* **Content Management:** Kelola kategori kursus, banner promosi, dan showcase alumni.

---

## 5. System Architecture & Tech Stack

```text
[ React.js SPA / Frontend ] 
        │
        ▼ (REST API / HTTPS)
[ Node.js + Express API Backend ] ──► [ JWT Authentication ]
        │
        ├──► [ PostgreSQL Database ] (User, Course, Purchase, Progress Data)
        ├──► [ Redis Cache ] (Session & Temporary Data)
        ├──► [ Cloudflare R2 / AWS S3 ] (Video Content & File Attachments)
        └──► [ Payment Gateway (Midtrans/Xendit) ] (Webhooks & Billing)
```

---

## 6. Database Schema Design (PostgreSQL / Relational)

### 6.1. Entity Relationship Overview
* **Users** (1) ── (N) **Courses** *(Instructor creates Courses)*
* **Users** (N) ── (N) **Courses** *(via Purchases for Unlimited Access)*
* **Courses** (1) ── (N) **Modules** (1) ── (N) **Lessons**
* **Users** (1) ── (N) **Progress** (N) ── (1) **Lessons**
* **Users** (1) ── (N) **Reviews** (N) ── (1) **Courses**

### 6.2. Table Schemas

#### 1. `users`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | Primary Key, Default: gen_random_uuid() | ID Unik User |
| `name` | VARCHAR(100) | NOT NULL | Nama Lengkap |
| `email` | VARCHAR(150) | UNIQUE, NOT NULL | Alamat Email |
| `password_hash` | VARCHAR(255) | NOT NULL | Hash Password (Bcrypt) |
| `role` | ENUM | 'student', 'instructor', 'admin' | Peran User |
| `avatar_url` | TEXT | NULL | URL Foto Profil |
| `bio` | TEXT | NULL | Deskripsi Singkat |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Waktu Pendaftaran |
| `updated_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Terakhir Update |

#### 2. `courses`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | Primary Key | ID Unik Kursus |
| `instructor_id` | UUID | Foreign Key -> `users(id)` | ID Instruktur Pembuat |
| `title` | VARCHAR(200) | NOT NULL | Judul Kursus |
| `slug` | VARCHAR(200) | UNIQUE, NOT NULL | URL Slug |
| `description` | TEXT | NULL | Deskripsi Lengkap |
| `price` | DECIMAL(10, 2) | NOT NULL | Harga Kursus (IDR) |
| `thumbnail_url` | TEXT | NULL | Image Banner |
| `preview_video_url` | TEXT | NULL | Video Trailer |
| `category` | VARCHAR(50) | NULL | Kategori Kursus |
| `level` | ENUM | 'beginner', 'intermediate', 'advanced' | Tingkat Kesulitan |
| `is_published` | BOOLEAN | DEFAULT FALSE | Status Publikasi |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Tanggal Dibuat |
| `updated_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Terakhir Update |

#### 3. `modules`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | Primary Key | ID Modul |
| `course_id` | UUID | Foreign Key -> `courses(id)` ON DELETE CASCADE | ID Kursus Induk |
| `title` | VARCHAR(150) | NOT NULL | Judul Modul |
| `order` | INT | NOT NULL | Urutan Modul |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Tanggal Dibuat |

#### 4. `lessons`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | Primary Key | ID Pelajaran |
| `module_id` | UUID | Foreign Key -> `modules(id)` ON DELETE CASCADE | ID Modul Induk |
| `title` | VARCHAR(150) | NOT NULL | Judul Pelajaran |
| `type` | ENUM | 'video', 'text', 'assignment' | Tipe Konten |
| `content_url` | TEXT | NULL | Link Video / Asset |
| `body_text` | TEXT | NULL | Konten Berbasis Teks |
| `duration_seconds` | INT | NULL | Durasi Video (detik) |
| `order` | INT | NOT NULL | Urutan Pelajaran |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Tanggal Dibuat |

#### 5. `purchases` (Hak Akses Unlimited)
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | Primary Key | ID Transaksi |
| `user_id` | UUID | Foreign Key -> `users(id)` | ID Pembeli |
| `course_id` | UUID | Foreign Key -> `courses(id)` | ID Kursus yang Dibeli |
| `amount` | DECIMAL(10, 2) | NOT NULL | Jumlah Pembayaran |
| `discount_amount` | DECIMAL(10, 2) | DEFAULT 0 | Potongan Diskon |
| `final_amount` | DECIMAL(10, 2) | NOT NULL | Total Bayar Akhir |
| `status` | ENUM | 'pending', 'completed', 'failed', 'refunded' | Status Transaksi |
| `payment_method` | VARCHAR(50) | NULL | Metode Pembayaran |
| `payment_gateway_id` | VARCHAR(100) | NULL | Reference ID Payment Gateway |
| `purchased_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Tanggal Pembelian |

#### 6. `progress`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | Primary Key | ID Catatan Progres |
| `user_id` | UUID | Foreign Key -> `users(id)` | ID Siswa |
| `lesson_id` | UUID | Foreign Key -> `lessons(id)` | ID Pelajaran |
| `is_completed` | BOOLEAN | DEFAULT FALSE | Status Selesai |
| `last_watched_sec` | INT | DEFAULT 0 | Posisi Video Terakhir (Detik) |
| `completed_at` | TIMESTAMP | NULL | Waktu Selesai |
| `updated_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Terakhir Diperbarui |

#### 7. `reviews`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | Primary Key | ID Review |
| `user_id` | UUID | Foreign Key -> `users(id)` | ID Siswa |
| `course_id` | UUID | Foreign Key -> `courses(id)` | ID Kursus |
| `rating` | INT | CHECK (rating >= 1 AND rating <= 5) | Rating 1-5 |
| `comment` | TEXT | NULL | Komentar Siswa |
| `created_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Tanggal Review |

#### 8. `certificates`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | Primary Key | ID Sertifikat |
| `user_id` | UUID | Foreign Key -> `users(id)` | ID Siswa |
| `course_id` | UUID | Foreign Key -> `courses(id)` | ID Kursus |
| `certificate_url` | TEXT | NOT NULL | Link PDF Sertifikat |
| `issued_at` | TIMESTAMP | DEFAULT CURRENT_TIMESTAMP | Tanggal Terbit |

#### 9. `coupons`
| Column | Type | Constraints | Description |
| :--- | :--- | :--- | :--- |
| `id` | UUID | Primary Key | ID Kupon |
| `code` | VARCHAR(50) | UNIQUE, NOT NULL | Kode Kupon |
| `discount_type` | ENUM | 'percentage', 'fixed' | Tipe Diskon |
| `discount_value` | DECIMAL(10, 2) | NOT NULL | Nilai Diskon |
| `max_usage` | INT | NULL | Batas Penggunaan |
| `used_count` | INT | DEFAULT 0 | Jumlah Terpakai |
| `valid_from` | TIMESTAMP | NOT NULL | Mulai Berlaku |
| `valid_until` | TIMESTAMP | NOT NULL | Berakhir |
| `is_active` | BOOLEAN | DEFAULT TRUE | Status Aktif |

---

## 7. API Endpoints (Backend Routes)

### 7.1. Authentication
* `POST /api/auth/register` - Registrasi user baru
* `POST /api/auth/login` - Login & generate JWT token
* `POST /api/auth/logout` - Logout & invalidate token
* `GET /api/auth/profile` - Get user profile (Protected)

### 7.2. Courses (Public)
* `GET /api/courses` - List semua kursus (filter: category, level, search)
* `GET /api/courses/:slug` - Detail kursus berdasarkan slug

### 7.3. Enrollment & Purchase
* `POST /api/purchases` - Create transaksi pembelian kursus
* `POST /api/webhooks/payment` - Webhook dari payment gateway
* `GET /api/my-courses` - List kursus yang sudah dibeli (Protected)

### 7.4. Learning (Student)
* `GET /api/courses/:courseId/curriculum` - Get modul & pelajaran
* `GET /api/lessons/:lessonId` - Detail pelajaran & konten
* `POST /api/progress` - Update progres siswa
* `POST /api/certificates/generate` - Generate sertifikat

### 7.5. Instructor Dashboard
* `POST /api/instructor/courses` - Buat kursus baru
* `PUT /api/instructor/courses/:id` - Edit kursus
* `POST /api/instructor/courses/:id/modules` - Tambah modul
* `POST /api/instructor/modules/:id/lessons` - Tambah pelajaran
* `GET /api/instructor/analytics` - Statistik kursus

### 7.6. Admin
* `GET /api/admin/courses/pending` - List kursus menunggu approval
* `PUT /api/admin/courses/:id/approve` - Approve/reject kursus
* `GET /api/admin/users` - Manajemen user
* `GET /api/admin/transactions` - List semua transaksi

---

## 8. Non-Functional Requirements

### 8.1. Performance
* **Response Time:** API endpoint harus merespons dalam < 200ms untuk 95% request.
* **Video Streaming:** Menggunakan adaptive bitrate streaming (HLS) untuk pengalaman smooth tanpa buffering.
* **Caching Strategy:** Cache katalog kursus dan data statis menggunakan Redis dengan TTL 15 menit.

### 8.2. Security
* **Authentication:** JWT-based authentication dengan refresh token mechanism.
* **Password Security:** Hash password menggunakan `bcrypt` dengan salt rounds minimum 10.
* **Video Protection:** Implementasi signed URL dengan expiry time untuk mencegah direct download/piracy.
* **HTTPS Only:** Seluruh komunikasi harus menggunakan SSL/TLS encryption.
* **Rate Limiting:** Batasi request per IP (100 request/menit) untuk mencegah abuse.
* **Input Validation:** Sanitasi input user untuk mencegah SQL Injection & XSS attacks.

### 8.3. Scalability
* **Horizontal Scaling:** Backend API harus stateless untuk mendukung load balancer.
* **Database Indexing:** Index pada kolom yang sering di-query (email, slug, course_id).
* **CDN Integration:** Serve static assets (images, videos) melalui CDN.

### 8.4. Usability
* **Responsive Design:** Support desktop, tablet, dan mobile devices.
* **Accessibility:** Minimum WCAG 2.1 Level AA compliance (keyboard navigation, screen reader support).
* **Multi-language:** Persiapan infrastruktur i18n untuk dukungan Bahasa Indonesia & English.

---

## 9. User Flow Diagrams

### 9.1. Student Purchase Flow
```text
1. Browse Katalog → 2. Pilih Kursus → 3. Lihat Detail & Preview
    ↓
4. Klik "Buy Now" → 5. Login/Register (jika belum) → 6. Checkout
    ↓
7. Pilih Payment Method → 8. Payment Gateway → 9. Payment Success
    ↓
10. Akses Unlimited ke Course Player → 11. Mulai Belajar
```

### 9.2. Learning Progress Flow
```text
1. My Courses Dashboard → 2. Select Course → 3. Course Player
    ↓
4. Watch Video/Read Content → 5. Mark Lesson Complete (Auto/Manual)
    ↓
6. Progress Saved to Database → 7. Update Progress Bar
    ↓
8. All Lessons Complete → 9. Generate Certificate → 10. Download PDF
```

### 9.3. Instructor Course Creation Flow
```text
1. Instructor Dashboard → 2. Create New Course → 3. Fill Basic Info
    ↓
4. Upload Thumbnail & Preview Video → 5. Set Price
    ↓
6. Create Modules → 7. Add Lessons (Video/Text/Assignment)
    ↓
8. Submit for Review → 9. Admin Approval → 10. Course Published
```

---

## 10. MVP (Minimum Viable Product) Scope

### Phase 1: Core Learning Platform (3-4 Bulan)
* ✅ User authentication (Register, Login, Profile)
* ✅ Course catalog & detail page
* ✅ Payment integration (Midtrans/Xendit)
* ✅ Course player dengan video streaming
* ✅ Progress tracking
* ✅ Basic instructor dashboard (upload course)

### Phase 2: Enhanced Features (2-3 Bulan)
* ✅ Certificate generation
* ✅ Review & rating system
* ✅ Q&A discussion forum
* ✅ Coupon/voucher system
* ✅ Admin moderation dashboard

### Phase 3: Advanced Features (2-3 Bulan)
* ✅ Assignment submission & grading
* ✅ Advanced analytics untuk instructor
* ✅ Career support features (CV review booking)
* ✅ Alumni showcase
* ✅ Email notification system

---

## 11. Success Metrics (KPI)

* **User Acquisition:** 1000+ registered users dalam 3 bulan pertama.
* **Conversion Rate:** Minimal 5% visitor menjadi paying customer.
* **Course Completion Rate:** Minimal 40% siswa menyelesaikan kursus hingga 100%.
* **Average Rating:** Rating kursus rata-rata > 4.0/5.0.
* **Revenue:** Target pendapatan Rp 50 juta dalam 6 bulan pertama (MVP).

---

## 12. Risk & Mitigation

| Risk | Impact | Mitigation Strategy |
| :--- | :--- | :--- |
| Video piracy/pembajakan | High | Implementasi HLS signed URL, watermark, dan DRM |
| Payment fraud | High | Verifikasi 2-factor, monitoring transaksi mencurigakan |
| Server overload saat peak | Medium | Auto-scaling infrastructure, CDN, load balancer |
| Instructor konten berkualitas rendah | Medium | Proses review ketat oleh admin sebelum publish |
| Kompetisi platform lain | Medium | Fokus pada niche vokasi Indonesia & dedicated mentor |

---

## 13. Future Enhancements (Post-MVP)

* **Live Class & Webinar:** Integrasi Zoom/Google Meet untuk sesi mentoring live.
* **Mobile App:** Native Android & iOS app dengan offline video download.
* **Gamification:** Badge, leaderboard, dan point system untuk engagement.
* **Subscription Model:** Opsi unlimited access ke semua kursus dengan membership bulanan.
* **AI-Powered Recommendation:** Personalized course recommendation berdasarkan history siswa.
* **Corporate Training:** B2B package untuk perusahaan (bulk purchase).

---

## 14. References & Inspiration
* **Infinite Learning Indonesia:** [https://course.infinitelearning.id/](https://course.infinitelearning.id/)
* **Similar Platforms:** Udemy, Coursera, Skillshare, BuildWithAngga

---

## 15. Modernization & Upgrades (Developer Recommendations)

Untuk meningkatkan daya saing platform dan performa, berikut adalah rekomendasi implementasi teknologi dan fitur terkini yang selaras dengan PRD asli:

### 15.1. Tech Stack Modern
*   **Framework:** Hijrah ke **Next.js 14+ (App Router)** untuk SEO dan performa optimal (SSR/SSG).
*   **Language:** **TypeScript** untuk menjaga *type safety* di seluruh sistem.
*   **ORM:** **Drizzle ORM** (lebih ringan dan performan dibanding ORM tradisional) untuk berinteraksi dengan PostgreSQL.
*   **Styling:** **Tailwind CSS v4** dengan dukungan *dark mode* dan *utility-first design*.

### 15.2. Fitur Modern untuk User Experience
* **AI-Powered Mentor:** Integrasi LLM (OpenAI/Gemini) di halaman `Course Player` sebagai pendamping belajar (kontekstual dengan materi modul).
* **Smart Learning Tools:**
    * **Lesson Notes:** Fitur bagi siswa untuk mencatat di *timestamp* video tertentu.
    * **Auto-Summarizer:** Ringkasan otomatis pelajaran (berbasis AI).
* **Adaptive UX:** Implementasi *skeleton loading*, *micro-interactions* (Framer Motion), dan *progressive web app (PWA)*.

### 15.3. Performance & Security Enhancements
* **Video Delivery:** Menggunakan **Cloudflare Stream** untuk kemudahan HLS streaming, proteksi konten (DRM/Signed URLs), dan latensi rendah.
* **Observability:** Implementasi **Sentry** untuk *error tracking* dan **PostHog** untuk *behavioral analytics* (mengetahui di mana user berhenti belajar).
* **Semantic Search:** Menggunakan `pgvector` di PostgreSQL agar pencarian kursus lebih cerdas (tidak hanya berbasis *keyword*).

---

**Last Updated:** August 26, 2026  
**Status:** Ready for Review & Development
