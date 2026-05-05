"use client";

import { BookMarked, CheckCircle2, Languages, Sparkles, PencilLine } from "lucide-react";

export function Programs() {
  const programs = [
    {
      id: "paket-reguler",
      title: "Paket Reguler (3-in-1)",
      description: "Paket wajib yang dirancang untuk penguasaan materi sekolah secara menyeluruh. Ketiga mata pelajaran ini merupakan satu kesatuan paket.",
      icon: <Sparkles size={48} className="text-brand-amber" />,
      level: "SD & SMP",
      subjects: ["Matematika", "Ilmu Pengetahuan Alam", "Bahasa Indonesia"],
      tags: ["Kurikulum Nasional", "Cambridge Math & Science", "Literasi"],
      featured: true,
      span2: true,
    },
    {
      id: "bahasa-inggris",
      title: "Bahasa Inggris",
      description: "Program pengembangan kemampuan bahasa Inggris (Speaking, Listening, Reading, Writing) dengan standar kurikulum global.",
      icon: <Languages size={48} className="text-brand-green" />,
      level: "SD & SMP",
      tags: ["Cambridge English", "Conversation", "Grammar"],
      featured: false,
      span2: false,
    },
    {
      id: "calistung",
      title: "Calistung",
      description: "Pondasi membaca, menulis, dan berhitung dengan metode menyenangkan dan interaktif untuk persiapan sekolah.",
      icon: <PencilLine size={48} className="text-brand-green" />,
      level: "PAUD & SD Awal",
      tags: ["Membaca", "Menulis", "Logika Dasar"],
      featured: false,
      span2: false,
    },
  ];

  return (
    <section id="program" className="py-20 bg-brand-off">
      <div className="max-w-[1160px] mx-auto px-[5%] md:px-[6%]">

        <div className="text-center mb-16">
          <p className="text-brand-amber font-semibold text-sm mb-2 tracking-wide uppercase">Program Kami</p>
          <h2 className="font-serif font-bold text-brand-ink mb-4" style={{ fontSize: "clamp(1.9rem, 3vw, 2.8rem)" }}>
            Pilihan Program <em className="text-brand-green-mid">Terbaik</em>
          </h2>
          <p className="text-brand-ink-soft max-w-2xl mx-auto">
            Kami menawarkan program yang fokus pada penguasaan konsep mendalam sesuai dengan kebutuhan perkembangan anak.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {programs.map((prog) => (
            <div
              key={prog.id}
              className={`p-6 md:p-8 rounded-3xl border-none shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 flex flex-col ${prog.featured ? "bg-brand-green text-white lg:col-span-2" : "bg-white"
                }`}
            >
              <div className="flex justify-between items-start mb-6">
                <div className={`p-4 rounded-2xl ${prog.featured ? "bg-white/10" : "bg-brand-green-xlt"}`}>
                  {prog.icon}
                </div>
                <span
                  className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${prog.featured ? "bg-brand-amber text-brand-ink" : "bg-brand-green-xlt text-brand-green"
                    }`}
                >
                  {prog.featured ? "Paling Populer" : "Mandiri"}
                </span>
              </div>

              <div className="flex-grow">
                <h3 className={`font-serif font-bold text-2xl mb-3 ${prog.featured ? "text-white" : "text-brand-ink"}`}>
                  {prog.title}
                </h3>
                <p className={`text-sm md:text-base mb-6 leading-relaxed ${prog.featured ? "text-white/90" : "text-brand-ink-soft"}`}>
                  {prog.description}
                </p>

                {prog.subjects && (
                  <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-3">
                    {prog.subjects.map((sub) => (
                      <div key={sub} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm rounded-xl p-3 border border-white/20">
                        <CheckCircle2 size={18} className="text-brand-amber shrink-0" />
                        <span className="text-xs font-bold text-white">{sub}</span>
                      </div>
                    ))}
                  </div>
                )}

                <div className="flex flex-wrap gap-2 mb-8">
                  {prog.tags.map(tag => (
                    <span
                      key={tag}
                      className={`text-xs px-3 py-1 rounded-full border ${prog.featured ? "border-white/30 text-white/90" : "border-brand-off text-brand-ink-soft"
                        }`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="pt-6 mt-auto border-t border-dashed border-opacity-20 border-current flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <BookMarked size={18} className={prog.featured ? "text-brand-amber" : "text-brand-green"} />
                  <span className={`text-sm font-bold ${prog.featured ? "text-white" : "text-brand-ink"}`}>
                    {prog.level}
                  </span>
                </div>
                {prog.featured && (
                  <span className="text-[10px] font-bold text-brand-amber uppercase tracking-widest bg-brand-ink/30 px-2 py-1 rounded">
                    Satu Paket
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
