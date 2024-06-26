import { ThemeProvider } from "@/features/theme/ThemeProvider";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "react-hot-toast";
import { ReactQueryClientProvider } from "./clientProviders/ReactQueryClientProvider";
import RecoilContextProvider from "./clientProviders/RecoilContextProvider";
import "./globals.css";


const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Ecohesens espace client",
  description: "Generated by create next app",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ReactQueryClientProvider>
      <html lang="en">
        <head>
          <link rel="favicon" href="/favicon.ico" />
        </head>
        <body className={inter.className}>

          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <RecoilContextProvider>
              {children}
              <Toaster position="bottom-right" />
            </RecoilContextProvider>
          </ThemeProvider>
        </body>

      </html>
    </ReactQueryClientProvider>


  );
}
