import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'DJ Dan',
  description: 'Tour dates, music links, and more from DJ Dan!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
