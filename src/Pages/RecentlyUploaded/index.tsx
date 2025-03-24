import React from "react";
import PageWrapper from "../../components/PageWrapper";
import testimg from "../../assets/svgs/LightBg.svg";
import { useTheme } from "../../core/context/ThemeContext";
import { THEME_VALUES } from "../../utils/constants";
import Footer from "../../components/Footer";

export default function RecentlyUploaded(): React.JSX.Element {
  const { theme } = useTheme();
  const data = [
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
    { img: testimg, alt: "sdcsdc" },
  ];

  return (
    <>
      <PageWrapper>
        <h1 className="transition-all font-archivo text-2xl sm:text-3xl xl:text-4xl text-primaryText font-bold">
          Recently uploaded images
        </h1>
        <div className="flex flex-wrap gap-4">
          {data?.map((elem, ind) => (
            <div
              key={ind + 1}
              className={`flex-1 min-w-32 sm:min-w-40 max-w-48 min-h-32 sm:min-h-40 max-h-48 rounded-md border-2 ${
                theme === THEME_VALUES.DARK
                  ? "!bg-[#ffffff30] border-primary"
                  : "!bg-[#00000030] border-white"
              } relative group `}
            >
              <img
                className="w-full h-full object-contain"
                src={elem?.img}
                alt={elem?.alt}
              />
              <button
                type="button"
                className={`transition-all text-primaryText font-poppins font-normal text-base sm:text-lg gap-3 sm:gap-6 px-6 py-2 rounded-full ${
                  theme === THEME_VALUES.DARK
                    ? "!bg-[#00000050] hover:!bg-[#00000080]"
                    : "!bg-[#ffffff50] hover:!bg-[#ffffff80]"
                } absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-max
                transition-opacity duration-300 opacity-0 group-hover:opacity-100`}
              >
                Copy link
              </button>
            </div>
          ))}
        </div>
      </PageWrapper>
      <Footer showExplorApiDocs />
    </>
  );
}
