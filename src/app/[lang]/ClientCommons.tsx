"use client";

import React, { useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import { useThemeMode } from "@/utils/useThemeMode";
import { defaultLocale, hasLocale, isAvailableLocale, selectedLocate } from "@/utils/i18n";

const ClientCommons = () => {
  const router = useRouter();
  //
  useThemeMode();

  const pathname = usePathname();
  //  CUSTOM THEME STYLE
  // useEffect(() => {
  //   const $body = document.querySelector("body");
  //   if (!$body) return;

  //   let newBodyClass = "";

  //   if (pathname === "/home-3") {
  //     newBodyClass = "theme-purple-blueGrey";
  //   }
  //   if (pathname === "/home-2") {
  //     newBodyClass = "theme-cyan-blueGrey";
  //   }

  //   newBodyClass && $body.classList.add(newBodyClass);
  //   return () => {
  //     newBodyClass && $body.classList.remove(newBodyClass);
  //   };
  // }, [pathname]);

  useEffect(() => {
    const $body = document.querySelector("body");
    if (!$body) return;
    $body.classList.add("theme-yellow-grey");
  }, []);

  useEffect(() => {

    const pathnameHasLocale = hasLocale(pathname)
    const localLocate = selectedLocate().locate;
    if (localLocate && isAvailableLocale(localLocate) && localLocate !== pathnameHasLocale) {
      console.log("pathname", pathname, pathnameHasLocale, localLocate)
      const noLocatePath = pathname.replace(`/${pathnameHasLocale}`, "")
      router.push(`/${localLocate}${noLocatePath}`)
    }

  }, [pathname]);

  return <></>;
};

export default ClientCommons;
