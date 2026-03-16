"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { siteConfig } from "@/lib/site";
import {
  homeSectionNavigation,
  mainNavigation,
  type HeaderNavigationItem,
} from "@/lib/site-navigation";
import { cn } from "@/lib/utils";

const siteTagline =
  "Seven eras, key papers, institutions, and a clear bridge into the math.";

function normalizeHash(hash: string) {
  if (!hash) {
    return "";
  }

  return hash.startsWith("#") ? hash : `#${hash}`;
}

function isNavigationItemActive(
  item: HeaderNavigationItem,
  pathname: string,
  hash: string
) {
  const normalizedHash = normalizeHash(hash);

  if (pathname === "/" && item.match.homeHashes?.includes(normalizedHash)) {
    return true;
  }

  if (item.match.exactPathnames?.includes(pathname)) {
    return true;
  }

  return (
    item.match.pathnamePrefixes?.some((prefix) =>
      pathname.startsWith(prefix)
    ) ?? false
  );
}

function NavigationRow({
  items,
  pathname,
  hash,
  variant,
  ariaLabel,
}: {
  items: HeaderNavigationItem[];
  pathname: string;
  hash: string;
  variant: "primary" | "secondary";
  ariaLabel: string;
}) {
  const navClassName = variant === "primary" ? "site-nav" : "site-subnav";
  const linkClassName =
    variant === "primary" ? "site-nav__link" : "site-subnav__link";
  const activeClassName =
    variant === "primary"
      ? "site-nav__link--active"
      : "site-subnav__link--active";

  return (
    <nav aria-label={ariaLabel} className={navClassName}>
      {items.map((item) => {
        const isActive = isNavigationItemActive(item, pathname, hash);

        return (
          <Link
            key={item.href}
            href={item.href}
            aria-current={
              isActive
                ? variant === "primary"
                  ? "page"
                  : "location"
                : undefined
            }
            className={cn(linkClassName, isActive && activeClassName)}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );
}

export function SiteHeader() {
  const pathname = usePathname() ?? "/";
  const [hash, setHash] = useState("");

  useEffect(() => {
    const syncHash = () => {
      setHash(window.location.hash);
    };

    syncHash();
    window.addEventListener("hashchange", syncHash);

    return () => {
      window.removeEventListener("hashchange", syncHash);
    };
  }, [pathname]);

  return (
    <header className="site-header">
      <div className="site-header__inner">
        <div className="site-header__top">
          <div className="site-header__brandlock">
            <p className="site-header__eyebrow">Story-led reference</p>
            <Link href="/" className="site-brand">
              {siteConfig.name}
            </Link>
            <p className="site-tagline">{siteTagline}</p>
          </div>

          <div className="site-header__navblock">
            <p className="site-nav__label">Main navigation</p>
            <NavigationRow
              items={mainNavigation}
              pathname={pathname}
              hash={hash}
              variant="primary"
              ariaLabel="Main navigation"
            />
          </div>
        </div>

        {pathname === "/" ? (
          <div className="site-header__subnavblock">
            <p className="site-nav__label">On this page</p>
            <NavigationRow
              items={homeSectionNavigation}
              pathname={pathname}
              hash={hash}
              variant="secondary"
              ariaLabel="Homepage sections"
            />
          </div>
        ) : null}
      </div>
    </header>
  );
}
