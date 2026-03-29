import { motion } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Konsultasi",
    description: "Hubungi kami via WhatsApp untuk konsultasi awal mengenai kebutuhan taman Anda."
  },
  {
    number: "02",
    title: "Survey Lokasi",
    description: "Tim kami akan datang ke lokasi untuk melakukan pengukuran dan survey kondisi lahan."
  },
  {
    number: "03",
    title: "Desain & Penawaran",
    description: "Kami buatkan desain visual dan rincian biaya pengerjaan sesuai budget Anda."
  },
  {
    number: "04",
    title: "Pengerjaan",
    description: "Proses eksekusi taman oleh tim profesional kami dengan pengawasan ketat."
  },
  {
    number: "05",
    title: "Finishing",
    description: "Pengecekan akhir dan serah terima taman yang sudah siap dinikmati."
  }
];

export default function Process() {
  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">Cara Kerja</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-ink">Langkah Mudah Memiliki Taman Impian</h3>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-0.5 bg-gray-100 -translate-y-1/2 -z-0" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center group"
              >
                <div className="w-16 h-16 bg-white border-2 border-primary text-primary rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold mb-3 text-ink">{step.title}</h4>
                <p className="text-gray-500 text-sm leading-relaxed">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
