import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import "aos/dist/aos.css";
import { Toaster } from 'sonner'


const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});


export const metadata: Metadata = {
  title: "4WheelsCar - Know Before You Go. Complete Vehicle History at Your Fingertips.",
  description: "Begin with Finding Your Car. Search by vehicle identification number (VIN) or US license plate to find the car you want to research.",
  keywords: 'car reports, car reviews, automotive news, vehicle comparisons, car buying guide, new cars, used cars, auto industry',
  applicationName: '4WheelsCar',
  authors: [{ name: '4WheelsCar Team' }],
  creator: '4WheelsCar Team',
  publisher: '4WheelsCar',

  openGraph: {
    title: '4WheelsCar - Your Ultimate Source for Car Reports & Reviews',
    description: 'Discover in-depth car reports, expert reviews, latest news, and buying guides for all vehicle types at 4WheelsCar.',
    url: 'https://4wheelscar.com', // Your main domain
    siteName: '4WheelsCar',
    images: [
      {
        url: 'https://4wheelscar.com/feature.png', // Path to your default OG image in public/
        width: 1200,
        height: 630,
        alt: '4WheelsCar - Automotive Reports & Reviews',
      },
      // You can add multiple images for different sizes/purposes
    ],
    locale: 'en_US',
    type: 'website',
  },

  // Twitter Card tags
  twitter: {
    card: 'summary_large_image',
    title: '4WheelsCar - Car Reports & Reviews',
    description: 'Discover in-depth car reports, expert reviews, latest news, and buying guides for all vehicle types at 4WheelsCar.',
    images: ['https://4wheelscar.com/feature.png'], // Path to your default Twitter image in public/
    creator: '@4wheelscar_handle', // Replace with your actual Twitter handle if you have one
  },

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
        <Toaster position="top-center" />
      </body>
    </html>
  );
}
