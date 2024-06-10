"use server";
import { Options } from "@/app/api/auth/[...nextauth]/options";
import axios from "axios";
import { getServerSession } from "next-auth";

export const menus = async ({ role }: { role: string }) => {
  // get sesion
  const session = await getServerSession(Options);

  if (session?.user) {
    const response = await fetch(
      `${process.env.NEXTAUTH_URL}/api/adminrole?getAdmins=${role}`,
      {
        method: "GET",
        next: { tags: ["menus"] },
      }
    );

    // console.log(response)
    const data = await response.json();

    if (response.status == 200) {
      return data.role;
    }

    return [];
  }
};
