// Fallback saat chunk route sedang diunduh (code splitting, §5.1).
//
// Sengaja ditaruh DI DALAM <PageLayout>, bukan membungkus seluruh app:
// kalau Suspense ada di atas <Routes>, Navbar & Footer ikut hilang tiap
// navigasi dan halaman berkedip. Dengan boundary di dalam layout, hanya
// area <main> yang menampilkan spinner.
//
// `motion-reduce:animate-none` mematikan putaran untuk user yang mengaktifkan
// reduced motion (WCAG 2.3.3) tanpa perlu eslint-disable apa pun.
function PageLoading() {
  return (
    <div
      role="status"
      aria-live="polite"
      className="min-h-[60vh] flex flex-col items-center justify-center gap-3"
    >
      <span
        aria-hidden="true"
        className="w-8 h-8 rounded-full border-2 border-border-default border-t-brand-accent animate-spin motion-reduce:animate-none"
      />
      <span className="text-sm text-text-muted">Memuat halaman...</span>
    </div>
  );
}

export default PageLoading;
