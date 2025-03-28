import { THEME_VALUES } from "../../utils/constants";
import LightLogo from "../../../public/lightLogo.svg";
import DarkLogo from "../../../public/darkLogo.svg";
import ToggleLightMode from "../../assets/svgs/toggleThemeLight.svg";
import ToggleDarkMode from "../../assets/svgs/toggleThemeDark.svg";
import Show from "../../core/Show";
import { useTheme } from "../../core/context/ThemeContext";
import Navbar from "../../components/Navbar";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import "./styles.css";

type PropsType = {
  children: string | React.JSX.Element | React.JSX.Element[];
  infos?: boolean;
  className?: string;
};

export default function PageWrapper({ className, children, infos = false }: PropsType) {
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const interBubble = document.querySelector<HTMLDivElement>(".interactive")!;
    let curX = 0;
    let curY = 0;
    let tgX = 0;
    let tgY = 0;

    function move() {
      curX += (tgX - curX) / 20;
      curY += (tgY - curY) / 20;
      interBubble.style.transform = `translate(${Math.round(
        curX
      )}px, ${Math.round(curY)}px)`;
      requestAnimationFrame(() => {
        move();
      });
    }

    window.addEventListener("mousemove", (event) => {
      tgX = event.clientX;
      tgY = event.clientY;
    });

    move();
  });

  return (
    <>
      <div
        className={`${theme} transition-all main-container background px-3 xs:px-8 sm:px-16 xl:px-48 py-6 sm:py-10 flex flex-col gap-20 ${className}`}
      >
        <div className="w-full flex justify-between items-center">
          <div className="w-14 xs:w-16 h-auto" />
          <Show if={theme === THEME_VALUES.DARK}>
            <Link to="/">
              <img
                className="w-14 xs:w-16 h-auto"
                src={LightLogo}
                alt="AuFile"
              />
            </Link>
            <img
              className="w-8 h-auto cursor-pointer"
              src={ToggleLightMode}
              alt="AuFile"
              onClick={toggleTheme}
            />
          </Show>
          <Show if={theme === THEME_VALUES.LIGHT}>
            <Link to="/">
              <img
                className="w-14 xs:w-16 h-auto"
                src={DarkLogo}
                alt="AuFile"
              />
            </Link>
            <img
              className="w-8 h-auto cursor-pointer"
              src={ToggleDarkMode}
              alt="AuFile"
              onClick={toggleTheme}
            />
          </Show>
        </div>
        {children}
        <div className="flex items-center justify-center 2lg:justify-start w-full">
          <Show if={infos}>
            <p className="text-secondaryText font-light font-poppins text-xl pb-24 2lg:pb-4 text-center 2lg:text-left">
              <b className="font-poppins text-xl font-bold">Info:</b> the files are automatically
              <br />
              deleted after not using them for 3 days
            </p>
          </Show>
          <Navbar theme={theme} />
        </div>
      </div>
    </>
  );
}
