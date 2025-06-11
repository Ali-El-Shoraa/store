import FooterDown from "./FooterDown";
import QuickMenu from "./QuickMenu";
import InformationCompany from "./InformationCompany";
import FooterAbout from "./FooterAbout";
import FooterSubscribe from "./FooterSubscribe";

export default async function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-100">
      <div className="container py-12 flex gap-10 max-xl:grid grid-cols-2 max-md:grid-cols-1">
        <div className="w-1/4 max-xl:w-full">
          <FooterAbout />
        </div>

        <div className="w-1/4 max-xl:w-full">
          <QuickMenu />
        </div>

        <div className="w-1/4 max-xl:w-full max-w-fit">
          <InformationCompany />
        </div>

        <div className="w-1/4 max-xl:w-full">
          <FooterSubscribe />
        </div>
      </div>
      <FooterDown />
    </footer>
  );
}
