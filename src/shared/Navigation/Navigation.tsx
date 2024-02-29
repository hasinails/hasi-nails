import React from "react";
import NavigationItem, { NavItemType } from "./NavigationItem";
type Props = {
  navigation: NavItemType[];
};
function Navigation({navigation}:Props) {
  return (
    <ul className="nc-Navigation hidden lg:flex lg:flex-wrap lg:space-x-1 relative">
      {navigation.map((item) => (
        <NavigationItem key={item.id} menuItem={item} />
      ))}
    </ul>
  );
}

export default Navigation;
