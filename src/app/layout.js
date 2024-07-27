import { Inter } from "next/font/google";
import Head from 'next/head';
import "./globals.css";
// import '../../public/favicon.ico'

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Abraham Renovations",
  // description: "This is a description of my Next.js app",
  favicon: "favicon.ico",
  description: ''
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="icon" href={metadata.favicon} />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
