import { Source_Code_Pro } from "@next/font/google";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="sv" className={sourceCodePro.className}>
      <body>{children}</body>
    </html>
  );
}
