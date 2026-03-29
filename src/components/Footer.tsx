import { Instagram, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-ink text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div>
            <h2 className="text-2xl font-bold mb-6 tracking-tighter">midiplants</h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              Jasa landscape profesional yang menghadirkan keindahan alam ke dalam hunian Anda. 
              Desain estetik, pengerjaan rapi, dan hasil maksimal.
            </p>
            <div className="flex gap-4">
              <a href="https://www.instagram.com/midiplants/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-6">Navigasi</h4>
            <ul className="space-y-4 text-gray-400">
              <li><a href="#home" className="hover:text-primary transition-colors">Beranda</a></li>
              <li><a href="#about" className="hover:text-primary transition-colors">Tentang Kami</a></li>
              <li><a href="#services" className="hover:text-primary transition-colors">Layanan</a></li>
              <li><a href="#portfolio" className="hover:text-primary transition-colors">Portfolio</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-bold mb-6">Kontak Kami</h4>
            <ul className="space-y-4 text-gray-400">
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+62 812-3456-7890</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>halo@midiplants.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0" />
                <span>Melayani Jabodetabek & Jawa Barat</span>
              </li>
            </ul>
          </div>

          {/* Newsletter/SEO */}
          <div>
            <h4 className="text-lg font-bold mb-6">Lokasi Layanan</h4>
            <div className="flex flex-wrap gap-2">
              {["Jakarta", "Bogor", "Depok", "Tangerang", "Bekasi", "Bandung"].map((city) => (
                <span key={city} className="text-xs bg-white/5 px-3 py-1 rounded-full text-gray-400">
                  {city}
                </span>
              ))}
            </div>
            <p className="mt-6 text-xs text-gray-500 italic">
              #jasataman #tukangtaman #jasalandscape #pembuatantamanrumah
            </p>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} midiplants. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
