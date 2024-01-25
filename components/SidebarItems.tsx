import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

export interface NavItemProps {
  name: string;
  icon: any;
  link: string;
  isActive: boolean;
}

const SidebarItems = ({ name, icon, link, isActive }: NavItemProps) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "flex items-center gap-x-2 p-4 mb-1 text-neutral-700 rounded-md hover:bg-neutral-500/10 transition  text-start no-underline hover:no-underline",
        isActive && "bg-sky-500/10 text-sky-700"
      )}
      onClick={() => router.push(link)}
    >
      {icon}
      {name}
    </div>
  );
};

export default SidebarItems;
