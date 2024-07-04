import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import Footer from "@/components/footer/Footer";
// import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "DigitalVault",
  description: "for sale all product",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main>
        {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
