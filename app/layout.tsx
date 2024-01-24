import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { ThemeProvider } from "@/components/misc/theme-provider";
import Header from "@/components/layouts/header";
import { Footer } from "@/components/layouts/footer";
import Image from "next/image";
import Analytics from "@/components/misc/Analytics";

const inter = Inter({ subsets: ["latin"] });

const info = {
  name: "Arunava Ghosh",
  twitter: "@arnvgh",
  description: "19yo Software Engineer, India",
  url: "https://arnvgh.me",
  image: "/meta.png",
};

export const metadata: Metadata = {
  metadataBase: new URL(info.url),
  title: info.name,
  description: info.description,
  authors: {
    name: info.name,
    url: info.url,
  },
  creator: info.name,
  openGraph: {
    type: "website",
    url: info.url,
    title: info.name,
    description: info.description,
    images: info.image,
  },
  twitter: {
    card: "summary_large_image",
    title: info.name,
    description: info.description,
    creator: info.twitter,
    images: info.image,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className} suppressHydrationWarning>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container max-w-2xl mx-auto min-h-screen flex flex-col px-4 py-5">
            <div className="flex-1">
              <Header />
              {children}
            </div>
            <Footer />
            <Image
              width={1512}
              height={550}
              className="absolute left-0 md:left-1/2 top-0 -z-10 -translate-x-1/2 scale-150 md:scale-100 object-cover w-full md:w-auto"
              src="/gradient.webp"
              alt="Gradient background"
              priority
            />
          </div>
        </ThemeProvider>
      </body>
      <Analytics />
      <link
        href="/favicon-light.ico"
        rel="icon"
        media="(prefers-color-scheme: light)"
      />
      <link
        href="/favicon-dark.ico"
        rel="icon"
        media="(prefers-color-scheme: dark)"
      />
    </html>
  );
}
