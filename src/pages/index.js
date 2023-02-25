import Head from "next/head";
import Navbar from "@/Components/navbar";
import Hero from "@/Components/hero";
import About from "@/Components/about";
import Footer from "@/Components/footer";
import Process from "@/Components/process";
import TechStack from "@/Components/tech-stack";
import Contact from "@/Components/contact-us";
import Projects from "@/Components/Past-Projects/projects";
import Icons from "@/Components/icons";

export default function Home() {
  return (
    <>
      <Head>
        <title>QWeb Website</title>
        <meta
          name="description"
          content="Web Development Club @ Queen's run by students for students!"
        />
        <meta
          name="viewport"
          content="widths=device-width, initial-scale=1.0"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <Hero />
      <About />
      <Process />
      <TechStack />
      <Projects />
      <Contact />
      <Icons />
      <Footer />
    </>
  );
}
