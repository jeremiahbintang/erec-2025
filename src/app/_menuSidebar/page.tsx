"use client";
import Link from "next/link";
import styles from "./menuSidebar.module.css";
import { use, useEffect, useState } from "react";

type Route = {
  path: string;
  label: string;
};

export default function MenuSidebar() {
  const [currentPathname, setCurrentPathname] = useState<string | undefined>(
    undefined
  );

  const routes: Route[] = [
    { path: "/theme", label: "THEME" },
    { path: "/speakers", label: "SPEAKERS" },
    // { path: "/erec", label: "EREC" },
    { path: "/venue", label: "VENUE" },
    { path: "/schedule", label: "SCHEDULE" },
    { path: "/pricing", label: "PRICING" },
    { path: "/faqs", label: "FAQS" },
    { path: "/contact", label: "CONTACT" },
  ];

  useEffect(() => {
    setCurrentPathname(window.location.pathname);

    // Add event listener for client-side navigation changes
    const handleRouteChange = () => {
      setCurrentPathname(window.location.pathname);
    };

    window.addEventListener("popstate", handleRouteChange);

    // Remove the event listener on component unmount
    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  const isActive = (path: string) => {
    return path === currentPathname ? styles.activeMenu : "";
    // return path === currentPathname
    //   ? `${styles.active} ${styles.activeMenu}`
    //   : "";
  };

  return (
    <>
      <nav className={styles.menuSidebar}>
        {routes.map((route) => (
          <Link
            key={route.path}
            href={route.path}
            // className={`${styles.menuText} ${isActive(route.path)}`}
            className={styles.menuText}
            // className={isActive(route.path)}
          >
            <div>{route.label}</div>
            <div className={isActive(route.path)}></div>
          </Link>
        ))}
      </nav>
    </>
  );
}
