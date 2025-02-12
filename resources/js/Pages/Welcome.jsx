import Footer from "@/Components/Footer";
import Header from "@/Components/Header";
import AuthenticatedLayout from "@/Layouts/AuthenticatedLayout";
import { Head } from "@inertiajs/react";

export default function Welcome({ auth }) {
    return (
        <AuthenticatedLayout
            auth={auth}
            title="Accueil"
            header={
                <h2 className="text-xl font-semibold leading-tight text-gray-800">
                    Accueil
                </h2>
            }
        >
            <Head title="Acolytat Mawaggali" />
            {auth?.user ? (
                <div className="py-20">
                connecté
                </div>
            ):(
                <div className="py-20">
                    Non connecté
                </div>
            )}
            <div className={`${auth?.user ? "py-0" : "pt-2 pb-4"} mx-2 flex-grow`}>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Praesentium atque error, numquam, itaque optio maiores,
                    cumque explicabo laudantium blanditiis qui repellat
                    quibusdam magni nulla. Vel iusto quas provident quisquam
                    pariatur! Dolorem dolor soluta fugiat hic voluptatem eveniet
                    officia, alias corporis nisi neque aliquam nobis magni
                    perspiciatis tenetur qui! Provident nulla quibusdam
                    veritatis ut omnis. Ullam, error? A possimus temporibus
                    odio! Libero maiores mollitia unde dicta laborum velit
                    perspiciatis porro ipsum quisquam accusantium ut
                    consequuntur optio, corrupti rem. Aliquam laborum alias nisi
                    accusantium non, eligendi fugiat cupiditate consequuntur.
                    Repellendus, reiciendis sunt. Molestias, quasi consectetur?
                    Amet reprehenderit porro corporis inventore laborum alias,
                    molestiae, placeat commodi accusantium assumenda ea omnis
                    non nisi similique fugiat possimus tenetur eos ab neque nam
                    hic minus maiores. Atque odio, sequi autem ut quia minima
                    suscipit velit consequatur possimus iusto, porro vitae
                    voluptate blanditiis ipsa hic ipsum nostrum id doloribus
                    eos. Eos fugit autem doloribus distinctio ipsa officiis?
                    Voluptatem voluptates et magni? Quod dignissimos laudantium,
                    dicta exercitationem quam possimus dolores! Quis voluptate
                    minus deleniti cupiditate veniam assumenda incidunt. Sit
                    doloribus, ipsam eligendi accusamus aliquam laborum
                    excepturi exercitationem eum. Dolor iusto consectetur,
                    repellat quisquam neque esse? Quae ad earum, architecto
                    velit iusto ullam itaque sunt magnam esse harum?
                    Consequuntur unde nostrum earum nihil quo ab ipsa a minus
                    inventore! Sit, aperiam assumenda? Sit, hic voluptatibus
                    aliquid dolore ut tempore odit ex reprehenderit tempora
                    facere molestias quisquam mollitia numquam soluta expedita
                    amet, accusantium ab porro. Consequatur corporis quaerat
                    impedit maiores! Molestiae eaque ea consectetur porro
                    repudiandae nisi totam atque recusandae quam magnam
                    laboriosam culpa amet quis impedit perspiciatis, asperiores
                    tempora, voluptatem labore commodi! Eius mollitia aut quos,
                    alias temporibus minus? Enim quisquam tempora quae ratione
                    officiis dolores tenetur, labore nobis veniam vel, sed, aut
                    ipsum perspiciatis iure temporibus culpa corrupti.
                    Laboriosam fugiat et quos odit vero perspiciatis nostrum
                    vitae adipisci?
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
