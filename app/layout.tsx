import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "TryUrLuck — Make your next customer a sure thing",
  description:
    "GrowDesk helps independent businesses capture leads, stay on top of follow-ups, and turn more conversations into customers.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
