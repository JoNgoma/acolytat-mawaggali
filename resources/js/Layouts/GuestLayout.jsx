import ApplicationLogo from '@/Components/ApplicationLogo';
import { Link } from '@inertiajs/react';

export default function GuestLayout({ children }) {
return (
<div className="flex min-h-screen flex-col items-center bg-gray-100 pt-6 sm:justify-center sm:pt-0">
    <div className="flex flex-col items-center gap-2">
        <img id="logo" className="w-20" src="img/logo.png" alt="Logo" />
        <h2 className=" md:text-lg lg:text-xl xl:text-2xl font-black text-blue-700">
            Acolytat Saint Noé Mawaggali
        </h2>
    </div>
    <div className="mt-6 w-11/12 overflow-hidden bg-white px-6 py-4 shadow-md sm:max-w-md sm:rounded-lg">
        {children}
    </div>
</div>
);
}