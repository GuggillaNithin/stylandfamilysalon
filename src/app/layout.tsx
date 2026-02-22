import "./globals.css";
import Navbar from "@/components/navbar/Navbar";


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-black">
        <Navbar />
        <main className="pt-24">{children}</main>
      </body>
    </html>
  );
}