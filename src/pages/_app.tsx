import "@/styles/globals.css";
import type { AppProps } from "next/app";
import localFont from "next/font/local";

const suisse = localFont({
  variable: "--font-suisse",
  src: [
    {
      path: "../fonts/SuisseIntl-Thin.otf",
      weight: "200",
      style: "normal",
    },

    {
      path: "../fonts/SuisseIntl-Light.ttf",
      weight: "300",
      style: "normal",
    },

    {
      path: "../fonts/SuisseIntl-SemiBold.ttf",
      weight: "600",
      style: "normal",
    },

    {
      path: "../fonts/SuisseIntl-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={suisse.variable}>
      <Component {...pageProps} />;
    </main>
  );
}
