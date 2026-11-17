import { lazy } from 'react';

// §5.1 Code splitting — deklarasi komponen lazy.
//
// Dipisah dari `routes.jsx` karena `react-refresh/only-export-components`:
// file yang mengekspor non-komponen (`routes`) tidak boleh sekaligus
// mendefinisikan komponen. Di sini semua ekspor adalah komponen, jadi aturan
// itu terpenuhi tanpa `eslint-disable`.
//
// `Home` TIDAK ada di sini — sengaja tetap eager di `routes.jsx` karena itu
// halaman pertama yang dilihat semua orang; memecahnya hanya menambah satu
// round-trip sebelum konten pertama tampil.

export const ProgramMandiri = lazy(() => import('./program-mandiri'));
export const Bootcamp = lazy(() => import('./bootcamp'));
export const Workshop = lazy(() => import('./workshop'));
export const BelajarMandiri = lazy(() => import('./belajar-mandiri'));
export const AllPrograms = lazy(() => import('./all-programs'));
export const Partnership = lazy(() => import('./partnership'));
export const HireOurGraduates = lazy(() => import('./hire-graduates'));
export const CourseDetail = lazy(() => import('./courses/CourseDetail'));
export const Cart = lazy(() => import('./cart'));
export const CorporateTraining = lazy(() => import('./corporate-training'));
export const Login = lazy(() => import('./login'));
export const Register = lazy(() => import('./register'));
export const FullStackWeb = lazy(() => import('./fullstack-web'));
export const MobileDev = lazy(() => import('./mobile-dev'));
export const AIDev = lazy(() => import('./ai-dev'));
