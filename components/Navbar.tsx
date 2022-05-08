import { useEffect, useState } from "react";
import Link from "next/link";

import { useRouter } from "next/router";

function Navbar() {
  const [activeItem, setActiveItem] = useState<string>("");
  const { pathname } = useRouter();

  useEffect(() => {
    if (pathname === "/") setActiveItem("About");
    if (pathname === "/project") setActiveItem("Projects");
    if (pathname === "/resume") setActiveItem("Resume");
  }, []);
  return (
    <div>
      <span className="font-bold text-green">{activeItem}</span>
      <div className="space-x-3 text-red-600 text-red font-lg">
        {activeItem !== "about" && (
          <Link href="/about">
            <a>
              <span onClick={() => setActiveItem("About")}>About</span>
            </a>
          </Link>
        )}
        {activeItem !== "project" && (
          <Link href="/project">
            <a>
              <span onClick={() => setActiveItem("Projects")}>Projects</span>
            </a>
          </Link>
        )}
        {activeItem !== "resume" && (
          <Link href="/resume">
            <a>
              <span onClick={() => setActiveItem("Resume")}>Resume</span>
            </a>
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
