'use client';
import Logo from "@/shared/Logo";
import MenuBar from "@/shared/MenuBar";
import Navigation from "@/shared/Navigation/Navigation";
import SwitchDarkMode from "@/shared/SwitchDarkMode";
import {
  GlobeAltIcon
} from "@heroicons/react/24/outline";
import { FC } from "react";
import HeroSearchForm2MobileFactory from "../(HeroSearchForm2Mobile)/HeroSearchForm2MobileFactory";
import { availableLocales, selectedLocate } from "@/utils/i18n";
import { NavItemType } from "@/shared/Navigation/NavigationItem";
import SwitchLang from "@/components/SwitchLang";

export interface MainNav1Props {
  className?: string;
  navigation: NavItemType[];
}

const MainNav1: FC<MainNav1Props> = ({ className = "", navigation }) => {
  const locate = selectedLocate().locate;

  const changeLocate = (locate: string) => {
    if (availableLocales[0] === locate) {
      selectedLocate().setLocate(availableLocales[1]);
    }
    else {
      selectedLocate().setLocate(availableLocales[0]);
    }
    window.location.reload();
  }

  return (
    <div className={`nc-MainNav1 relative z-10 ${className}`}>
      <div className="px-4 lg:container h-20 relative flex justify-between">
        <div className="flex justify-start flex-1 space-x-4 sm:space-x-10">
          <Logo className="w-24 self-center"   />
          <Navigation navigation={navigation}/>
        </div>

        {/* <div className="flex lg:hidden flex-[3] max-w-lg !mx-auto md:px-3 ">
          <div className="self-center flex-1">
            <HeroSearchForm2MobileFactory />
          </div>
        </div> */}

        <div className="flex flex-shrink-0 justify-end flex-1 lg:flex-none text-neutral-700 dark:text-neutral-100">
          <div className="hidden xl:flex space-x-0.5">
            <SwitchDarkMode />
            {/* <SearchDropdown className="flex items-center" /> */}
            <div className="px-1" />
            {/* <div
              onClick={() => changeLocate(locate)}
              className={`group self-center h-10 sm:h-12 px-3 py-1.5 inline-flex items-center text-sm text-gray-800 dark:text-neutral-200 font-medium hover:text-opacity-100 focus:outline-none cursor-pointer`}
            >
              <GlobeAltIcon className="w-5 h-5 opacity-80" />
              <span className="mx-1">/</span>
              <span className="w-5 h-5 opacity-80 whitespace-nowrap" >{locate}</span>

            </div> */}
            <SwitchLang/>
            {/* <ButtonPrimary className="self-center" href="/login">
              Sign up
            </ButtonPrimary> */}
          </div>

          <div className="flex xl:hidden items-center">
            <SwitchDarkMode />
            <div className="px-0.5" />
            <MenuBar navigation={navigation}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNav1;
