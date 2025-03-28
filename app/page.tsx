import Image from "next/image";
import Navbar from "@/components/Navbar";
import HomeComponent from "@/components/HomeComponent";
import Features from "@/components/Features";
import Working from "@/components/Working";
import Footer from "@/components/Footer";


export default function Home() {
  return (
    <div className="w-screen h-screen">
      <Navbar />
      <HomeComponent/>
      <Features/>
      <Working/>
      <Footer/>
    </div>
  );
}
