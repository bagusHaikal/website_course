# Design System — Infinite Learning Indonesia

> Versi: 1.1  
> Terakhir diupdate: September 2026  
> Platform: Web (Desktop + Mobile) | Dark & Light Mode

---

## 1. Color Palette

### 1.1. Brand Colors (Core)

| Token | Hex | RGB | Usage |
|---|---|---|---|
| `--color-bg-base` | `#0B0F19` | `rgb(11, 15, 25)` | Page background (dark) |
| `--color-bg-section` | `#0E0A1A` | `rgb(14, 10, 26)` | Alternating section bg (dark) |
| `--color-bg-surface` | `rgba(30,27,75,0.4)` | — | Card/panel background (glass) |
| `--color-bg-subtle` | `rgba(255,255,255,0.03)` | — | Hover states, subtle backgrounds |
| `--color-bg-footer` | `#08060F` | `rgb(8, 6, 15)` | Footer background |
| `--color-bg-input` | `rgba(30,27,75,0.5)` | — | Input fields |
| `--color-brand-purple` | `#4C1D95` | `rgb(76, 29, 149)` | Primary brand color |
| `--color-brand-violet` | `#7C3AED` | `rgb(124, 58, 237)` | Accent / CTA gradient start |
| `--color-brand-light` | `#E9D5FF` | `rgb(233, 213, 255)` | Light accent / highlight text |
| `--color-brand-accent` | `#A78BFA` | `rgb(167, 139, 250)` | Secondary accent, borders |

### 1.2. Text Colors

| Token | Dark | Light | Usage |
|---|---|---|---|
| `--color-text-primary` | `#FFFFFF` | `#0B0F19` | Headings, primary text |
| `--color-text-secondary` | `#D1D5DB` | `#374151` | Body text |
| `--color-text-muted` | `#9CA3AF` | `#6B7280` | Placeholder, secondary labels |
| `--color-text-inverse` | `#0B0F19` | `#FFFFFF` | Text on light backgrounds |

### 1.3. Border Colors

| Token | Dark | Light | Usage |
|---|---|---|---|
| `--color-border-default` | `rgba(255,255,255,0.08)` | `rgba(0,0,0,0.08)` | Default border |
| `--color-border-hover` | `rgba(167,139,250,0.3)` | `rgba(124,58,237,0.3)` | Border on hover |
| `--color-divider` | `rgba(255,255,255,0.06)` | `rgba(0,0,0,0.06)` | Section dividers |

### 1.4. Gradient Tokens

| Token | Definition |
|---|---|
| `--gradient-button` | `linear-gradient(to right, #7C3AED, #6D28D9)` |
| `--gradient-hero` | `linear-gradient(135deg, #0B0F19 0%, #2E1065 50%, #4C1D95 100%)` |
| `--gradient-text` | `linear-gradient(to right, #E9D5FF, #FFFFFF)` |
| `--gradient-card` | `linear-gradient(180deg, rgba(30,27,75,0.4) 0%, rgba(11,15,25,0.6) 100%)` |

### 1.5. Semantic Colors

| Token | Dark | Light | Usage |
|---|---|---|---|
| `--color-success` | `#22C55E` | `#22C55E` | Confirmation, completed state |
| `--color-warning` | `#F59E0B` | `#F59E0B` | Caution, pending |
| `--color-error` | `#EF4444` | `#EF4444` | Error, rejection |
| `--color-info` | `#3B82F6` | `#3B82F6` | Info state |

---

## 2. Theme 

## LOGO
- theme light : https://lms-v2.infinitelearningstudent.id/logo-black.png
- theme dark : https://lms-v2.infinitelearningstudent.id/logo-white.png

### Dark Mode (Default)
- `data-theme="dark"` atau tanpa attribute
- Background utama: `#0B0F19` (hitam kebiruan)
- Purple gradient dipakai sebagai aksen dan hero
- Glassmorphism dipakai di navbar

