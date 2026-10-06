export const navMenu = [
  { label: 'Home', href: '/' },
  { label: 'Program', dropdown: [
    { label: 'Bootcamp', href: '/bootcamp' }, { label: 'Workshop', href: '/workshop' },
    { label: 'Belajar Mandiri', href: '/belajar-mandiri' }, { label: 'Lihat Semua Program', href: '/all-programs' }
  ]},
  { label: 'Corporate', dropdown: [
    { label: 'Corporate Training', href: '/corporate-training' }, { label: 'Partnership', href: '/partnership' },
    { label: 'Hire Our Graduates', href: '/hire-our-graduates' }
  ]},
  { label: 'Program Mandiri', href: '/program-mandiri', sideRight: true }
];

export const footerLinks = {
  program: [
    { label: 'Bootcamp', href: '/bootcamp' },
    { label: 'Workshop', href: '/workshop' },
    { label: 'Belajar Mandiri', href: '/belajar-mandiri' },
    { label: 'Lihat Semua Program', href: '/all-programs' }
  ],
  corporate: [
    { label: 'Corporate Training', href: '/corporate-training' },
    { label: 'Partnership', href: '/partnership' },
    { label: 'Hire Our Graduates', href: '/hire-our-graduates' }
  ],
  mandiri: [
    { label: 'Website Development', href: '#' },
    { label: 'Mobile Development', href: '#' },
    { label: 'Artificial Intelligence', href: '#' }
  ]
};

export const contactLinks = {
  phone: { label: '+62 823 8759 7266', href: 'tel:+6282387597266' },
  email: { label: 'info@infinitelearning.id', href: 'mailto:info@infinitelearning.id' }
};
