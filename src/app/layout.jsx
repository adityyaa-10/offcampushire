import "./globals.css";

import { GeneralRegular } from "@/utils/fonts";

export const metadata = {
  title: "OffCampusHire",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeneralRegular.className}>{children}</body>
    </html>
  );
}
