export default function Footer() {
    const year = new Date().getFullYear();

    return (
        <footer id="footer" className="mt-20 border-t border-gray-700 py-8 px-6 text-sm text-gray-400 relative">
            <div className="relative max-w-10xl mx-auto w-full flex items-center justify-center">
                <p className="text-center font-inter">
                    ©{year} Rodrigo Eirís - Desarrollado con React y Tailwind.
                </p>
            </div>
        </footer>
    );
}