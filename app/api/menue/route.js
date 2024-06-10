import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import url from "url";
export async function GET(req, res) {
  // const { query } = url.parse(req.url, true);
  // const { county, componentid, units, agencies, periods } = query;

  const cookieStore = cookies();
  const supabase = createRouteHandlerClient({ cookies: () => cookieStore });

  let { data: menu, error } = await supabase.from("menu_role_view").select("*");

  function formatMenus(menus) {
    const menuMap = new Map();

    menus.forEach(row => {
        if (!menuMap.has(row.menu_id)) {
            menuMap.set(row.menu_id, {
                id: row.menu_id,
                name: row.menu_name,
                icon: row.menu_icon,
                items: []
            });
        }

        const menu = menuMap.get(row.menu_id);
        const menuItem = menu.items.find(item => item.id === row.menu_item_id);

        if (!menuItem) {
            menu.items.push({
                id: row.menu_item_id,
                name: row.menu_item_name,
                gif: row.gif,
                fallback: row.fallback,
                link: row.link,
                active: row.menu_item_active,
                roles: []
            });
        }

        if (row.role_name) {
            menu.items.find(item => item.id === row.menu_item_id).roles.push({
                role: row.role_name,
                active: row.role_menu_item_active
            });
        }
    });

    return Array.from(menuMap.values());
}

let mn = formatMenus(menu)
  return NextResponse.json({ menu:mn}, { status: 200 });
}
