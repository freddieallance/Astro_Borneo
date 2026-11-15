import type {Metadata} from 'next';
import './globals.css'; // Global styles

export const metadata: Metadata = {
  title: 'AstroBorneo | Mission Survival Academy',
  description:
    'Interactive Moonbase survival mission academy featuring NASA RadLab, NASA OSDR-314, and CSA space science resources.',
  openGraph: {
    title: 'AstroBorneo | Mission Survival Academy',
    description:
      'Interactive Moonbase survival mission academy featuring NASA RadLab, NASA OSDR-314, and CSA space science resources.',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'AstroBorneo | Mission Survival Academy',
    description:
      'Interactive Moonbase survival mission academy featuring NASA RadLab, NASA OSDR-314, and CSA space science resources.',
  },
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en" className="h-full">
      <body
        suppressHydrationWarning
        className="m-0 h-full overflow-hidden bg-[#151b42]"
      >
        {children}
      </body>
    </html>
  );
}
