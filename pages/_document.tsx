import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Work+Sans:ital,wght@0,500;1,500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>
      <body
        className="bg-gradient-to-r to-orange-500 from-red-700"
        style={{ animation: "animate-backroung 1s infinite ease-in-out" }}
      >
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
