"use client";

import { Activity, User } from "lucide-react";
import SidebarItems, { NavItemProps } from "./SidebarItems";
import { usePathname } from "next/navigation";

interface storageProps {
  storageKey?: string;
}

const Sidebar = ({ storageKey = "sidebar-state" }: storageProps) => {
  const pathname = usePathname();

  const routes = [
    {
      name: "Users",
      icon: <User className="w-4 h-4 mr-2" />,
      link: "/users",
      isActive: pathname === "/users",
    },
    {
      name: "Tasks",
      icon: <Activity className="w-4 h-4 mr-2" />,
      link: "/tasks",
      isActive: pathname === "/tasks",
    },
  ];
  return (
    <div>
      {routes.map((route: NavItemProps) => (
        <>
          <SidebarItems
            key={route.link}
            name={route.name}
            icon={route.icon}
            link={route.link}
            isActive={route.isActive}
          />
        </>
      ))}
    </div>
  );
};

export default Sidebar;
