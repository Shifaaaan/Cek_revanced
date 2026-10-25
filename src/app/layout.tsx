import type { Metadata } from "next";
import { Source_Serif_4, Public_Sans } from "next/font/google";
import "./globals.css";
const serif = Source_Serif_4({ subsets: ["latin"], variable: "--font-serif", display: "swap" });
const sans = Public_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });
export const metadata: Metadata = { title: { default: "College of Engineering Karunagappally", template: "%s · CEK" }, description: "College of Engineering Karunagappally, Kollam, Kerala — under IHRD and affiliated to APJ Abdul Kalam Technological University." };
export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) { return <html lang="en" className={`${serif.variable} ${sans.variable}`}><body><a className="skip" href="#main">Skip to main content</a>{children}</body></html>; }