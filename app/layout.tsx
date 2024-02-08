import '@/nextjs-dashboard/app/ui/global.css';

import { inter } from '@/nextjs-dashboard/app/ui/fonts';
 
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
       <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  );
}