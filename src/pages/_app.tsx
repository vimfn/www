import siteMetadata from "data/siteMetadata";
import "katex/dist/katex.css";
import { DefaultSeo, SocialProfileJsonLd } from "next-seo";
import { ThemeProvider } from "next-themes";
import type { AppProps } from "next/app";
import Analytics from "src/components/analytics";
import seo from "src/seo.config";
import "src/styles/globals.css";
import "src/styles/prism.css";
import LayoutWrapper from "../components/LayoutWrapper";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="theme-first"
      themes={["theme-first", "theme-second"]}
    >
      <LayoutWrapper>
        <DefaultSeo {...seo} />
        <Component {...pageProps} />
        <Analytics />
        <SocialProfileJsonLd
          type="Person"
          name={siteMetadata.author}
          url={siteMetadata.siteUrl}
          sameAs={[siteMetadata.instagram, siteMetadata.twitter]}
        />
      </LayoutWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
