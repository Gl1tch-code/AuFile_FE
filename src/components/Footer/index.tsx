import { Link } from "react-router-dom";
import { useTheme } from "../../core/context/ThemeContext";
import FullDarkLogo from "../../assets/svgs/fullDarkLogo.svg";
import FullLightLogo from "../../assets/svgs/fullLightLogo.svg";
import ArrowIcon from "../../icons/ArrowIcon";
import { THEME_VALUES } from "../../utils/constants";
import Show from "../../core/Show";

type PropsType = {
  showExplorApiDocs?: boolean;
};

export default function Footer({ showExplorApiDocs = false }: PropsType) {
  const { theme } = useTheme();

  return (
    <>
      <Show if={showExplorApiDocs}>
        {/* explore api documentation */}
        <div
          className={`${
            theme === THEME_VALUES.DARK ? "bg-[#00000050]" : "bg-[#ffffff50]"
          } flex flex-col justify-center items-center gap-4 py-16`}
        >
          <h2 className="text-xl xs:text-2xl sm:text-3xl font-archivo mb-2 sm:mb-4 text-primaryText text-center px-8">
            Interested in our API integration ?
          </h2>
          <button
            type="button"
            className={`transition-all text-primaryText font-poppins font-normal text-base sm:text-xl flex gap-3 sm:gap-6 px-6 py-3 items-center rounded-full !bg-[#ffffff50] hover:!bg-[#ffffff80]`}
          >
            See documentation
            <ArrowIcon
              className="w-10 sm:w-16 text-primaryText"
              currentColor={theme === THEME_VALUES.DARK ? "#ffffff" : "#1A1E26"}
            />
          </button>
        </div>
      </Show>
      {/* footer */}
      <div
        className={`${
          theme === THEME_VALUES.DARK
            ? "bg-[#00000095] border-primary"
            : "bg-[#ffffff95] border-white"
        } flex flex-wrap items-start gap-x-20 md:gap-x-44 gap-y-24 px-8 sm:px-16 xl:px-32 py-14 sm:py-20 border-t-4`}
      >
        <Show if={theme === THEME_VALUES.DARK}>
          <Link to="/">
            <img
              className="w-24 sm:w-32 h-auto"
              src={FullLightLogo}
              alt="AuFile"
            />
          </Link>
        </Show>
        <Show if={theme === THEME_VALUES.LIGHT}>
          <Link to="/">
            <img
              className="w-24 sm:w-32 h-auto"
              src={FullDarkLogo}
              alt="AuFile"
            />
          </Link>
        </Show>
        <div
          className={`flex flex-wrap items-start gap-16 sm:gap-28 md:gap-32 lg:gap-38 xl:gap-44 px-8 sm:px-12`}
        >
          <div>
            <h2 className="text-xl sm:text-2xl font-poppins font-semibold text-primaryText">
              Developers
            </h2>
            <h3 className="mt-3 text-lg sm:text-xl font-poppins font-medium text-primaryText">
              API:
            </h3>
            <a className="block ml-2 sm:ml-3 text-lg sm:text-xl font-poppins font-thin underline text-primaryText">
              Get Started
            </a>
            <a className="block ml-2 sm:ml-3 text-lg sm:text-xl font-poppins font-thin underline text-primaryText">
              Documentation
            </a>
            <h3 className="mt-3 text-lg sm:text-xl font-poppins font-medium text-primaryText">
              React library:
            </h3>
            <a className="block ml-2 sm:ml-3 text-lg sm:text-xl font-poppins font-thin underline text-primaryText">
              Get Started
            </a>
            <a className="block ml-2 sm:ml-3 text-lg sm:text-xl font-poppins font-thin underline text-primaryText">
              Documentation
            </a>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-poppins font-semibold text-primaryText">
              Company
            </h2>
            <a className="block text-lg sm:text-xl font-poppins underline font-thin text-primaryText">
              About Us
            </a>
            <a className="block text-lg sm:text-xl font-poppins underline font-thin text-primaryText">
              Blogs
            </a>
            <a className="block text-lg sm:text-xl font-poppins underline font-thin text-primaryText">
              Trust
            </a>
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-poppins font-semibold text-primaryText">
              Contact Us
            </h2>
            <a className="block text-lg sm:text-xl font-poppins underline font-thin text-primaryText">
              contact@aufile.com
            </a>
            <a className="block text-lg sm:text-xl font-poppins underline font-thin text-primaryText">
              +212722-142569
            </a>
            <a className="block text-lg sm:text-xl font-poppins underline font-thin text-primaryText">
              AuFile
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
