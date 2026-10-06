# Plan: Case Studies Hover Effect - Full Image on Hover

## Target
Di halaman "Hire our graduates", bagian "Kasus Nyata" (Case Studies), saat user hover ke kartu, gambar harus full-screen menutupi seluruh kartu dengan judul partner.

## Files to Modify

### 1. `src/hire-graduates/data.js`
Tambahkan field `image` ke setiap case study:
```js
export const caseStudies = [
  { id: 'airbus', monogram: 'AIR', partner: 'Airbus', role: 'Augmented Resources', description: '...', image: 'https://images.unsplash.com/photo-1540979388789-6cee28a1cdc9?w=600&q=80' },
  { id: 'satnusa', monogram: 'SAT', partner: 'SatNusa', role: 'Hiring Partner', description: '...', image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=80' },
];
```

### 2. `src/hire-graduates/components/CaseStudiesSection.jsx`
Rewrite `CaseCard` component:

**Struktur baru:**
- `<article>` tetap punya `overflow-hidden` dan class `group`
- **Overlay layer** (z-20, absolute inset-0): gambar full + gradient overlay + judul partner → muncul saat `opacity-100 group-hover:opacity-100`
- **Content layer** (原来的内容): tetap ada, tapi jadi `opacity-0 group-hover:opacity-0` + transition duration 300ms

**Detail overlay:**
```jsx
{/* Hover overlay */}
<div className="absolute inset-0 z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
  <img src={cs.image} alt={cs.partner} className="absolute inset-0 w-full h-full object-cover" />
  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
  <div className="relative z-10 mt-auto p-6 sm:p-8">
    <span className="inline-block px-2.5 py-1 rounded-full bg-brand-violet/30 text-brand-accent text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-sm">{cs.role}</span>
    <h3 className="font-display font-extrabold text-2xl md:text-3xl text-white leading-tight">{cs.partner}</h3>
  </div>
</div>
```

**Content layer** — tambahkan `transition-opacity duration-300 group-hover:opacity-0`

## How It Works
- Default: left panel (gradient monogram) + right text content visible
- Hover: overlay fades in covering entire card with full image + gradient + title, text fades out
- Both transitions are 300ms for smooth effect

## Images
Using Unsplash placeholder URLs (user can replace later):
- Airbus: office/corporate building photo
- SatNusa: team collaboration photo
