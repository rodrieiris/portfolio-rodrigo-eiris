import { useParams } from 'react-router-dom';
import posts from '@/data/posts';

export default function BlogPost() {
    const { slug } = useParams();
    const post = posts.find((p) => p.slug === slug);

    if (!post) {
        return (
            <div className="h-[calc(100vh-165px)] flex items-center justify-center bg-black overflow-hidden">
                <p className="text-white text-center font-playfair text-xl">
                    Ups!<br></br><br></br>
                    No se ha encontrado ninguna publicación.
                </p>
            </div>
        );
    }

    return (
        <article className="max-w-3xl mx-auto px-4 pt-40 pb-24 text-white">
            <h1 className="text-3xl md:text-5xl font-bold text-accent mb-6 font-playfair">{post.title}</h1>
            <img
                src={post.image}
                alt={post.imageAlt}
                className="w-full h-64 object-cover rounded mb-6"
            />
            <p className="text-lg font-inter text-gray-300 leading-7">{post.body}</p>
        </article>
    );
}