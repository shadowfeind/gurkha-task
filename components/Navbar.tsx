import MobileSidebar from "./MobileSidebar";

export const Navbar = () => {
  return (
    <div className="w-full fixed z-100 top-0 h-14 border-b shadow-sm bg-white flex items-center justify-between px-5">
      <MobileSidebar />
      <span className="font-bold drop-shadow">GurkhaTask</span>
      <span>User</span>
    </div>
  );
};
