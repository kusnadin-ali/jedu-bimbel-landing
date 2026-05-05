import Link from "next/link";
import { MapPin } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-brand-ink text-brand-white pt-16 pb-8">
      <div className="max-w-[1160px] mx-auto px-[5%] md:px-[6%]">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
          <div className="max-w-xs">
            <p className="font-serif font-bold text-2xl mb-4">
              Jedu <span className="text-brand-green-mid">Bimbel</span>
            </p>
            <p className="text-brand-ink-soft text-sm leading-relaxed mb-6">
              Bimbel rintisan eksklusif dengan standar kurikulum Cambridge International untuk jenjang SD & SMP.
            </p>
            <div className="flex items-start gap-3 text-brand-ink-soft text-sm">
              <MapPin size={18} className="shrink-0 mt-0.5 text-brand-amber" />
              <p>Gayamprit, Klaten Selatan,<br/>Kabupaten Klaten, Jawa Tengah 57423</p>
            </div>
          </div>
          
          <div className="flex flex-col gap-3">
            <h4 className="font-serif font-bold text-lg mb-2">Navigasi</h4>
            <Link href="#program" className="text-brand-ink-soft hover:text-brand-amber transition-colors text-sm">Program</Link>
            <Link href="#keunggulan" className="text-brand-ink-soft hover:text-brand-amber transition-colors text-sm">Keunggulan</Link>
            <Link href="#jadwal" className="text-brand-ink-soft hover:text-brand-amber transition-colors text-sm">Jadwal</Link>
          </div>
        </div>
        
        <div className="border-t border-brand-ink-mid pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-brand-ink-soft text-xs">
            &copy; {new Date().getFullYear()} Jedu Bimbel. All rights reserved.
          </p>
          <p className="text-brand-ink-soft text-xs">
            Belajar Lebih Cerdas, Tumbuh Lebih Jauh.
          </p>
        </div>
      </div>
    </footer>
  );
}
