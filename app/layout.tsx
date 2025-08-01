import "@/styles/globals.css";
import {Metadata} from "next";

import {siteConfig} from "@/config/site";
// import { fontSans } from "@/lib/fonts"
import {cn} from "@/lib/utils";
import {SiteHeader} from "@/components/site-header";
import Footer from "@/components/Footer";
import {TailwindIndicator} from "@/components/tailwind-indicator";
import {ThemeProvider} from "@/components/theme-provider";
import {Toaster} from "@/components/ui/toaster";

// export const metadata: Metadata = {
//   title: {
//     default: siteConfig.name,
//     template: `%s - ${siteConfig.name}`,
//   },
//   description: siteConfig.description,
//   themeColor: [
//     {media: "(prefers-color-scheme: light)", color: "white"},
//     {media: "(prefers-color-scheme: dark)", color: "black"},
//   ],
//   icons: {
//     icon: "/favicon.ico",
//     shortcut: "/favicon-16x16.png",
//     apple: "/apple-touch-icon.png",
//   },
// };

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({children}: RootLayoutProps) {
  return (
    <>
      <html lang="en" suppressHydrationWarning>
        <head />
        <body className={cn("min-h-screen bg-white font-sans antialiased")}>
          <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
            <div className="relative flex min-h-screen flex-col">
              <SiteHeader />
              <div className="flex-1">{children}</div>
              <Footer />
            </div>
            <Toaster />
            {/* <TailwindIndicator /> */}
          </ThemeProvider>
        </body>
      </html>
    </>
  );
}
