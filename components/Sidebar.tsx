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
      name: "Tasks",
      icon: <Activity className="w-4 h-4 mr-2" />,
      link: "/dashboard/tasks",
      isActive: pathname === "/tasks",
    },
    {
      name: "Users",
      icon: <User className="w-4 h-4 mr-2" />,
      link: "/dashboard/users",
      isActive: pathname === "/users",
    },
  ];
  return (
    <>
      {routes.map((route: NavItemProps) => (
        <SidebarItems
          key={route.link}
          name={route.name}
          icon={route.icon}
          link={route.link}
          isActive={route.isActive}
        />
      ))}
    </>
  );
};

export default Sidebar;
