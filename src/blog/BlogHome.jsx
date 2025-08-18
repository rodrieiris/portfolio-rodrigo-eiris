import { Link } from 'react-router-dom';
import posts from '@/data/posts';

export default function BlogHome() {
    return (
        <section className="max-w-5xl mx-auto px-4 pt-40 pb-24">
            <h1 className="text-3xl md:text-4xl font-bold text-accent mb-10 text-center font-playfair">Blog</h1>

            <div className="grid gap-10 md:grid-cols-2">
                {posts.map((post) => (
                    <article key={post.id} className="bg-white rounded-lg shadow-md overflow-hidden">
                        <img
                            src={post.image}
                            alt={post.imageAlt}
                            className="w-full h-48 object-cover"
                        />
                        <div className="p-5">
                            <h2 className="text-xl font-bold text-accent mb-2">{post.title}</h2>
                            <p className="text-sm font-inter text-gray-600 mb-4">{post.details}</p>
                            <Link
                                to={`/blog/${post.slug}`}
                                className="text-accent font-inter font-medium hover:underline hover:text-accent"
                            >
                                Leer más
                            </Link>
                        </div>
                    </article>
                ))}
            </div>
        </section>
    );
}