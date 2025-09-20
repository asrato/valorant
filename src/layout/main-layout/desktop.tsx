import { useState } from "react";
import { Outlet } from "react-router";

import DesktopNavbar from "../desktop/navbar";

export default function DesktopMainLayout() {
  const [open, setOpen] = useState(false);

  return (
    <div className="w-dvw h-dvh flex flex-col">
      <DesktopNavbar open={open} onToggle={() => setOpen((prev) => !prev)} />
      <div className="mt-20 w-full flex flex-col items-center px-8 py-12">
        <div className="w-full max-w-5xl flex flex-col items-center gap-4">
          <Outlet />
        </div>
      </div>
    </div>
  );
}
