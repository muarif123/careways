
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import Navbar from "./Compo/Nav/page";
import Footer from "./Compo/Footer/page";
import ReduxLayout from "./Compo/reduxlayout/page";
import { Montserrat } from 'next/font/google'


// const inter = Inter({ subsets: ["latin"] });
const roboto = Montserrat({
  weight: '600',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  icons:{
    icon:[
      '/favicon_io (2)/favicon.ico'

    ],
    apple:[
      "/apple-touch-icon.png"
    ],
    shortcut:[
      "/apple-touch-icon.png"


    ],
    
  },
  manifest:'/site.webmanifest',
 
  title: "CareWays Systems",
  description: "CareWays-Ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  
  return (
    <html lang="en" >
      <body className={roboto.className}>
      <ReduxLayout>
      <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Navbar/>
            
           

            {children}
          
            <Footer/>
          </ThemeProvider>
            </ReduxLayout>
        
        
        </body>
    </html>
  );
}
