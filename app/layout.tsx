import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/app/globals.css";
import { Footer } from "@/components/layouts/footer";
import Header from "@/components/layouts/header";
import { ThemeProvider } from "@/components/misc/(theme)/theme-provider";
import { Analytics } from "@/components/misc/analytics";
import { Toaster } from "@/components/ui/sonner";
import gradientImg from "@/public/images/gradient.webp";
import Image from "next/image";

const inter = Inter({ subsets: ["latin"] });

const info = {
  name: "arunava",
  twitter: "@vimfnx",
  description: "19yo Software Engineer, India",
  url: "https://vimfn.in",
  image: "/meta/meta.png",
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

interface ChildrenProps {
  readonly children: React.ReactNode;
}

export default function RootLayout({ children }: ChildrenProps) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container max-w-3xl mx-auto min-h-screen flex flex-col px-4 py-5">
            <div className="flex-1">
              <Header />
              {children}
            </div>
            <Footer />
            <Image
              className="absolute left-0 md:left-1/2 top-0 -z-10 -translate-x-1/2 lg:scale-100 object-cover w-full"
              src={gradientImg}
              role="presenation"
              alt="Gradient background"
              priority
            />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
      <Analytics />
      <link
        href="/favicons/favicon-light.ico"
        rel="icon"
        media="(prefers-color-scheme: light)"
      />
      <link
        href="/favicons/favicon-dark.ico"
        rel="icon"
        media="(prefers-color-scheme: dark)"
      />
    </html>
  );
}
