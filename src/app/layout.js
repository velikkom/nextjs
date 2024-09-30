export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <h1>HEADER</h1>
        {children}
        <h3>Footer</h3>
      </body>
    </html>
  );
}
