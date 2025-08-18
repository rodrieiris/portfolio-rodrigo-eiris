import { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import projectsData from '@/data/projects';
import ProjectCard from './ProjectCard';

const categories = ['',];

export default function Projects() {
    const [selectedCategory, setSelectedCategory] = useState('');
    const scrollRef = useRef(null);

    useEffect(() => {
        const el = scrollRef.current;
        if (el && window.innerWidth < 768 && el.scrollWidth > el.clientWidth) {
            el.scrollTo({ left: 40, behavior: 'smooth' });
            setTimeout(() => {
                el.scrollTo({ left: 0, behavior: 'smooth' });
            }, 800);
        }
    }, []);

    const filteredProjects = projectsData.filter(
        project => project.category.includes(selectedCategory)
    );

    return (
        <motion.section
            id="projects"
            className="max-w-7xl mx-auto px-4 py-24"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.2 }}
        >
            <motion.h2
                className="text-4xl md:text-6xl font-anton text-accent text-left mb-12 uppercase tracking-wide md:pl-[4.5vw]"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                Proyectos
            </motion.h2>

            <div className="flex flex-col md:flex-row gap-12">
                {/* Mostar las categorías */}
                {/*<div
                    ref={scrollRef}
                    className="w-full md:w-1/4 flex md:flex-col md:items-center gap-4 md:gap-6 font-inter text-white overflow-x-auto md:overflow-visible hide-scrollbar px-2"
                >
                    <div className="flex md:flex-col gap-4 md:gap-6 w-max md:w-auto">
                        {categories.map(category => (
                            <button
                                key={category}
                                onClick={() => setSelectedCategory(category)}
                                className={`text-center w-[120px] px-4 py-2 rounded-md font-inter font-medium cursor-pointer transition-colors
                                    ${selectedCategory === category ? 'bg-accent text-white' : 'text-white'}
                                `}
                                style={{
                                    outline: 'none',
                                    boxShadow: 'none',
                                    border: 'none'
                                }}
                            >
                                {category}
                            </button>
                        ))}
                    </div>
                </div>*/}

                {/* Mostar los proyectos */}
                {/*<div className="md:w-3/4 grid grid-cols-1 sm:grid-cols-2 gap-8 font-inter">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: index * 0.1 }}
                            viewport={{ once: true, amount: 0.3 }}
                        >
                            <ProjectCard project={project} />
                        </motion.div>
                    ))}
                </div>*/}

                {/* Sitio en construcción */}
                <div className="md:w-[100%] flex flex-col items-center justify-center text-center px-4 py-12">
                    <div className="animate-bounce text-accent text-6xl mb-4">
                        🛠️
                    </div>
                    <h3 className="text-white text-2xl md:text-3xl font-semibold mb-2">
                        Esta sección está en construcción
                    </h3>
                    <p className="text-gray-400 text-sm md:text-base max-w-md">
                        Estoy preparando los proyectos más interesantes que he desarrollado. ¡Pronto estarán disponibles!
                    </p>
                </div>
            </div>
        </motion.section>
    );
}