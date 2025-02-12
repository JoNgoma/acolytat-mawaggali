import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            title="people"
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    People
                </h2>
            }
        >
            <Head title="Acolytat Mawaggali" />

            <div className="py-20 mx-2 flex-grow">
                <p>
                    people
                </p>
            </div>

            {auth?.user ? (
                <Footer />
            ) : (
                <footer className="w-screen flex items-center">
                    <p className="p-4 text-center mx-2 w-full mb-2 bg-slate-400 font-black text-xl text-white">footer</p>
                </footer>
            )}
        </AuthenticatedLayout>
    );
}
