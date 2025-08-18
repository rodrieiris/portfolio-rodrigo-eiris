import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useEffect, useState } from 'react';
import App from '@/App';
import BlogHome from '@/blog/BlogHome';
import BlogPost from '@/blog/BlogPost';
import Preloader from '@/components/Preloader';
import MainLayout from '@/layouts/MainLayout';

export default function AppRouter() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setLoading(false);
        }, 2000);

        return () => clearTimeout(timeout);
    }, []);

    if (loading) return <Preloader />;

    return (
        <Router>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/sobre-mi" element={<App section="about" />} />
                <Route path="/proyectos" element={<App section="projects" />} />
                <Route path="/contacto" element={<App section="contact" />} />
                <Route
                    path="/blog"
                    element={
                        <MainLayout>
                            <BlogHome />
                        </MainLayout>
                    }
                />
                <Route
                    path="/blog/:slug"
                    element={
                        <MainLayout>
                            <BlogPost />
                        </MainLayout>
                    }
                />
                <Route path="*" element={<App />} />
            </Routes>
        </Router>
    );
}