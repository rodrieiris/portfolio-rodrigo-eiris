// src/components/About.jsx
import { motion } from 'framer-motion';
import { useState } from 'react';
import profileImg from '@/assets/images/img_rodrigo.jpg';

export default function About() {
    const [expanded, setExpanded] = useState(false);

    return (
        <section className="max-w-6xl mx-auto px-4 py-24" id="about">
            <div className="flex flex-col md:flex-row items-center gap-12">
                <motion.div
                    className="md:w-1/2 text-white"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h2 className="text-3xl md:text-4xl font-anton font-bold mb-6 text-accent">Sobre mí</h2>

                    <p className="text-base font-inter leading-7 mb-4">
                        Siempre me ha fascinado cómo la tecnología puede dar forma a soluciones reales. Como desarrollador de software, disfruto creando interfaces limpias, funcionales y accesibles. Trabajo con tecnologías como Python, Hadoop, Spark, Pandas, NumPy, Matplotlib, Seaborn, XGBoost, TensorFlow, PyTorch, SQL, C#, .Net, Angular, React, Django, HTML, CSS, JavaScript y mi objetivo no es solo que algo se vea bien, sino que tenga sentido, que sea intuitivo y útil para quien lo usa.
                    </p>

                    {expanded && (
                        <>
                            <p className="text-base font-inter leading-7 mb-4">
                                Mi principal motivación es la resolución de problemas reales a través del código, buscando siempre la mejor experiencia para el usuario sin perder de vista el potencial que ofrece la Inteligencia Artificial y las más avanzadas tecnologías.
                            </p>
                            <p className="text-base font-inter leading-7 mb-4">
                                La experiencia adquirida con los años me ha enseñado que el buen desarrollo va más allá del código: se trata de combinar eficiencia técnica con la comprensión del problema.
                            </p>
                            <p className="text-base font-inter leading-7 mb-4">
                                Mi objetivo es seguir creciendo profesionalmente y contribuir a proyectos innovadores que generen un impacto positivo, aprovechando mis principales cualidades.
                            </p>
                            <p className="text-base font-inter leading-7 mb-4">
                                La perseverancia y el trabajo en equipo son aptitudes que me definen y siempre necesarias en el sector tecnológico.
                            </p>
                        </>
                    )}

                    <span
                        onClick={() => setExpanded(prev => !prev)}
                        className="inline-block font-inter text-accent cursor-pointer transition duration-200 hover:border-b hover:border-accent hover:pb-[1px]"
                    >
                        {expanded ? 'Leer menos' : 'Leer más'}
                    </span>

                </motion.div>

                <motion.div
                    className="md:w-1/2 flex flex-col items-center text-center"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <img
                        src={profileImg}
                        alt="Foto de Rodrigo Eirís"
                        className="rounded-lg shadow-lg w-full max-w-xs"
                    />
                    <p className="mt-4 text-sm text-gray-400 font-lora">
                        “Enamorado del código y del aprendizaje constante.”
                    </p>
                </motion.div>
            </div>
        </section>
    );
}