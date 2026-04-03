import { motion } from "motion/react";
import { Leaf, Palmtree, Box, Layout, Droplets, Home } from "lucide-react";

const services = [
  {
    title: "Taman Minimalis",
    description: "Desain simpel namun elegan, cocok untuk lahan terbatas dengan perawatan mudah.",
    icon: Leaf,
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/658372854_1669863117531731_3178817597552396113_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=QnPadBH4fsMQ7kNvwFGklQf&_nc_oc=AdpsexyLgpye-M8H7Y3dLhLAvZ0Td_ma09ZyFDGGVk2B7En_eg2xr92JnUTizyq1-Y9OL_PDSp17VTSNvu3h2Ukp&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AHJqVj7fNrpj-Neq68ZhUfGZWd0nR0n8oSwJw7VEqyB0Q&oe=69F72CB0"
  },
  {
    title: "Taman Tropis",
    description: "Suasana rimbun dan segar dengan tanaman eksotis khas iklim tropis.",
    icon: Palmtree,
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/658917299_1254254786860905_4129162894248003456_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=K7J2P7Xd0TcQ7kNvwEmK3e3&_nc_oc=AdqizmnX7TZtC0wysxB92RVzme--Q81VphT0C5dw7LUREaGdzfJDX0XQj_aIRyw6g-OpIM8iE2UTIZ9nwq-u0UKe&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AFIJq2BOcWsY3XqVLDr1fdW1C5MTDabEFM4OVBhREN_FA&oe=69F75328"
  },
  {
    title: "Taman Kering",
    description: "Perpaduan batu alam dan tanaman tahan panas, minim perawatan dan tetap estetik.",
    icon: Box,
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/661444452_823178730279611_7379588697716753328_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=IYxytN_cILoQ7kNvwFQ1kSC&_nc_oc=Adp0UMUqyX2-4zJldkvNyXdW5pytlW0QZy5Ioy5CozWzhL3BzThUlNwIjeBYHUfVBiof_5GNt41w076pwzRKVc3w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AEroGxtv1QMAH_mDychaCJ2YztBIwnkelbPC0KIcw0wBg&oe=69F73EE8"
  },
  {
    title: "Vertical Garden",
    description: "Solusi hijau untuk dinding rumah, memberikan kesegaran tanpa memakan lahan.",
    icon: Layout,
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/661542538_2814491302258261_7081437908575069863_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=dOhvMHK4hU4Q7kNvwGWYoLu&_nc_oc=AdrfHAAPb1H_gbfUSxpzDx67EmUekwvcv-1DzbJZ2TfyqupLINdaop2q31E1IvsnnwGh_OFwA7Ju4VCY-8IV8Ja0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AE9JjZlZ97gz4kjze1xQJ5DZeuqubMl9jCR4lJqD9fMYA&oe=69F72DA9"
  },
  {
    title: "Kolam Hias / Air Mancur",
    description: "Elemen air untuk menambah ketenangan dan kesejukan di taman Anda.",
    icon: Droplets,
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/658327752_957342713534054_186065741987715165_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=y1PppfLH7zwQ7kNvwEu04nx&_nc_oc=AdqfarvT4MlFzROGfFzC2LcbmWkBxbC7rjoKxiZrBiqVrnpcHOUsjlqvAVQ7HQe0I9GkVgcVdY8KpVafKN9zEhhB&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AE71vZv7x2HW-16ws4GbC-Hj_eK2p8pP5GNTpAGMJZpmQ&oe=69F73AB7"
  },
  {
    title: "Gazebo & Hardscape",
    description: "Pembangunan area santai, jalan setapak, dan elemen keras taman lainnya.",
    icon: Home,
    image: "https://scontent.xx.fbcdn.net/v/t1.15752-9/664731380_1857324728309573_836257247417149924_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=EC50d4os7eYQ7kNvwGGxkBv&_nc_oc=Adqz2lZI60sgg0OkkO8t9YsuA9NYJfgFywTNcbCWAdvwKyJbqeR8RF7GyhR2ytkpTNs8262oo-ct87D-m6k0dl-m&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AHQPb9k9trKg5ahicICWFjgEyjYpOwhvFVSVftFzlkpNA&oe=69F747BF"
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
