import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import theme from "@/app/getLPTheme";
import CssBaseline from '@mui/material/CssBaseline';
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider theme={ theme }>
          <CssBaseline />
          <NavBar>
            {children}
          </NavBar>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
