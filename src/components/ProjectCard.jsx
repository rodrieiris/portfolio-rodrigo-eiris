import { motion } from 'framer-motion';

export default function ProjectCard({ project }) {
    return (
        <motion.a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block font-inter bg-[#1e1e1e] rounded-xl overflow-hidden shadow-lg border border-gray-700 hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
        >
            <img
                src={project.image}
                alt={project.title}
                className="w-full h-52 object-cover"
            />
            <div className="p-4">
                <h3 className="text-xl font-inter font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-sm font-inter text-gray-400 truncate max-w-[395px]">{project.description}</p>
            </div>
        </motion.a>
    );
}