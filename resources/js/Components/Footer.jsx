import { useEffect } from "react";

function Footer({ auth }) {
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
        if (img) {
            img.onerror = handleImageError;
        }
    }, []);

    return (
        <footer className="flex flex-row items-center justify-between py-2 px-2 text-black" style={{ boxShadow: '0 -4px 40px rgba(0, 0, 0, 0.1)' }}>
                <div className="flex flex-row gap-2">
                    <a
                        href={route("login")}
                        className="border rounded-2xl py-1 px-4 hover:text-blue-700 hover:border-blue-400"
                    >
                        Login
                    </a>
                    <a
                        href={route("register")}
                        className="border rounded-2xl py-1 px-4 bg-blue-600 border-blue-600 hover:bg-blue-700 hover:border-blue-800 text-white"
                    >
                        Register
                    </a>
                </div>
            
        </footer>
    );
}

export default Footer;
