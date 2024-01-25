import { UserButton } from "@clerk/nextjs";

export const Navbar = () => {
  return (
    <div className="w-full fixed z-100 top-0 h-14 border-b shadow-sm bg-white flex items-center justify-between px-5">
      <span className="font-bold drop-shadow">GurkhaTask</span>
      <UserButton
        afterSignOutUrl="/"
        appearance={{
          elements: {
            avatarBox: {
              height: 30,
              width: 30,
            },
          },
        }}
      />
    </div>
  );
};