### Light Mode (`[data-theme="light"]`)
| Token | Value |
|---|---|
| `--color-bg-base` | `#FFFFFF` |
| `--color-bg-section` | `#F8F7FF` |
| `--color-bg-surface` | `rgba(248,245,255,0.8)` |
| `--color-bg-subtle` | `rgba(0,0,0,0.03)` |
| `--color-bg-footer` | `#F3F0FF` |
| `--color-text-primary` | `#0B0F19` |
| `--color-text-secondary` | `#374151` |
| `--color-text-muted` | `#6B7280` |
| `--color-border-default` | `rgba(0,0,0,0.08)` |
| `--color-divider` | `rgba(0,0,0,0.06)` |

**Light mode behavior:**
- Glassmorphism berubah menjadi putih transparan dengan shadow halus
- Purple accent tetap dipakai untuk CTA dan highlight
- Blob gradient tidak muncul di light mode
- Footer background: `#F3F0FF` (ungu sangat tipis)

### Theme Toggle
- Simpan preferensi di `localStorage` key: `theme`
- Auto-detect dari `prefers-color-scheme` sistem saat pertama kali load
- Tombol toggle: matahari ☀️ / bulan 🌙, posisi fixed bottom-right

---

## 3. Typography

### 3.1. Font Families

| Role | Font Family | Weights Used | Source |
|---|---|---|---|
| **Display** | `Plus Jakarta Sans` | 500, 600, 700, 800 | Google Fonts |
| **Body** | `DM Sans` | 300, 400, 500, 600 | Google Fonts |
| **Code** | `JetBrains Mono` | 400, 500 | Google Fonts |

```html
<link href="https://fonts.googleapis.com/css2?family=DM+Sans:ital,wght@0,300..600;1,300..600&family=Plus+Jakarta+Sans:wght@500;600;700;800&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
```

### 3.2. Type Scale

| Token | Size | Weight | Line Height | Letter Spacing | Usage |
|---|---|---|---|---|---|
| `--text-xs` | `0.75rem` (12px) | 400 | 1.4 | 0.025em | Caption, tag |
| `--text-sm` | `0.875rem` (14px) | 400 | 1.5 | 0.01em | Small body |
| `--text-base` | `1rem` (16px) | 400 | 1.6 | 0 | Body default |
| `--text-lg` | `1.125rem` (18px) | 400 | 1.6 | 0 | Lead text |
| `--text-xl` | `1.25rem` (20px) | 500 | 1.4 | -0.01em | H6, subtitles |
| `--text-2xl` | `1.5rem` (24px) | 500 | 1.3 | -0.01em | H5 |
| `--text-3xl` | `1.875rem` (30px) | 600 | 1.25 | -0.02em | H4 |
| `--text-4xl` | `2.25rem` (36px) | 700 | 1.2 | -0.02em | H3 |
| `--text-5xl` | `3rem` (48px) | 800 | 1.1 | -0.03em | H2 |
| `--text-6xl` | `3.75rem` (60px) | 800 | 1.05 | -0.04em | H1 desktop |
| `--text-7xl` | `4.5rem` (72px) | 800 | 1.0 | -0.04em | Hero display |

### 3.3. Responsive Scaling

```
Mobile → Desktop multiplier: 1x → 1.25x
H1:  2.5rem (mobile) → 3.75rem (desktop)
H2:  2rem   (mobile) → 3rem   (desktop)
```

---

## 4. Spacing & Layout

### 4.1. Spacing Scale (4px base)

| Token | Value | Usage |
|---|---|---|
| `--space-xs` | `0.25rem` (4px) | Tight padding |
| `--space-sm` | `0.5rem` (8px) | Small gap |
| `--space-md` | `1rem` (16px) | Default padding |
| `--space-lg` | `1.5rem` (24px) | Section gap |
| `--space-xl` | `2rem` (32px) | Large gap |
| `--space-2xl` | `3rem` (48px) | Hero padding |
| `--space-3xl` | `4rem` (64px) | Section divider |
| `--space-4xl` | `6rem` (96px) | Page section |

