import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";

export default async function LocaleLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
