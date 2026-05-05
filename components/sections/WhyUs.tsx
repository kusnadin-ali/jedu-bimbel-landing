"use client";

import { Users, GraduationCap, Globe2, Focus, HeartHandshake } from "lucide-react";

export function WhyUs() {
  const stats = [
    { label: "Murid Aktif", value: "28" },
    { label: "Kelas", value: "Kecil" },
    { label: "Jenjang", value: "SD-SMP" },
    { label: "Standar", value: "Global" },
  ];

  const features = [
    {
      title: "Perhatian Personal Maksimal",
      desc: "Dengan kelas yang dibatasi secara ketat, setiap perkembangan murid akan terpantau detail. Kami mengenal setiap anak beserta gaya belajarnya.",
      icon: <Focus className="text-brand-green w-6 h-6" />
    },
    {
      title: "Pendekatan Kurikulum Cambridge",
      desc: "Materi disusun mengacu pada kerangka kerja Cambridge yang menekankan pada inkuiri, pemecahan masalah, dan pemahaman konsep secara mendalam.",
      icon: <Globe2 className="text-brand-green w-6 h-6" />
    },
    {
      title: "Pengajar Berdedikasi",
      desc: "Tim pengajar tidak sekadar memberikan materi, melainkan membimbing dan menginspirasi murid untuk melampaui batasan mereka.",
      icon: <GraduationCap className="text-brand-green w-6 h-6" />
    },
    {
      title: "Komunikasi Intensif Orang Tua",
      desc: "Perkembangan anak tidak hanya menjadi rapor akhir bulan. Kami melibatkan orang tua secara proaktif dalam setiap tahapan belajar anak.",
      icon: <HeartHandshake className="text-brand-green w-6 h-6" />
    },
    {
      title: "Komunitas Belajar Positif",
      desc: "Kami membangun lingkungan rintisan yang suportif antar murid, mendorong kolaborasi dan keberanian untuk bertanya tanpa takut salah.",
      icon: <Users className="text-brand-green w-6 h-6" />
    }
  ];

  return (
    <section id="keunggulan" className="py-24 bg-white relative">
      <div className="max-w-[1160px] mx-auto px-[5%] md:px-[6%]">
        
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.2fr] gap-12 lg:gap-20">
          
          {/* Left Column - Sticky Content */}
          <div className="relative">
            <div className="lg:sticky lg:top-28">
              <p className="text-brand-amber font-semibold text-sm mb-4 tracking-wide uppercase">Mengapa Kami?</p>
              <h2 className="font-serif font-bold text-brand-ink mb-6 leading-tight" style={{ fontSize: "clamp(1.9rem, 3vw, 2.8rem)" }}>
                Kecil, Eksklusif, dan Berstandar Tinggi.
              </h2>
              <p className="text-brand-ink-soft mb-10 leading-relaxed text-lg">
                Sebagai bimbel rintisan, kami menjanjikan kualitas interaksi yang tidak akan Anda temukan di bimbingan belajar korporat skala besar.
              </p>

              {/* Stat Grid */}
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, i) => (
                  <div key={i} className="bg-brand-green-xlt rounded-xl p-5 flex flex-col justify-center items-center text-center">
                    <p className="font-serif font-bold text-3xl text-brand-green mb-1">{stat.value}</p>
                    <p className="text-sm font-medium text-brand-ink-soft">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column - Feature Cards */}
          <div className="flex flex-col gap-6">
            {features.map((feature, i) => (
              <div 
                key={i} 
                className="bg-brand-off hover:bg-white border border-transparent hover:border-brand-green/20 rounded-2xl p-6 transition-all duration-300 shadow-sm hover:shadow-lg hover:-translate-y-1 flex gap-5 group"
              >
                <div className="shrink-0 mt-1">
                  <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center group-hover:bg-brand-green-xlt transition-colors">
                    {feature.icon}
                  </div>
                </div>
                <div>
                  <h3 className="font-serif font-bold text-xl text-brand-ink mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-brand-ink-soft leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