### 4.2. Container Max-Widths

| Breakpoint | Token | Value |
|---|---|---|
| Mobile | `--container-mobile` | `100%` (padding 16px) |
| Tablet | `--container-tablet` | `768px` |
| Desktop | `--container-desktop` | `1024px` |
| Wide | `--container-wide` | `1200px` |

### 4.3. Grid System

| Column Count | Mobile (<640px) | Tablet (640–1024px) | Desktop (>1024px) |
|---|---|---|---|
| Cards | 1 | 2 | 3–4 |
| Features | 1 | 2 | 3 |
| Alumni | 1 | 2 | 3 |

---

## 5. Border Radius

| Token | Value | Usage |
|---|---|---|
| `--radius-sm` | `0.375rem` (6px) | Tags, small badges |
| `--radius-md` | `0.75rem` (12px) | Cards, inputs |
| `--radius-lg` | `1rem` (16px) | Large cards, modals |
| `--radius-xl` | `1.5rem` (24px) | Hero sections |
| `--radius-full` | `9999px` | Avatars, pills |

---

## 6. Shadows & Effects

### 6.1. Shadow Tokens

| Token | Dark | Light | Usage |
|---|---|---|---|
| `--shadow-glow` | `0 0 40px -10px rgba(124,58,237,0.3)` | `0 0 40px -10px rgba(124,58,237,0.2)` | Purple glow behind elements |
| `--shadow-glass` | `0 8px 32px 0 rgba(0,0,0,0.3)` | `0 4px 24px 0 rgba(0,0,0,0.08)` | Glass card shadow |
| `--shadow-glow-hover` | `0 20px 40px -10px rgba(124,58,237,0.15)` | `0 20px 40px -10px rgba(124,58,237,0.1)` | Hover state on glass cards |
| `--shadow-card` | `0 4px 24px rgba(0,0,0,0.4)` | `0 4px 16px rgba(0,0,0,0.08)` | Static card elevation |

### 6.2. Glassmorphism Rules

**Gunakan glass hanya di:**
- Navbar (fixed top)
- Floating badge di Hero

**Jangan gunakan glass di:**
- Course cards (pakai solid semi-transparent)
- FAQ items (pakai border + solid bg)
- Alumni cards (pakai border + solid bg)

**Formula glass (dark):**
```css
background: rgba(30, 27, 75, 0.4);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(255, 255, 255, 0.08);
```

**Formula glass (light):**
```css
background: rgba(255, 255, 255, 0.7);
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
border: 1px solid rgba(0, 0, 0, 0.08);
```

---

## 7. Component Styles

### 7.1. Buttons

#### Primary Button (`btn-premium`)
```css
background-image: linear-gradient(to right, #7C3AED, #6D28D9);
color: #FFFFFF;
font-weight: 600;
padding: 0.75rem 1.5rem;
border-radius: var(--radius-md);
transition: transform 0.15s ease, box-shadow 0.3s ease;
position: relative;
overflow: hidden;
```
**Hover:** Shine effect kiri → kanan (`::after`). **Active:** `scale(0.95)`

#### Secondary Button (`btn-secondary`)
```css
border: 1px solid var(--color-border-default);
background: transparent;
color: var(--color-text-primary);
font-weight: 500;
padding: 0.75rem 1.5rem;
border-radius: var(--radius-md);
transition: background-color 0.3s ease, border-color 0.3s ease;
```
**Hover:** `background: var(--color-bg-subtle); border-color: var(--color-border-hover);`

### 7.2. Cards

Tanpa glass — solid semi-transparent:
```css
border: 1px solid var(--color-border-default);
background: var(--color-bg-surface);
border-radius: var(--radius-lg);
transition: border-color 0.3s ease, box-shadow 0.3s ease, transform 0.3s ease;
```
**Hover:** `border-color: var(--color-border-hover); transform: translateY(-2px); box-shadow: var(--shadow-glow-hover);`

