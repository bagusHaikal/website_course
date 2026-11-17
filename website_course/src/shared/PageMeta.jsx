import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { titleForPath } from '../data/pageTitles';

// Menyetel `document.title` per route. Hanya `<title>` — `description` dan
// `og:*` tetap statis dari `index.html`.
//
// Catatan: ini tidak menolong crawler yang tidak menjalankan JS. Manfaat
// nyatanya tab browser & hasil pencarian Google yang membedakan tiap halaman.
function PageMeta() {
  const { pathname } = useLocation();

  useEffect(() => {
    document.title = titleForPath(pathname);
  }, [pathname]);

  return null;
}

export default PageMeta;
