import Footer from "@/components/footer/Footer";
import HeaderRender from "@/components/header/HeaderRender";
import Hero from "@/components/main/hero/Hero";
import About from "@/components/main/sections/about/AboutUs";
import Contact from "@/components/main/sections/Contact";
import Expertises from "@/components/main/sections/expertises/Expertises";
import Feedbacks from "@/components/main/sections/feedbacks/Feedbacks";
import Services from "@/components/main/sections/servicesOffered/Services";

export default function Home() {
  return (
  <>
    <HeaderRender/>
    <Hero/>
    <Expertises/>
    <Services/>
    <About/>
    <Feedbacks/>
    <Contact/>
    <Footer/>
  </>
  );
}
