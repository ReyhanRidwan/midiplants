import { motion } from "motion/react";

const images = [
  { url: "https://scontent.cdninstagram.com/v/t1.15752-9/657762933_1420976045996876_5059208154390473513_n.jpg?stp=dst-jpg_e15_tt6&_nc_cat=101&ccb=7-5&_nc_sid=fc17b8&efg=eyJxZV9ncm91cHMiOlsiaWdkX2Jlc3RfZWZmb3J0X2ltYWdlOnRlc3QiXX0%3D&_nc_ohc=CFjBmSKRz0oQ7kNvwE2O60U&_nc_oc=AdqxuAOSfXNkO1XiclvOSsbhNhhwmAyVB9nOJnWUvv0mHcHtE6zRFG71iRnQZa6cNf6xrFqUswAxNXeUQvSN4l1i&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.cdninstagram.com&_nc_ss=7a32e&oh=03_Q7cD5AGIc9Lj-_1CSCKaeuzO4effDUsSWlNZ-ftFvOPWebiOMA&oe=69F351EC" },
  { url: "https://scontent.fcgk33-1.fna.fbcdn.net/v/t1.15752-9/664112044_1107238804917949_4962049671179376389_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=9f807c&_nc_ohc=OvdapX5G4OwQ7kNvwF2vF6S&_nc_oc=Ado2o-8Xo-fer0evooEO6_Z75dQQlBXzeE33EXmNwpOwLmV7hp2CYfkpay93emA_vbs0vWL31D9G3N9VtYdAmX1O&_nc_zt=23&_nc_ht=scontent.fcgk33-1.fna&_nc_ss=7a3a8&oh=03_Q7cD5AEkMdu2Va_L6ZF_kr_e8VYTZ9hqHO_kUptIh1DJSpYBQQ&oe=69F47CC6" },
  { url: "https://scontent.fcgk33-1.fna.fbcdn.net/v/t1.15752-9/659650849_2908540809509293_3257047460079622925_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=7Yo8jANQ0GMQ7kNvwGaX8Jl&_nc_oc=AdqeKQXuE0kQxEsEm02P8jMlaLE7qi5CNe_p9tFWMUuz49E_DbVIc9ilev2ao9HrPFAJjubpFjBlO8XMNUc30xYn&_nc_zt=23&_nc_ht=scontent.fcgk33-1.fna&_nc_ss=7a3a8&oh=03_Q7cD5AHrDRmGVq16-mQXGF6aNUQZvgnlmO4STCNPuu5dlUHsmw&oe=69F49308" },
  { url: "https://scontent.xx.fbcdn.net/v/t1.15752-9/658372854_1669863117531731_3178817597552396113_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=9f807c&_nc_ohc=QnPadBH4fsMQ7kNvwFGklQf&_nc_oc=AdpsexyLgpye-M8H7Y3dLhLAvZ0Td_ma09ZyFDGGVk2B7En_eg2xr92JnUTizyq1-Y9OL_PDSp17VTSNvu3h2Ukp&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AHJqVj7fNrpj-Neq68ZhUfGZWd0nR0n8oSwJw7VEqyB0Q&oe=69F72CB0" },
  { url: "https://scontent.xx.fbcdn.net/v/t1.15752-9/661444452_823178730279611_7379588697716753328_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=IYxytN_cILoQ7kNvwFQ1kSC&_nc_oc=Adp0UMUqyX2-4zJldkvNyXdW5pytlW0QZy5Ioy5CozWzhL3BzThUlNwIjeBYHUfVBiof_5GNt41w076pwzRKVc3w&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AEroGxtv1QMAH_mDychaCJ2YztBIwnkelbPC0KIcw0wBg&oe=69F73EE8" },
  { url: "https://scontent.xx.fbcdn.net/v/t1.15752-9/661542538_2814491302258261_7081437908575069863_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=9f807c&_nc_ohc=dOhvMHK4hU4Q7kNvwGWYoLu&_nc_oc=AdrfHAAPb1H_gbfUSxpzDx67EmUekwvcv-1DzbJZ2TfyqupLINdaop2q31E1IvsnnwGh_OFwA7Ju4VCY-8IV8Ja0&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AE9JjZlZ97gz4kjze1xQJ5DZeuqubMl9jCR4lJqD9fMYA&oe=69F72DA9" },
  { url: "https://scontent.xx.fbcdn.net/v/t1.15752-9/658327752_957342713534054_186065741987715165_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=9f807c&_nc_ohc=y1PppfLH7zwQ7kNvwEu04nx&_nc_oc=AdqfarvT4MlFzROGfFzC2LcbmWkBxbC7rjoKxiZrBiqVrnpcHOUsjlqvAVQ7HQe0I9GkVgcVdY8KpVafKN9zEhhB&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AE71vZv7x2HW-16ws4GbC-Hj_eK2p8pP5GNTpAGMJZpmQ&oe=69F73AB7" },
  { url: "https://scontent.xx.fbcdn.net/v/t1.15752-9/664731380_1857324728309573_836257247417149924_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=EC50d4os7eYQ7kNvwGGxkBv&_nc_oc=Adqz2lZI60sgg0OkkO8t9YsuA9NYJfgFywTNcbCWAdvwKyJbqeR8RF7GyhR2ytkpTNs8262oo-ct87D-m6k0dl-m&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.xx&_nc_ss=7a32e&oh=03_Q7cD5AHQPb9k9trKg5ahicICWFjgEyjYpOwhvFVSVftFzlkpNA&oe=69F747BF" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-sm uppercase tracking-widest text-primary font-bold mb-4">Portfolio</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-ink">Proyek Terbaru Kami</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {images.map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="aspect-[16/9] overflow-hidden rounded-2xl relative group cursor-pointer shadow-lg"
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
