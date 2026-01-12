import Footer from "@/components/footer/Footer";
import HeaderRender from "@/components/header/HeaderRender";
import Hero from "@/components/main/hero/Hero";
import About from "@/components/main/sections/about/AboutUs";
import Contact from "@/components/main/sections/Contact";
import Expertises from "@/components/main/sections/expertises/Expertises";
import Feedbacks from "@/components/main/sections/feedbacks/Feedbacks";
import Services from "@/components/main/sections/servicesOffered/Services";
import ScrollReveal from "@/ui/ScrollReveal";

export default function Home() {
  return (
    <>
      <div className="w-full overflow-x-hidden">
        <HeaderRender />
        <Hero />
        <ScrollReveal direction="left">
          <Expertises />
        </ScrollReveal>
        <ScrollReveal direction="right">
          <Services />
        </ScrollReveal>
        <About />
        <ScrollReveal direction="right">
          <Feedbacks />
        </ScrollReveal>
        <Contact />
        <Footer />
      </div>
    </>
  );
}