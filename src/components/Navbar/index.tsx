import { Link, useLocation } from "react-router-dom";
import { IconNameType, ThemeType } from "../../utils/types";
import { COLORS, ICON_NAMES, THEME_VALUES } from "../../utils/constants";
import HomeIcon from "../../icons/HomeIcon";
import CategoriesIcon from "../../icons/CategoriesIcon";
import CodingIcon from "../../icons/CodingIcon";
import './styles.css'

type PropsType = {
  theme: ThemeType;
};

export default function Navbar({ theme }: PropsType) {
  const location = useLocation();

  const generateIconSize = (iconName: IconNameType) => {
    if (
      (location.pathname === "" || location.pathname === "/") &&
      iconName === ICON_NAMES.HOME
    ) {
      return window.innerWidth < 412 ? "w-8" : "w-10";
    } else if (
      location.pathname === "/recently-uploaded" &&
      iconName === ICON_NAMES.CATEGORIES
    ) {
      return window.innerWidth < 412 ? "w-8" : "w-10";
    } else if (
      location.pathname === "/api-docs" &&
      iconName === ICON_NAMES.CODING
    ) {
      return window.innerWidth < 412 ? "w-8" : "w-10";
    } else {
      return window.innerWidth < 412 ? "w-6" : "w-7";
    }
  };

  return (
    <div
      className={`${theme === THEME_VALUES.DARK ? "bg-primary" : "bg-white"} 
            flex justify-between items-center rounded-full px-6 py-3 navbar gap-8 xs:gap-10
            bottom-6 sm:bottom-10 h-auto`}
    >
      <Link to="/recently-uploaded">
        <CategoriesIcon
          className={`navbar-icon ${generateIconSize(ICON_NAMES.CATEGORIES)}`}
          currentColor={
            theme === THEME_VALUES.DARK ? COLORS.SECONDARY : COLORS.PRIMARY
          }
        />
      </Link>
      <Link to="/">
        <HomeIcon
          className={`navbar-icon ${generateIconSize(ICON_NAMES.HOME)}`}
          currentColor={
            theme === THEME_VALUES.DARK ? COLORS.SECONDARY : COLORS.PRIMARY
          }
        />
      </Link>
      <CodingIcon
        className={`navbar-icon ${generateIconSize(ICON_NAMES.CODING)}`}
        currentColor={
          theme === THEME_VALUES.DARK ? COLORS.SECONDARY : COLORS.PRIMARY
        }
      />
    </div>
  );
}
