import { useState } from "react";
import { Outlet } from "react-router";

import MobileNavbar from "../mobile/navbar";
import Sidebar from "../mobile/sidebar";

export default function MobileMainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-dvw h-dvh relative overflow-hidden flex flex-col">
      <div className="w-full py-8 px-5 flex flex-col gap-4 pb-navbar-space overflow-auto">
        <Outlet />
      </div>
      <MobileNavbar open={open} onToggle={() => setOpen((prev) => !prev)} />
      <Sidebar shown={open} toggleFn={() => setOpen(false)} />
    </div>
  );
}
