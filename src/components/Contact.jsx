import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

export default function Contact() {
    const formRef = useRef();
    const [isSent, setIsSent] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setLoading(true);

        emailjs.sendForm(
            'TU_SERVICE_ID',
            'TU_TEMPLATE_ID',
            formRef.current,
            'TU_PUBLIC_KEY'
        )
            .then(() => {
                setLoading(false);
                setIsSent(true);
                formRef.current.reset();
                setTimeout(() => setIsSent(false), 5000);
            })
            .catch((error) => {
                console.error('EmailJS error:', error);
                setLoading(false);
                alert('Ocurrió un error al enviar el mensaje.');
            });
    };

    return (
        <motion.section
            id="contact"
            className="max-w-4xl mx-auto px-4 py-24"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.3 }}
        >
            <motion.h2
                className="text-3xl md:text-4xl font-anton font-bold text-accent text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                Contacto
            </motion.h2>

            <motion.form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-6 text-white"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 1 }}
            >
                <div>
                    <label htmlFor="name" className="block font-inter mb-1 text-sm">Nombre</label>
                    <input
                        type="text"
                        name="user_name"
                        id="name"
                        required
                        className="w-full px-4 py-2 rounded bg-[#1f1f1f] text-[#D1D5DB] border border-gray-600 font-inter focus:border-accent focus:outline-none"
                    />
                </div>

                <div>
                    <label htmlFor="email" className="block font-inter mb-1 text-sm">Email</label>
                    <input
                        type="email"
                        name="user_email"
                        id="email"
                        required
                        className="w-full px-4 py-2 rounded bg-[#1f1f1f] text-[#D1D5DB] border border-gray-600 font-inter focus:border-accent focus:outline-none"
                    />
                </div>

                <div>
                    <label htmlFor="message" className="block font-inter mb-1 text-sm">Mensaje</label>
                    <textarea
                        name="message"
                        id="message"
                        rows="5"
                        required
                        className="w-full px-4 py-2 min-h-[150px] resize-none overflow-y-auto rounded bg-[#1f1f1f] text-[#D1D5DB] border border-gray-600 font-inter focus:border-accent focus:outline-none"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="mt-4 bg-accent text-white px-6 py-3 rounded-lg font-inter font-semibold hover:bg-opacity-90 transition border border-accent focus:outline-none focus:ring-0 focus:border-accent active:outline-none active:ring-0 active:border-accent hover:outline-none hover:ring-0 hover:border-accent"
                    disabled={loading}
                >
                    {loading ? 'Enviando...' : 'Enviar mensaje'}
                </button>

                {isSent && (
                    <motion.p
                        className="text-green-400 text-sm mt-4"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6 }}
                    >
                        ¡Tu mensaje ha sido enviado correctamente!
                    </motion.p>
                )}
            </motion.form>
        </motion.section>
    );
}