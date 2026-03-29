import { motion } from "motion/react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Bapak Ahmad",
    location: "BSD City, Tangerang",
    text: "Sangat puas dengan hasil taman minimalisnya. Pengerjaannya rapi dan timnya sangat komunikatif. Rumah jadi lebih segar!",
    rating: 5
  },
  {
    name: "Ibu Sari",
    location: "Sentul City, Bogor",
    text: "Midiplants berhasil mewujudkan taman tropis impian saya. Desainnya sangat estetik dan pemilihan tanamannya pas banget.",
    rating: 5
  },
  {
    name: "Bapak Kevin",
    location: "Menteng, Jakarta Pusat",
    text: "Jasa landscape terbaik yang pernah saya pakai. Survey gratis dan penawarannya sangat transparan. Recommended!",
    rating: 5
  }
];

export default function Testimonials() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">Testimoni</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-ink">Apa Kata Klien Kami</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testi, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl shadow-sm relative"
            >
              <Quote className="absolute top-6 right-8 w-10 h-10 text-primary/10" />
              <div className="flex gap-1 mb-4">
                {[...Array(testi.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6 leading-relaxed">
                "{testi.text}"
              </p>
              <div>
                <h4 className="font-bold text-ink">{testi.name}</h4>
                <p className="text-sm text-gray-500">{testi.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
