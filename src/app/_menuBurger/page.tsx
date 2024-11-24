"use client";
import Link from "next/link";
import styles from "./menuBurger.module.css";
import { useDisclosure, useClickOutside } from "@mantine/hooks";
import { Menu, Burger } from "@mantine/core";
import { useEffect, useState } from "react";

type Route = {
  path: string;
  label: string;
};

export default function MenuBurger() {
  const [burgerOpened, handlers] = useDisclosure();
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
    { path: "/devotion", label: "MORNING DEVOTION" },
  ];

  const menuRef = useClickOutside(() => {
    if (burgerOpened) {
      handleMenuClick();
    }
  });

  const handleMenuClick = () => {
    handlers.toggle();
  };

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
      <Menu
        opened={burgerOpened}
        classNames={{
          dropdown: styles.dropdown,
          item: styles.item,
        }}
      >
        <Menu.Target>
          <Burger
            ref={menuRef}
            opened={burgerOpened}
            onClick={() => handlers.toggle()}
            aria-label="Toggle navigation"
            classNames={{ burger: styles.burger }}
          />
        </Menu.Target>

        <Menu.Dropdown>
          <nav className={styles.dropdownContainer}>
            <Menu.Item>
              <div className={styles.buttonContainer}>
                <a
                  // href="https://link.grii.eu/EREC2024"
                  href="https://forms.gle/5nBNSFBUs6AUr8bz6"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.button}
                >
                  REGISTER
                </a>
              </div>
            </Menu.Item>

            {routes.map((route) => (
              <Menu.Item key={route.path}>
                <Link
                  href={route.path}
                  className={`${styles.menuText} ${isActive(route.path)}`}
                  style={{
                    paddingTop: route.path === "/theme" ? "0" : undefined,
                    paddingBottom: route.path === "/devotion" ? "0" : undefined,
                  }}
                >
                  {route.label}
                </Link>
              </Menu.Item>
            ))}
          </nav>
        </Menu.Dropdown>
      </Menu>
    </>
  );
}
