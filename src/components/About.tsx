import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";

export default function About() {
  const points = [
    "Pengalaman Bertahun-tahun",
    "Pengerjaan Profesional & Rapi",
    "Desain Custom Sesuai Kebutuhan",
    "Solusi Lengkap (Desain - Maintenance)"
  ];

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop"
                alt="Landscape Work"
                className="rounded-2xl shadow-2xl relative z-10"
                referrerPolicy="no-referrer"
              />
              <div className="absolute -bottom-6 -right-6 w-64 h-64 bg-secondary/20 rounded-2xl -z-0" />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">Tentang Kami</h2>
            <h3 className="text-3xl md:text-4xl font-bold mb-6 text-ink">
              Membangun Keindahan Alam di <br /> Lingkungan Anda
            </h3>
            <p className="text-gray-600 mb-8 leading-relaxed">
              midiplants adalah jasa landscape profesional yang berfokus pada estetika dan keberlanjutan. 
              Kami percaya bahwa setiap sudut ruang hijau memiliki cerita. Kami hadir untuk memberikan 
              solusi lengkap mulai dari jasa desain taman, pembuatan, hingga perawatan rutin.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
              {points.map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="text-primary w-5 h-5" />
                  <span className="text-gray-700 font-medium">{point}</span>
                </div>
              ))}
            </div>

            <button className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-8 py-3 rounded-full font-semibold transition-all">
              Pelajari Lebih Lanjut
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
