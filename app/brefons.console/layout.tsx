import type { Metadata } from "next";
import SideBar from "@/components/Layout/SideBar";
import Navbar from "@/components/Layout/Navbar";

import ReduxUiProvider from "@/Redux/ReduxUiProvider";
import BreadCrumb from "@/components/Layout/BreadCrumb";
import Footer from "../footer";
import NavBar from "@/components/Layout/Navbar";
import Side from "@/components/Layout/Side";
import Nav from "@/components/Layout/Nav";
import { menus } from "@/ServerActions/menu";
import { getServerSession } from "next-auth";
import NextSessionProvider from "../SessionProvider";
import AsideBar from "@/components/Layout/Aside";
import { Options } from "../api/auth/[...nextauth]/options";

export const metadata: Metadata = {
  title: "BREFONS",
  description:
    "Program to Build Resilience for Food and Nutrition Security in the Horn of Africa (BREFONS)",
};

const Layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  const session = await getServerSession(Options);

  let menudata = await menus({ role: session?.user.group ?? "" })

  // console.log("menue data",menudata)
  return (
    <div className="h-[100vh] flex w-full relative  rounded-md">
      <ReduxUiProvider>
        <NextSessionProvider>
        <AsideBar menudata={menudata} session={session}>
          {children}
        </AsideBar>
        </NextSessionProvider>
      </ReduxUiProvider>
    </div>
  );
};

export default Layout;
