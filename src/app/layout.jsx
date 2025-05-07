import "./globals.css";

export const metadata = {
  title: "Ritesh Enterprises",
  description: "Ritesh Enterprises is a leading provider of high-quality products and services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
