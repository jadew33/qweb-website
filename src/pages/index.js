import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import About from "@/components/about";
import Footer from "@/components/footer";
import Process from "@/components/process";
import TechStack from "@/components/tech-stack";
import Contact from "@/components/contact-us";
import Projects from "@/components/Past-Projects/projects";
import Icons from "@/Components/icons";

const inter = Inter({ subsets: ["latin"] });

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
      {/* <a id="top"></a> */}
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
