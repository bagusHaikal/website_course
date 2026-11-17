// Status pendaftaran tiap program — satu-satunya tempat mengubah perilaku CTA.
//
// status: 'open'  → tombol mengarah ke `url` (dibuka di tab baru)
// status: 'soon'  → tombol disabled, label "Segera Hadir"
//
// Untuk membuka pendaftaran: ubah `status` jadi 'open' lalu isi `url`.
export const registration = {
  'fullstack-web': { status: 'open', url: 'https://s.id/Pre-RegistrationBatch10IL3' },
  'mobile-dev': { status: 'open', url: 'https://s.id/Pre-RegistrationBatch10IL3' },
  'ai-dev': { status: 'soon' },
  'program-mandiri': { status: 'soon' },
  workshop: { status: 'soon' },
  courses: { status: 'soon' },
};

export const CTA_LABEL = {
  open: 'Daftar Sekarang',
  soon: 'Segera Hadir',
};
