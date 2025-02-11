import { Link } from "@inertiajs/react";

export default function ResponsiveNavLink({
    active = false,
    className = "",
    children,
    ...props
}) {
    return (
        <Link
            {...props}
            className={`text-left border mt-3 w-auto py-2 ml-2 pl-2 hover:text-blue-700 hover:border-blue-400 ${className}`}
        >
            {children}
        </Link>
    );
}
