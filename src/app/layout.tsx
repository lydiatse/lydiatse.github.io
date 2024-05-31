import { Layout } from '../components';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Lydia Tse',
};

export default function RootLayout({
  // Layouts must accept a children prop.
  // This will be populated with nested layouts or pages
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
