# Plan: Perbaiki Popup Form Otomatis Saat Reload

## Masalah
Saat halaman direload, popup form login muncul secara otomatis.

## Penyebab
Di `AuthModal.jsx`, saya menggunakan `key={isOpen ? defaultTab : undefined}` yang menyebabkan React unmount+remount komponen setiap kali modal berubah. Ini memicu flicker dan perilaku tidak stabil.

## Perbaikan

### 1. `src/components/AuthModal.jsx`

**Tambahkan `useEffect` import:**
```js
import { useState, useEffect } from 'react';
```

**Tambahkan reset form di `AuthModalContent` saat `defaultTab` berubah:**
```js
// Setelah useState declarations, tambahkan:
useEffect(() => {
  setTab(defaultTab);
  setForm({ name: '', email: '', password: '', confirmPassword: '' });
  setErrors({});
  setMessage({ type: '', text: '' });
  setEmailStatus('neutral');
  setPasswordStrength(null);
  setConfirmMatch('neutral');
}, [defaultTab]);
```

**Hapus `key` prop dari `AuthModal`:**
```js
function AuthModal({ isOpen, onClose, defaultTab = 'login', onSwitchTab }) {
  return (
    <AuthModalContent
      defaultTab={defaultTab}
      onClose={onClose}
      onSwitchTab={onSwitchTab}
    />
  );
}
```

### 2. Tidak ada perubahan lain yang diperlukan

## Verifikasi
Jalankan `npm run lint` dan `npm run build` untuk memastikan bersih.
