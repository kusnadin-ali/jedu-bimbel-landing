"use client";

import { useState } from "react";
import { MessageCircle } from "lucide-react";

export function CtaForm() {
  const [formData, setFormData] = useState({
    parentName: "",
    childName: "",
    grade: "",
    subject: "",
  });

  const handleChange = (name: string, value: string) => {
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Generate WhatsApp message
    const message = `Halo Jedu Bimbel! Saya ingin mendaftar dengan detail berikut:%0A%0A`
      + `*Nama Orang Tua:* ${formData.parentName}%0A`
      + `*Nama Anak:* ${formData.childName}%0A`
      + `*Jenjang/Kelas:* ${formData.grade}%0A`
      + `*Program Minat:* ${formData.subject}%0A%0A`
      + `Mohon info jadwal dan ketersediaan kuota. Terima kasih!`;

    // Redirect to WhatsApp
    window.open(`https://wa.me/6281321018850?text=${message}`, '_blank');
  };

  const inputClasses = "w-full h-12 bg-white/10 border border-white/20 rounded-xl px-4 text-white placeholder:text-white/40 outline-none focus:border-brand-amber transition-all";
  const labelClasses = "text-white/90 font-medium block mb-2 text-sm";

  return (
    <section id="daftar" className="py-20 bg-white">
      <div className="max-w-[1160px] mx-auto px-[5%] md:px-[6%]">

        <div className="bg-brand-green rounded-3xl relative overflow-hidden shadow-2xl p-8 md:p-14">

          {/* Decorative Circles */}
          <div className="absolute -top-24 -left-24 w-64 h-64 border-[30px] border-brand-green-mid/30 rounded-full"></div>
          <div className="absolute -bottom-32 -right-32 w-96 h-96 border-[40px] border-brand-green-mid/20 rounded-full"></div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">

            {/* Left Content */}
            <div className="flex flex-col justify-center">
              <p className="text-brand-amber font-semibold text-sm mb-4 tracking-wide uppercase">Pendaftaran</p>
              <h2 className="font-serif font-bold text-white mb-6 leading-tight" style={{ fontSize: "clamp(2rem, 3.5vw, 3rem)" }}>
                Amankan Kursi Anak Anda <em className="text-brand-amber italic not-italic-fallback">Sekarang</em>
              </h2>
              <p className="text-brand-green-lt text-lg leading-relaxed mb-8 max-w-md">
                Karena kami membatasi jumlah murid per kelas untuk menjaga kualitas interaksi, pendaftaran ditutup segera setelah kuota terpenuhi.
              </p>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full border-2 border-brand-amber text-brand-amber flex items-center justify-center font-bold font-serif text-xl">
                  28
                </div>
                <p className="text-white text-sm font-medium">Slot Tersisa <br />Angkatan Ini</p>
              </div>
            </div>

            {/* Right Form Card */}
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-6 md:p-8">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">

                {/* Nama Orang Tua */}
                <div>
                  <label className={labelClasses}>Nama Orang Tua</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama Anda"
                    className={inputClasses}
                    value={formData.parentName}
                    onChange={(e) => handleChange("parentName", e.target.value)}
                    required
                  />
                </div>

                {/* Nama Anak */}
                <div>
                  <label className={labelClasses}>Nama Anak</label>
                  <input
                    type="text"
                    placeholder="Masukkan nama anak"
                    className={inputClasses}
                    value={formData.childName}
                    onChange={(e) => handleChange("childName", e.target.value)}
                    required
                  />
                </div>

                {/* Jenjang */}
                <div>
                  <label className={labelClasses}>Jenjang</label>
                  <select
                    className={`${inputClasses} appearance-none cursor-pointer`}
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}
                    value={formData.grade}
                    onChange={(e) => handleChange("grade", e.target.value)}
                    required
                  >
                    <option value="" disabled className="text-brand-ink">Pilih jenjang</option>
                    <option value="PAUD / SD Awal" className="text-brand-ink">PAUD / SD Awal (Calistung)</option>
                    <option value="SD Kelas 1-3" className="text-brand-ink">SD (Kelas 1 – 3)</option>
                    <option value="SD Kelas 4-6" className="text-brand-ink">SD (Kelas 4 – 6)</option>
                    <option value="SMP" className="text-brand-ink">SMP</option>
                  </select>
                </div>

                {/* Program Minat */}
                <div>
                  <label className={labelClasses}>Program Minat Utama</label>
                  <select
                    className={`${inputClasses} appearance-none cursor-pointer`}
                    style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 24 24' stroke='white'%3E%3Cpath stroke-linecap='round' stroke-linejoin='round' stroke-width='2' d='M19 9l-7 7-7-7'%3E%3C/path%3E%3C/svg%3E")`, backgroundRepeat: 'no-repeat', backgroundPosition: 'right 1rem center', backgroundSize: '1.2em' }}
                    value={formData.subject}
                    onChange={(e) => handleChange("subject", e.target.value)}
                    required
                  >
                    <option value="" disabled className="text-brand-ink">Pilih program</option>
                    <option value="Calistung (Rp 150.000)" className="text-brand-ink">Calistung – Rp 150.000/bln</option>
                    <option value="Paket SD (Rp 200.000)" className="text-brand-ink">Paket SD – Rp 200.000/bln</option>
                    <option value="Paket Cambridge Primary (Rp 250.000)" className="text-brand-ink">Cambridge Primary – Rp 250.000/bln</option>
                    <option value="Paket SMP (Rp 300.000)" className="text-brand-ink">Paket SMP – Rp 300.000/bln</option>
                    <option value="Paket Cambridge Junior (Rp 350.000)" className="text-brand-ink">Cambridge Junior – Rp 350.000/bln</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="w-full bg-brand-amber text-brand-ink font-bold h-12 rounded-xl shadow-lg hover:-translate-y-1 active:scale-95 transition-all mt-2"
                >
                  Kirim Form via WhatsApp
                </button>

                <div className="flex items-center justify-center gap-2 text-white/50">
                  <span className="w-1/4 h-px bg-white/10"></span>
                  <span className="text-[10px] uppercase tracking-widest font-bold">Atau chat langsung</span>
                  <span className="w-1/4 h-px bg-white/10"></span>
                </div>

                <button
                  type="button"
                  className="w-full bg-white/10 text-white font-medium h-12 rounded-xl hover:bg-white/20 active:scale-95 transition-all flex items-center justify-center gap-2"
                  onClick={() => window.open('https://wa.me/6281321018850', '_blank')}
                >
                  <MessageCircle size={18} />
                  Tanya via WhatsApp
                </button>
              </form>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
