import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata: Metadata = {
  title: "Disney+ Clone",
  description: "For educational purposes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="bg-white dark:bg-[#1A1C29]">
      <ThemeProvider
            attribute="class"
            defaultTheme="dark"
            enableSystem
            disableTransitionOnChange
          >
        < Header />
        {children}
      </ThemeProvider>
      </body>
    </html>
  );
}
