import "./globals.css";

export const metadata = {
  title: "Ritesh Enterprises",
  description: "Ritesh Enterprises is a leading provider of high-quality products and services.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="hydrated">
      <body
        className={`antialiased`}
        data-new-gr-c-s-check-loaded="14.1234.0" data-gr-ext-installed=""
      >
        {children}
      </body>
    </html >
  );
}
