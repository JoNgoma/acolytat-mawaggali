import React, { useState, useEffect, useRef } from "react";
import ResponsiveNavLink from "./ResponsiveNavLink";


function Header({ auth, title }) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        const handleImageError = () => {
            document
                .getElementById("screenshot-container")
                ?.classList.add("!hidden");
            document.getElementById("docs-card")?.classList.add("!row-span-1");
            document
                .getElementById("docs-card-content")
                ?.classList.add("!flex-row");
            document.getElementById("background")?.classList.add("!hidden");
        };

        const img = document.getElementById("logo");
        if (img) img.onerror = handleImageError;
    }, []);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(event.target)
            ) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="flex items-center bg-white justify-between p-2 shadow-lg fixed top-0 left-0 w-full z-50">
            {/* Logo & Title */}
            <div className="flex items-center gap-3">
                <img
                    id="logo"
                    className="w-11"
                    src="img/logo.png"
                    alt="Logo du site"
                />
                <h2 className="hidden md:block text-lg lg:text-xl xl:text-2xl font-black text-blue-700">
                    Acolytat Saint Noé Mawaggali
                </h2>
            </div>

            {/* Navigation */}
            <div className="relative" ref={dropdownRef}>
                <button
                    onClick={() => setIsDropdownOpen((prev) => !prev)}
                    className="inline-flex items-center bg-white px-3 py-2 text-sm font-medium text-gray-500 rounded-md"
                    aria-label="Menu"
                    aria-expanded={isDropdownOpen}
                >
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={isDropdownOpen ? "hidden" : "block"}
                    >
                        <path
                            d="M3 2H5V22H3V2ZM19 2H6V22H19C20.103 22 21 21.103 21 20V4C21 2.897 20.103 2 19 2ZM18 12H9V10H18V12ZM18 8H9V6H18V8Z"
                            fill="#0D99FF"
                        />
                    </svg>
                    <svg
                        width="30"
                        height="30"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={isDropdownOpen ? "block" : "hidden"}
                    >
                        <path
                            d="M17.5 4.5C15.55 4.5 13.45 4.9 12 6C10.55 4.9 8.45 4.5 6.5 4.5C5.05 4.5 3.51 4.72 2.22 5.29C1.49 5.62 1 6.33 1 7.14V18.42C1 19.72 2.22 20.68 3.48 20.36C4.46 20.11 5.5 20 6.5 20C8.06 20 9.72 20.26 11.06 20.92C11.66 21.22 12.34 21.22 12.93 20.92C14.27 20.25 15.93 20 17.49 20C18.49 20 19.53 20.11 20.51 20.36C21.77 20.69 22.99 19.73 22.99 18.42V7.14C22.99 6.33 22.5 5.62 21.77 5.29C20.49 4.72 18.95 4.5 17.5 4.5ZM21 17.23C21 17.86 20.42 18.32 19.8 18.21C19.05 18.07 18.27 18.01 17.5 18.01C15.8 18.01 13.35 18.66 12 19.51V8C13.35 7.15 15.8 6.5 17.5 6.5C18.42 6.5 19.33 6.59 20.2 6.78C20.66 6.88 21 7.29 21 7.76V17.23Z"
                            fill="#0D99FF"
                        />
                    </svg>
                </button>

                <div
                    className={`absolute right-0 w-screen bg-white shadow-lg mt-2 rounded-md p-2 transition-opacity duration-200 ${
                        isDropdownOpen
                            ? "opacity-100 visible"
                            : "opacity-0 invisible"
                    }`}
                >
                    <div className="flex flex-col">
                        {auth?.user ? (
                            <div className="border-t border-gray-200 pb-1 pt-4">
                                <div className="px-4">
                                    <div className="text-base font-medium text-gray-800">
                                        {auth.user.name}
                                    </div>
                                    <div className="text-sm font-medium text-gray-500">
                                        {auth.user.email}
                                    </div>
                                </div>

                                <div className=" flex flex-col gap-1 mt-3 space-y-1 w-full">
                                    {title === "Accueil" ? (
                                        <a
                                        className="border mt-3 py-2 ml-2 pl-2 hover:text-blue-700 hover:border-blue-400"
                                        href={route("profile.edit")}
                                    >
                                        Profile
                                    </a>
                                    ) : (
                                        <a
                                            className="border mt-3 py-2 ml-2 pl-2 hover:text-blue-700 hover:border-blue-400"
                                            href={route("dashboard")}
                                        >
                                            Accueil
                                        </a>
                                    )}
                                    <a
                                        className="border mt-3 py-2 ml-2 pl-2 hover:text-blue-700 hover:border-blue-400"
                                        href="#"
                                    >
                                        A propos
                                    </a>
                                    <ResponsiveNavLink
                                        method="post"
                                        href={route("logout")}
                                        as="button"
                                        className="text-red-600 hover:text-red-600 hover:border-red-600"
                                    >
                                        Déconnexion
                                    </ResponsiveNavLink>
                                </div>
                            </div>
                        ) : (
                            <>
                                <a
                                    href={route("login")}
                                    className="border mt-3 w-full py-2 ml-2 pl-2 hover:text-blue-700 hover:border-blue-400"
                                >
                                    Connexion
                                </a>
                                <a
                                    href={route("register")}
                                    className="border mt-3 w-full py-2 ml-2 pl-2 hover:text-blue-700 hover:border-blue-400"
                                >
                                    Inscription
                                </a>
                            </>
                        )}
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
