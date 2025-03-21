import * as React from "react";
import PageWrapper from "../../components/PageWrapper";
import { useTheme } from "../../core/context/ThemeContext";
import { FileUploader } from "aufile";
import "aufile/dist/styles.css";
import "./styles.css";
import { THEME_VALUES } from "../../utils/constants";
import Show from "../../core/Show";
import ArrowIcon from "../../icons/ArrowIcon";

export default function Home(): React.JSX.Element {
  const { theme } = useTheme();
  const [startedUploading, setStartedUploading] =
    React.useState<boolean>(false);
  const [fileUploadSize, setFileUploadSize] = React.useState<"large" | "small">(
    window.innerWidth > 438 ? "large" : "small"
  );

  const toggleStartedUploading = () => {
    setStartedUploading((prev) => !prev);
  };

  React.useEffect(() => {
    const handleResize = () => {
      setFileUploadSize(window.innerWidth > 438 ? "large" : "small");
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <PageWrapper infos>
        <div
          className={`w-full flex justify-between gap-14 md:gap-4 ${
            startedUploading ? "flex-col md:flex-row" : "flex-col"
          }`}
        >
          <div
            className={`transition-all flex flex-col justify-center gap-6 ${
              startedUploading
                ? "w-full md:w-3/5 xl:w-auto text-center md:text-left"
                : "w-full items-center text-center"
            }`}
          >
            <h1 className="transition-all font-archivo text-4xl sm:text-5xl xl:text-6xl text-primaryText font-bold">
              Upload Your File
            </h1>
            <p className={`transition-all font-poppins text-secondaryText text-lg sm:text-xl md:text-2xl tracking-wider leading-8 ${startedUploading ? 'w-full xl:w-3/5' : ' w-full md:w-3/5 xl:w-1/2'}`}>
              without using your disk/server space.
              Free, secured and well performed
            </p>
          </div>
          <div
            className={`flex items-center ${
              startedUploading
                ? "w-full md:w-2/5 xl:w-auto justify-center md:justify-end"
                : "w-full justify-center mt-5"
            }`}
          >
            <Show if={startedUploading}>
              <FileUploader
                primaryBg="#00000040"
                size={fileUploadSize}
                icon={false}
                primary={theme !== THEME_VALUES.DARK}
                disabled={false}
                className="file-uploader-home-xl"
              />
            </Show>
            <Show if={!startedUploading}>
              <button
                onClick={toggleStartedUploading}
                type="button"
                className={`transition-all text-primaryText font-poppins font-normal text-base sm:text-xl flex gap-3 sm:gap-6 px-6 py-3 items-center rounded-full ${
                  theme === THEME_VALUES.DARK
                    ? "!bg-[#ffffff50] hover:!bg-[#ffffff80]"
                    : "!bg-[#00000050] hover:!bg-[#00000080]"
                }`}
              >
                Start uploading{" "}
                <ArrowIcon
                  className="w-10 sm:w-16 text-primaryText"
                  currentColor={
                    theme === THEME_VALUES.DARK ? "#ffffff" : "#1A1E26"
                  }
                />
              </button>
            </Show>
          </div>
        </div>
      </PageWrapper>
      <div className="px-3 xs:px-8 sm:px-16 xl:px-32 flex flex-col gap-12 mb-24">
        <h1 className="font-archivo text-primaryText text-4xl">
          What do we offer?{" "}
        </h1>
        <div className="flex flex-col 2lg:flex-row w-full gap-10">
          <div className="flex flex-col md:flex-row 2lg:flex-col w-full 2lg:w-1/2 gap-5">
            <div
              className={`${
                theme === THEME_VALUES.DARK
                  ? "bg-[#00000050]"
                  : "bg-[#ffffff50]"
              } text-secondaryText p-8 sm:p-12 rounded-xl w-full md:w-1/2 2lg:w-full`}
            >
              <h2 className="text-xl sm:text-2xl font-archivo mb-2 sm:mb-4">
                Instant File Hosting
              </h2>
              <p className="font-poppins font-light text-base sm:text-xl">
                Upload files directly through our website and get a shareable
                link, no need to store files on your device.
              </p>
            </div>
            <div
              className={`${
                theme === THEME_VALUES.DARK
                  ? "bg-[#00000050]"
                  : "bg-[#ffffff50]"
              } text-secondaryText p-8 sm:p-12 rounded-xl w-full md:w-1/2 2lg:w-full`}
            >
              <h2 className="text-xl sm:text-2xl font-archivo mb-2 sm:mb-4">
                Developer-Friendly API
              </h2>
              <p className="font-poppins font-light text-base sm:text-xl">
                Seamlessly integrate file uploads into your applications with
                our simple API. Just send a request and receive a file link in
                return.
              </p>
            </div>
          </div>
          <div
            className={`${
              theme === THEME_VALUES.DARK ? "bg-[#00000050]" : "bg-[#ffffff50]"
            } text-secondaryText w-full 2lg:w-1/2 p-8 sm:p-12 rounded-xl`}
          >
            <h2 className="text-xl sm:text-2xl font-archivo mb-2 sm:mb-4">
              Effortless React Integration (🔥 Our Best Feature!)
            </h2>
            <p className="font-poppins font-light text-base sm:text-xl">
              Use our React library to enable file uploads in just one line of
              code. Simply call our component, and its value is the uploaded
              file link. No extra setup needed—just plug and play!
              <br />
              <br />
              📌 All uploaded files are automatically deleted after 3 days of
              inactivity
            </p>
          </div>
        </div>
      </div>
    </>
  );
}
