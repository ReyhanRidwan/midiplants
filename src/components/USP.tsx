import { motion } from "motion/react";
import { Coffee, ShieldCheck, Users, Timer } from "lucide-react";

const usps = [
  {
    title: "Konsultasi & Survey Gratis",
    description: "Kami berikan layanan konsultasi dan survey lokasi tanpa dipungut biaya sepeserpun.",
    icon: Coffee
  },
  {
    title: "Desain Sesuai Budget",
    description: "Fleksibilitas desain yang bisa disesuaikan dengan anggaran yang Anda miliki.",
    icon: ShieldCheck
  },
  {
    title: "Tim Profesional",
    description: "Dikerjakan oleh tenaga ahli yang sudah berpengalaman bertahun-tahun di bidang landscape.",
    icon: Users
  },
  {
    title: "Tepat Waktu",
    description: "Komitmen kami adalah menyelesaikan pengerjaan sesuai dengan jadwal yang disepakati.",
    icon: Timer
  }
];

export default function USP() {
  return (
    <section className="py-24 bg-primary text-white">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {usps.map((usp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-2xl mb-6">
                <usp.icon className="w-8 h-8 text-secondary" />
              </div>
              <h4 className="text-xl font-bold mb-4">{usp.title}</h4>
              <p className="text-white/70 leading-relaxed">
                {usp.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
