import "./globals.css";
import { Providers } from "./providers";

export const metadata = {
  title: "Tailwindcss + Chakara UI Form Validation tests",
  description: "Nothing in here",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-poppins">
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
