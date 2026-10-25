import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "CEK Platform | College of Engineering Karunagappally",
  description:
    "A student-first digital platform for College of Engineering Karunagappally: campus updates, academics, admissions and student life.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}