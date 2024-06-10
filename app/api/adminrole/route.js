import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import url from "url";
export async function GET(req, res) {
  const { query } = url.parse(req.url, true);
  const { getAdmins } = query;

  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });
  const { data, error: yu } = await supabase.rpc("get_menu_for_role", {
    p_role_name: getAdmins,
  });

 

  const groupByMenuName = (data) => {
    const groupedData = data.reduce((acc, item) => {
      const { menu_name, icon, item_name, gif, fallback, link } = item;
  
      let menuGroup = acc.find(group => group.name === menu_name);
  
      if (!menuGroup) {
        menuGroup = {
          name: menu_name,
          menuItems: [],
          icon: icon
        };
        acc.push(menuGroup);
      }
  
      menuGroup.menuItems.push({
        gif: gif,
        fallback: fallback,
        name: item_name,
        link: link
      });
  
      return acc;
    }, []);
  
    return groupedData;
  };
  const popo = groupByMenuName(data)

  const renameAnnualTargetToActivities = (popo) => {
    return popo.map(item => {
      const { menuItems, ...rest } = item;  // Destructure to separate annual_target from other properties
      return { ...rest, items: menuItems };  // Create a new object with the renamed key
    });
  };

  const dataa = renameAnnualTargetToActivities(popo)

  return NextResponse.json({ role: dataa }, { status: 200 });
}
