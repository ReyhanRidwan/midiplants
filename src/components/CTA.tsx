import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-24 bg-primary relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-white/5 rounded-full translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Wujudkan Taman Impian Anda Sekarang
          </h2>
          <p className="text-white/80 text-lg mb-10 max-w-2xl mx-auto">
            Jangan biarkan lahan Anda kosong. Konsultasikan desain taman terbaik 
            bersama tim ahli midiplants secara gratis.
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20midiplants,%20saya%20ingin%20konsultasi%20taman"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-primary hover:bg-gray-100 px-10 py-4 rounded-full text-xl font-bold transition-all transform hover:scale-105 shadow-xl"
          >
            <MessageCircle className="w-6 h-6" />
            Chat WhatsApp Sekarang
          </a>
        </motion.div>
      </div>
    </section>
  );
}
