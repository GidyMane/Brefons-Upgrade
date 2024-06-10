
import React from 'react';
import Link from "next/link";
import Header from "@/app/header";
import Footer from "@/app/footer";
import Hero from "@/app/hero";

const Home: React.FC<any> = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex-1">
        <Hero/>
        {/* <Link href={"brefons.console"} className="bg-black text-white px-3 py-2 mt-4 rounded-md">go to dashboard</Link> */}
      </div>
      <Footer />
    </div>
  );
}

export default Home;