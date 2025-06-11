import Footer from "@/components/footer/Footer";
import Navbar from "@/components/navbar/Navbar";

export default async function LocaleLayout({ children }) {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
}
