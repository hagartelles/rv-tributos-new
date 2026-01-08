import Footer from "@/components/footer/Footer";
import HeaderRender from "@/components/header/HeaderRender";
import HeroMobile from "@/components/main/hero/Hero";
import Contact from "@/components/main/sections/Contact";
import Expertises from "@/components/main/sections/Expertises";
import Feedbacks from "@/components/main/sections/Feedbacks";
import Services from "@/components/main/sections/Services";

export default function Home() {
  return (
  <>
    <HeaderRender/>
    <HeroMobile/>
    <Expertises/>
    <Services/>
    <Feedbacks/>
    <Contact/>
    <Footer/>
  </>
  );
}
