import { Source_Code_Pro } from "@next/font/google";
import Head from "next/head";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={sourceCodePro.className}>
      <Head>
        <title>williameliasson-dev</title>
      </Head>
      <body>{children}</body>
    </html>
  );
}
