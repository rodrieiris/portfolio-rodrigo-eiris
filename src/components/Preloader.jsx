import { motion } from 'framer-motion';

export default function Preloader() {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, delay: 2 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="relative w-32 h-32">
        {/* Logo con borde redondo */}
        <motion.img
          src="/assets/images/preload.png"
          alt="Logo de Rodrigo Eirís"
          className="rounded-full w-full h-full object-cover z-10"
          initial={{ scale: 0.6, opacity: 0 }}
          animate={{ scale: [0.6, 1.2, 0.9, 1], opacity: 1 }}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        />

        {/* Círculo animado irregular */}
        <motion.div
          className="absolute top-0 left-0 w-full h-full border-2 border-accent rounded-full circle-effect"
          animate={{ rotate: [0, 20, -15, 10, -5, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      </div>
    </motion.div>
  );
}