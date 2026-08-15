import Cadastro from "@/components/Cadastro";
import DockSocial from "@/components/DockSocial";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Cadastro />
      </main>
      <Footer />
      <DockSocial />
    </>
  );
}
