import { motion } from "motion/react";
import { Leaf, Palmtree, Box, Layout, Droplets, Home } from "lucide-react";

const services = [
  {
    title: "Taman Minimalis",
    description: "Desain simpel namun elegan, cocok untuk lahan terbatas dengan perawatan mudah.",
    icon: Leaf,
    image: "/image/Tamanminimalis.webp"
  },
  {
    title: "Taman Tropis",
    description: "Suasana rimbun dan segar dengan tanaman eksotis khas iklim tropis.",
    icon: Palmtree,
    image: "/image/taman4.webp"
  },
  {
    title: "Taman Kering",
    description: "Perpaduan batu alam dan tanaman tahan panas, minim perawatan dan tetap estetik.",
    icon: Box,
    image: "/image/tamankering.jpeg"
  },
  {
    title: "Vertical Garden",
    description: "Solusi hijau untuk dinding rumah, memberikan kesegaran tanpa memakan lahan.",
    icon: Layout,
    image: "/image/verticalgarden.webp"
  },
  {
    title: "Kolam Hias / Air Mancur",
    description: "Elemen air untuk menambah ketenangan dan kesejukan di taman Anda.",
    icon: Droplets,
    image: "/image/kolamhias.webp"
  },
  {
    title: "Gazebo & Hardscape",
    description: "Pembangunan area santai, jalan setapak, dan elemen keras taman lainnya.",
    icon: Home,
    image: "/image/hardscape.webp"
  }
];

export default function Services() {
  return (
    <section id="services" className="py-24 bg-gray-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">Layanan Kami</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-ink">Solusi Lengkap Untuk Taman Anda</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all"
            >
              <div className="h-48 overflow-hidden relative">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 bg-white p-2 rounded-lg shadow-sm">
                  <service.icon className="w-6 h-6 text-primary" />
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-3 text-ink">{service.title}</h4>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
