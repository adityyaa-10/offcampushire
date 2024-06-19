import "./globals.css";

import { GeneralRegular } from "@/utils/fonts";
import Navbar from "@/components/Navbar/Navbar";
import ProgressProvider from "@/providers/ProgressProvider";

export const metadata = {
  title: "OffCampusHire",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GeneralRegular.className}>
        <Navbar />
        <ProgressProvider>
          {children}
        </ProgressProvider>
      </body>
    </html>
  );
}
