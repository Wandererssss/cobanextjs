import { Suspense } from "react";

// Next.js 16 (Cache Components): useParams() di Client Component harus
// dibungkus <Suspense> supaya `npm run build` / deploy tidak error.
export default function Layout({ children }) {
  return <Suspense fallback={<p>Memuat...</p>}>{children}</Suspense>;
}