### 7.3. Inputs
```css
background: var(--color-bg-input);
border: 1px solid var(--color-border-default);
border-radius: var(--radius-md);
color: var(--color-text-primary);
padding: 0.75rem 1rem;
font-family: var(--font-sans);
font-size: var(--text-base);
transition: border-color 0.2s ease, box-shadow 0.2s ease;
```
**Focus:** `border-color: var(--color-brand-violet); box-shadow: 0 0 0 3px rgba(124,58,237,0.2); outline: none;`  
**Placeholder:** `color: var(--color-text-muted);`

### 7.4. Badges / Tags
```css
display: inline-flex;
align-items: center;
gap: 0.25rem;
padding: 0.25rem 0.75rem;
border-radius: var(--radius-full);
font-size: var(--text-xs);
font-weight: 500;
letter-spacing: 0.025em;
text-transform: uppercase;
```

| Variant | Dark | Light |
|---|---|---|
| Default | `bg-brand-violet/15 text-brand-accent` | `bg-brand-violet/10 text-brand-violet` |
| Success | `bg-green-500/15 text-green-400` | `bg-green-500/10 text-green-600` |
| Warning | `bg-yellow-500/15 text-yellow-400` | `bg-yellow-500/10 text-yellow-600` |

### 7.5. Navigation Bar
```css
background: rgba(11, 15, 25, 0.8);
backdrop-filter: blur(16px);
border-bottom: 1px solid rgba(255, 255, 255, 0.06);
position: fixed;
top: 0;
left: 0;
right: 0;
z-index: 100;
height: 64px;
```
**Layout (1 baris):** Logo di ujung kiri → menu split 3-1 (Home, Program, Corporate | Search bar `flex-1` dominan | Program Mandiri) → theme toggle + auth di ujung kanan. Navbar full-width (edge-to-edge) dengan gutter `px-4 / sm:px-6 / lg:px-10`.
**Auto-hide:** `.nav-hidden` class → `transform: translateY(-100%)`

### 7.6. Accordion (FAQ)
Border + solid bg, bukan glass:
```css
border: 1px solid var(--color-border-default);
background: var(--color-bg-surface);
border-radius: var(--radius-md);
```
**Chevron:** Rotasi 180° saat aktif.

---

## 8. Section Background Strategy

