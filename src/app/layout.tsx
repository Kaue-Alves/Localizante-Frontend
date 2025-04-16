import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
    <html lang="pt-br"
      // data-theme="dark"
    >
      <body>
        {children}
      </body>
    </html>
  );
}
