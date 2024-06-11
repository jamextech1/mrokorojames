import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Fragment } from "react";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <DefaultSeo
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://okorojames.vercel.app",
          siteName: "Okoro James",
        }}
        twitter={{
          handle: "@okorojames_",
          site: "@okorojames_",
          cardType: "summary_large_image",
        }}
        canonical="https://okorojames.vercel.app"
        title="Okoro James"
      />
      <Component {...pageProps} />
    </Fragment>
  );
}
