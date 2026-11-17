import { registration, CTA_LABEL } from '../data/registration';

// Tombol CTA pendaftaran program. Perilaku ditentukan oleh
// `data/registration.js`, bukan oleh href yang ditulis di JSX.
//
// status 'open'  → <a> ke url, tab baru
// status 'soon'  → <button disabled>, label "Segera Hadir"
//
// Jangan pakai href="#" untuk CTA yang belum punya tujuan.
function ProgramCta({ program, label, className = '' }) {
  const config = registration[program] || { status: 'soon' };
  const isOpen = config.status === 'open';

  const base =
    'inline-flex items-center justify-center gap-3 rounded-full font-bold transition-all duration-200';
  const skin = isOpen
    ? 'btn-premium bg-button-gradient text-white shadow-glow hover:opacity-90 active:scale-[0.98]'
    : 'bg-bg-subtle text-text-muted border border-border-default cursor-not-allowed';

  const text = label || (isOpen ? CTA_LABEL.open : CTA_LABEL.soon);

  if (isOpen) {
    return (
      <a
        href={config.url}
        target="_blank"
        rel="noopener noreferrer"
        className={`${base} ${skin} ${className}`}
      >
        {text}
      </a>
    );
  }

  return (
    <button
      type="button"
      disabled
      aria-disabled="true"
      title="Pendaftaran program ini belum dibuka"
      className={`${base} ${skin} ${className}`}
    >
      {text}
    </button>
  );
}

export default ProgramCta;
