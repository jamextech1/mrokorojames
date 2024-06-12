import { Navbar } from "@/components/navbar/navbar";
import { QueryProvider } from "@/providers/query-provider";
import "@/styles/globals.css";
import { DefaultSeo } from "next-seo";
import type { AppProps } from "next/app";
import { Fragment } from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Fragment>
      <DefaultSeo
        title="Okoro James"
        description="Okoro James's portfolio site"
        canonical="https://okorojames.vercel.app"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://okorojames.vercel.app",
          siteName: "Okoro James",
          title: "Okoro James",
          description: "Okoro James's portfolio site",
          profile: {
            firstName: "Okoro",
            lastName: "James",
            gender: "male",
            username: "okorojames_",
          },
          images: [
            {
              url: "https://okorojames.vercel.app/site-preview.png",
              width: 800,
              height: 600,
              alt: "Og Image Alt",
              type: "image/jpeg",
            },
            {
              url: "https://okorojames.vercel.app/site-preview.png",
              width: 900,
              height: 800,
              alt: "Og Image Alt Second",
              type: "image/jpeg",
            },
            { url: "https://okorojames.vercel.app/site-preview.png" },
            { url: "https://okorojames.vercel.app/site-preview.png" },
          ],
        }}
        twitter={{
          handle: "@okorojames_",
          site: "@okorojames_",
          cardType: "summary_large_image",
        }}
      />
      <Navbar />
      <QueryProvider>
        <ToastContainer />
        <Component {...pageProps} />
      </QueryProvider>
    </Fragment>
  );
}
