import {useState } from "react";
import {
  ChevronDownIcon,
  SunIcon,
  MoonIcon,
  ComputerDesktopIcon,
} from "@heroicons/react/24/solid";
import ThemeController from "./ThemeController";

const Dropdown = () => {
  const [themeClickController, setThemeClickController] = useState(false);
  const [clickedClass, setClickedCLass] = useState("");
  const [themes, setThemes] = useState("hidden");
  const [themeControllerProp, setThemeControllerProp] = useState("");

  function themControllerPropHandler(mode) {
    setThemeControllerProp(mode);
  }
  /* When theme button will be pressed this function will be activated */
  const themeButton = () => {
    setThemeClickController(!themeClickController);
    if (themeClickController) {
      setThemes("inline-block");
      setClickedCLass("rotate-180 duration-300");
    } else {
      setThemes("hidden");
      setClickedCLass("duration-300");
    }
  };

  return (
    <div>
      <div>
        <div
          className="hover:bg-[#F2F2F2] dark:hover:bg-[#0e3041] hover:cursor-pointer p-3 rounded-xl flex justify-center items-center"
          onClick={themeButton}
        >
          <span className="mr-1 dark:text-white">Theme</span>
          <ChevronDownIcon className={`w-5 h-5 dark:text-white inline-block ${clickedClass}`} />
        </div>
        {/* All theme are shown bellow. When a click event happens in theme div, all menus will be shown*/}
        <div className="relative">
          {/* List Parent */}
          <ul
            className={`list-none drop-shadow-lg bg-[#eeeeee] dark:bg-[#092635] p-2 rounded-md absolute ${themes} `}
          >
            {/* Dark mode button */}
            <li
              onClick={() => {
                themControllerPropHandler("dark");
              }}
              className="mb-2 cursor-pointer bg-white hover:bg-zinc-200 dark:bg-[#0e3041] dark:text-white dark:hover:bg-[#132027] px-2 py-2 rounded-md flex justify-between items-center"
            >
              <MoonIcon className="w-5 h-5 inline-block " />
              <span>Dark</span>
            </li>
            {/* Light mode button */}
            <li
              onClick={() => {
                themControllerPropHandler("light");
              }}
              className="mb-2 cursor-pointer bg-white hover:bg-zinc-200 dark:bg-[#0e3041] dark:text-white dark:hover:bg-[#132027] px-2 py-2 rounded-md flex justify-between items-center"
            >
              <SunIcon className="w-5 h-5 inline-block " />
              <span>Light</span>
            </li>
            {/* System mode button */}
            <li
              onClick={() => {
                themControllerPropHandler("system");
              }}
              className="cursor-pointer bg-white hover:bg-zinc-200 dark:bg-[#0e3041] dark:text-white dark:hover:bg-[#132027] px-2 py-2 rounded-md flex gap-10 justify-between items-center"
            >
              <ComputerDesktopIcon className="w-5 h-5 inline-block " />
              <span>System</span>
            </li>
          </ul>
        </div>
      </div>
      {/* Theme button. By clicking this button all themes will be shown*/}

      {/* Here pros are being sent to theme controller component */}
      <ThemeController
        mode={themeControllerProp}
        name="My name is Yamin"
      ></ThemeController>
    </div>
  );
};

export default Dropdown;
