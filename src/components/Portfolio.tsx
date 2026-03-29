import { motion } from "motion/react";

const images = [
  { url: "/image/gambar proyek1.jpg", class: "masonry-item-tall" },
  { url: "/image/gambarproyek2.jpg", class: "masonry-item" },
  { url: "/image/gambaroyek3.jpg", class: "masonry-item-short" },
  { url: "/image/gambarproyek4.jpg", class: "masonry-item" },
  { url: "/image/Tamanminimalis.webp", class: "masonry-item-tall" },
  { url: "/image/taman4.webp", class: "masonry-item-short" },
  { url: "/image/verticalgarden.webp", class: "masonry-item" },
  { url: "/image/kolamhias.webp", class: "masonry-item-tall" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-ink">Proyek Terbaru Kami</h3>
        </div>

        <div className="masonry-grid gap-4">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`${img.class} overflow-hidden rounded-xl relative group cursor-pointer`}
            >
              <img
                src={img.url}
                alt={`Portfolio ${index}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                loading="lazy"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <span className="text-white font-semibold border-2 border-white px-6 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform">
                  Lihat Detail
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
