import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ScrollToTopButton from '@/components/ScrollToTopButton';

export default function MainLayout({ children }) {
    return (
        <div className="bg-black text-white font-sans">
            <Header />
            <main>{children}</main>
            <ScrollToTopButton />
            <Footer />
        </div>
    );
}