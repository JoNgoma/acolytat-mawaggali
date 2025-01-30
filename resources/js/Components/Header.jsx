import { useEffect } from "react";

function Header({ auth }) {
    useEffect(() => {
        const handleImageError = () => {
            document.getElementById("screenshot-container")?.classList.add("!hidden");
            document.getElementById("docs-card")?.classList.add("!row-span-1");
            document.getElementById("docs-card-content")?.classList.add("!flex-row");
            document.getElementById("background")?.classList.add("!hidden");
        };

        const img = document.getElementById("logo");
        if (img) {
            img.onerror = handleImageError;
        }
    }, []);

    return (
        <header className="flex flex-row items-center justify-between py-2 px-4 shadow-lg">
            {/* Logo & Title */}
            <div className="flex flex-row gap-3 items-center">
                <img id="logo" className="w-12" src="img/logo.png" alt="Logo" />
                <h2 className="text-xl font-black text-blue-700">
                    Acolytat Saint Noé Mawaggali
                </h2>
            </div>

            {/* Navigation */}
            {auth?.user ? (
                <a
                    href={route("dashboard")}
                    className="rounded-md px-3 py-2 text-black ring-1 ring-transparent transition hover:text-black/70 focus:outline-none focus-visible:ring-[#FF2D20] dark:text-white dark:hover:text-white/80 dark:focus-visible:ring-white"
                >
                    Dashboard
                </a>
            ) : (
                <div className="flex flex-row gap-5">
                    <a
                        href={route("login")}
                        className="border rounded-2xl py-1 px-4 hover:text-blue-700 hover:border-blue-400"
                    >
                        Login
                    </a>
                    <a
                        href={route("register")}
                        className="border rounded-2xl py-1 px-4 bg-blue-600 hover:bg-blue-700 hover:border-blue-800 text-white"
                    >
                        Register
                    </a>
                </div>
            )}
        </header>
    );
}

export default Header;
