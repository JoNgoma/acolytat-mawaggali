import React from "react";
import { useState, useEffect, useRef } from "react";

function Header({ auth }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleImageError = () => {
            document.getElementById("screenshot-container")?.classList.add("!hidden");
            document.getElementById("docs-card")?.classList.add("!row-span-1");
            document.getElementById("docs-card-content")?.classList.add("!flex-row");
            document.getElementById("background")?.classList.add("!hidden");
        };

        const img = document.getElementById("logo");
        if (img) img.onerror = handleImageError;
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="flex items-center justify-between p-2 shadow-lg">
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
                <img id="logo" className="w-11" src="img/logo.png" alt="Logo du site" />
                <h2 className="hidden md:block text-lg lg:text-xl xl:text-2xl font-black text-blue-700">
                    Acolytat Saint Noé Mawaggali
                </h2>
            </div>

            {/* Navigation */}
            {auth?.user ? (
                <div>
                    <img className="w-11 cursor-pointer rounded-full" src="img/profil.jpeg" alt="Photo de profil" />
                </div>
            ) : (
                <div className="relative" ref={dropdownRef}>
                    <button
                        onClick={() => setIsDropdownOpen((prev) => !prev)}
                        className="inline-flex items-center bg-white px-3 py-2 text-sm font-medium text-gray-500 rounded-md"
                    >
                        <img className="w-9" src="img/menu-hamburger.svg" alt="Menu de navigation" />
                    </button>

                    {isDropdownOpen && (
                        <div className="absolute right-0 bg-white shadow-lg mt-2 rounded-md p-2">
                            <div className="flex flex-col gap-2">
                                <a href={route("login")} className="border rounded-2xl py-1 px-4 hover:text-blue-700 hover:border-blue-400">
                                    Se connecter
                                </a>
                                <a
                                    href={route("register")}
                                    className="border rounded-2xl py-1 px-4 bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-800 text-white"
                                >
                                    S'inscrire
                                </a>
                            </div>
                        </div>
                    )}
                </div>
            )}
        </header>
    );
}

export default Header;