| Section | Dark Background | Light Background |
|---|---|---|
| Hero | `bg-hero-gradient` (purple-black gradient) | `bg-hero-gradient` (tetap) |
| CourseGrid | `bg-bg-base` (#0B0F19 solid) | `bg-bg-base` (#FFFFFF solid) |
| ProgramSlider | `bg-bg-base` | `bg-bg-base` |
| Features | `bg-bg-section` (#0E0A1A ungu gelap) | `bg-bg-section` (#F8F7FF ungu terang) |
| Alumni | `bg-bg-section` | `bg-bg-section` |
| FAQ | `bg-bg-base` | `bg-bg-base` |
| CTA | `bg-hero-gradient` (highlight) | `bg-hero-gradient` (highlight) |
| Footer | `bg-bg-footer` (#08060F) | `bg-bg-footer` (#F3F0FF) |

---

## 9. Animations & Transitions

### 9.1. Keyframes

| Animation | Duration | Easing | Usage |
|---|---|---|---|
| `float` | 10s | `ease-in-out alternate` | Blob/mesh background |
| `fadeSlideUp` | 600ms | `cubic-bezier(0.16, 1, 0.3, 1)` | Reveal on scroll |
| `pulseSubtle` | 2s | `ease-in-out infinite` | Active states, indicators |
| `shimmer` | 1.5s | `linear infinite` | Skeleton loading |

**fadeSlideUp definition:**
```css
0%   { opacity: 0; transform: translateY(32px); }
100% { opacity: 1; transform: translateY(0); }
```

**float definition:**
```css
0%   { transform: translate(0, 0) scale(1); }
100% { transform: translate(20px, -20px) scale(1.1); }
```

### 9.2. Transition Curves

| Curve | Value | Usage |
|---|---|---|
| `ease-out` | `cubic-bezier(0.16, 1, 0.3, 1)` | Slide-in, fade-in (default) |
| `ease-in-out` | `cubic-bezier(0.4, 0, 0.2, 1)` | Hover transforms |
| `spring` | `cubic-bezier(0.34, 1.56, 0.64, 1)` | Bouncy micro-interactions |
| `fast` | `cubic-bezier(0.4, 0, 1, 1)` | Dismiss / collapse |

**Default transition for all interactive elements:**
```css
transition: all 200ms ease-out;
```

---

## 10. Accessibility

### 10.1. Focus States
```css
*:focus-visible {
  outline: 2px solid var(--color-brand-accent);
  outline-offset: 2px;
}
```

### 10.2. Reduced Motion
```css
@media (prefers-reduced-motion: reduce) {
  *, *::before, *::after {
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

### 10.3. Contrast Requirements

| Text | Background | Ratio | Status |
|---|---|---|---|
| `#FFFFFF` | `#0B0F19` | 15.7:1 | ✅ AAA |
| `#D1D5DB` | `#0B0F19` | 10.5:1 | ✅ AAA |
| `#9CA3AF` | `#0B0F19` | 5.3:1 | ✅ AA |
| `#A78BFA` | `#0B0F19` | 6.1:1 | ✅ AA |
| `#0B0F19` | `#FFFFFF` | 15.7:1 | ✅ AAA |
| `#374151` | `#FFFFFF` | 8.8:1 | ✅ AAA |
| `#6B7280` | `#FFFFFF` | 4.1:1 | ✅ AA |

---

## 11. Iconography

| Size | Value |
|---|---|
| XS | `16px` |
| SM | `20px` |
| MD | `24px` |
| LG | `32px` |
| XL | `48px` |

- Gunakan SVG inline dengan `currentColor` untuk pewarnaan dinamis
- Minimum touch target: `44px × 44px`

---

## 12. Responsive Breakpoints

| Breakpoint | Token | Min Width |
|---|---|---|
| Mobile | `sm` | `0px` |
| Tablet | `md` | `768px` |
| Desktop | `lg` | `1024px` |
| Wide | `xl` | `1280px` |

---

## 13. Implementation Rules

### Do's
- Selalu gunakan CSS custom properties (`var(--token)`) untuk warna
- Manfaatkan Tailwind v4 dengan `@theme` directive untuk token
- Komponen interaktif harus memiliki hover, focus, dan active state
- Glassmorphism hanya untuk navbar dan floating elements
- Hero dan CTA selalu pakai gradient ungu (baik dark maupun light mode)
- Section alternating pakai `bg-section` untuk rhythm visual

### Don'ts
- Jangan gunakan hardcoded hex di JSX — gunakan token Tailwind
- Jangan gunakan glassmorphism di course cards, alumni cards, FAQ items
- Jangan biarkan text dengan opacity < 0.6 pada background dark
- Jangan padamkan blob gradient di hero — tetap jaga atmosfer
- Jangan tumpuk lebih dari 2 glass layer

---

## 14. Blob / Mesh Background Rules

Blob digunakan **hanya** di Hero section. Aturan:
- Maksimal 2 blob per halaman
- Opacity maksimum: `0.2`
- Ukuran: minimal `400px × 400px`
- Warna: `brand-violet` atau `brand-purple`
- Animasi `float` dengan durasi minimal `8s`

---

## 15. Dark/Light Mode Switching

Theme disimpan di `localStorage` dengan key `theme`.

**Cara kerja:**
1. Saat halaman dimuat, script di `<head>` cek localStorage
2. Jika tidak ada, deteksi `prefers-color-scheme` dari sistem operasi
3. User bisa toggle manual via tombol ☀️/🌙 di bottom-right
4. Perubahan theme memicu update `data-theme` attribute di `<html>`
5. Semua komponen otomatis menyesuaikan karena menggunakan CSS tokens
