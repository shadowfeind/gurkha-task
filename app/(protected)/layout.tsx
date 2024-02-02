import { Navbar } from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <div className="flex mt-16">
          <div className="w-64 shrink-0 px-4 hidden md:block ">
            <Sidebar />
          </div>
          {children}
        </div>
      </body>
    </html>
  );
}
