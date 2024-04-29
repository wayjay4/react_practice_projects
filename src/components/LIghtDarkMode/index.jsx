import React from "react";
import useLocalDirectory from "./UseLocalDirectory";
import './styles.css'

const LightDarkMode = () => {
    // making and using a custom hook
    const [theme, setTheme] = useLocalDirectory("theme", "dark");

    function handleChangeTheme(){
        setTheme(theme === 'light' ? 'dark' : 'light');
    }

    return (
        <div className={`light-dark-mode h-full ${theme === 'light' ? 'light_mode' : 'dark_mode'}`}>
            <div className={"container h-full flex flex-col justify-center items-center"}>
                <p>Light Dark Theme</p>
                <button
                    className={"mt-5 border border-purple-600 bg-purple-800 px-4 py-2 rounded-lg text-white"}
                    onClick={handleChangeTheme}
                >
                    Change Theme
                </button>
            </div>
        </div>
    );
};

export default LightDarkMode;