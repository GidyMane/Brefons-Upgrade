export function formatMenus(menus) {

    const menuMap = new Map();

    menus.forEach(row => {
        console.log(row)
        if (!menuMap.has(row.menu_id)) {
            menuMap.set(row.menu_id, {
                id: row.menu_id,
                name: row.menu_name,
                icon: row.icon,
                items: []
            });
        }

        const menu = menuMap.get(row.menu_id);
        const menuItem = menu.items.find(item => item.id === row.item_id);

        if (!menuItem) {
            menu.items.push({
                id: row.item_id,
                name: row.item_name,
                gif: row.gif,
                fallback: row.fallback,
                link: row.link,
            });
        }

    });

    return Array.from(menuMap.values());
}

export function formatDate(dateString) {
    // Parse the date string
    const date = new Date(dateString);
  
    // Extract the individual components
    const day = String(date?.getUTCDate())?.padStart(2, "0");
    const month = String(date?.getUTCMonth() + 1)?.padStart(2, "0"); // Months are zero-indexed
    const year = date.getUTCFullYear();
    const hours = String(date?.getUTCHours())?.padStart(2, "0");
    const minutes = String(date?.getUTCMinutes())?.padStart(2, "0");
    const seconds = String(date?.getUTCSeconds())?.padStart(2, "0");
  
    // Format the date and time parts
    const formattedDate = `${day}/${month}/${year}`;
    const formattedTime = `${hours}:${minutes}:${seconds}`;
  
    // Combine the date and time parts
    return `${formattedDate} ${formattedTime}`;
  }