import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            title="Apropos"
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    A propos
                </h2>
            }
        >
            <Head title="Acolytat Mawaggali" />

            <div className="py-20 mx-2 flex-grow">
                <p>
                    A propos
                </p>
            </div>

            <Footer />
        </AuthenticatedLayout>
    );
}
