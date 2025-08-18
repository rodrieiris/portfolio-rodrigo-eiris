import { motion } from 'framer-motion';
import SocialLinks from './SocialLinks';

export default function Hero() {
    return (
        <section className="flex flex-col items-center justify-center min-h-screen text-center px-4 pt-32 md:pt-40">

            <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl md:text-6xl font-bold text-white text-center"
            >
                <span className="group cursor-pointer inline-block transition-colors duration-300">
                    <span className="group-hover:text-accent text-white transition-colors duration-300">
                        Hola, soy
                    </span>{' '}
                    <span className="group-hover:text-white text-accent transition-colors duration-300">
                        Rodrigo Eirís
                    </span>
                </span>
            </motion.h1>

            <motion.h2
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 1 }}
                whileHover={{ color: '#DD5245' }}
                className="text-6xl md:text-9xl font-extrabold text-[#8A2BE2] mt-4 font-bebas"

            >
                Desarrollador de Software
            </motion.h2>

            <motion.p
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 1 }}
                className="mt-6 text-lg md:text-xl text-white max-w-2xl font-inter"
            >
                Transformo ideas en soluciones basadas en inteligencia artificial, Big Data y desarrollo de software.
            </motion.p>

            <motion.a
                href="/CV_RodrigoEiris.pdf"
                download
                whileHover={{
                    backgroundColor: 'transparent',
                    color: '#DD5245',
                    border: '1px solid #DD5245',
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ duration: 0 }}
                className="mt-8 inline-block font-inter bg-accent text-white px-6 py-3 rounded-lg font-semibold transition"
            >
                Descargar CV
            </motion.a>
            <SocialLinks />
        </section>
    );
}