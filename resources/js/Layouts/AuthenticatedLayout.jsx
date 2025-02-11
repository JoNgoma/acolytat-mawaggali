import Header from "@/Components/Header";
import { usePage } from "@inertiajs/react";
import { useState } from "react";

export default function AuthenticatedLayout({ title, auth, header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="min-h-screen bg-gray-100">
            <Header title={title} auth={auth} />
            {header && (
                <header className="bg-white shadow mt-14">
                    <div className="mx-auto bg-white w-screen max-w-7xl px-4 py-5 fixed  sm:px-6 lg:px-8">
                        {header}
                    </div>
                </header>
            )}

            <main>{children}</main>
        </div>
    );
}
