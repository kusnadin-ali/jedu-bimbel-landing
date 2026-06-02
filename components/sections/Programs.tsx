"use client";

import { CheckCircle2, Star, ClipboardList } from "lucide-react";

export function Programs() {
  const programs = [
    {
      id: "calistung",
      title: "Calistung",
      price: "Rp 200.000",
      level: "PAUD & SD Awal",
      description: "Pondasi membaca, menulis, dan berhitung dengan metode bertahap menggunakan buku panduan khusus dan lembar kerja.",
      subjects: ["Membaca", "Menulis", "Berhitung"],
      theme: "white" as const,
    },
    {
      id: "paket-sd",
      title: "Paket SD",
      price: "Rp 250.000",
      level: "SD",
      description: "Tiga mata pelajaran inti dalam satu paket terpadu sesuai kurikulum nasional untuk jenjang Sekolah Dasar.",
      subjects: ["Matematika", "B. Indonesia", "IPAS"],
      theme: "green" as const,
    },
    {
      id: "cambridge-primary",
      title: "Cambridge Primary",
      price: "Rp 300.000",
      level: "SD (Cambridge)",
      description: "Pendampingan belajar berbasis kurikulum Cambridge International untuk tingkat Primary.",
      subjects: ["Math", "B. Indonesia", "Science"],
      theme: "dark" as const,
    },
    {
      id: "paket-smp",
      title: "Paket SMP",
      price: "Rp 300.000",
      level: "SMP",
      description: "Tiga mata pelajaran inti dalam satu paket terpadu sesuai kurikulum nasional untuk jenjang SMP.",
      subjects: ["Matematika", "B. Indonesia", "IPA"],
      theme: "green" as const,
    },
    {
      id: "cambridge-junior",
      title: "Cambridge Junior",
      price: "Rp 350.000",
      level: "SMP (Cambridge)",
      description: "Pendampingan belajar berbasis kurikulum Cambridge International untuk tingkat Junior.",
      subjects: ["Math", "B. Indonesia", "Science"],
      theme: "dark" as const,
    },
  ];

  const themeMap = {
    white: {
      card: "bg-white",
      badge: "bg-brand-green-xlt text-brand-green",
      title: "text-brand-ink",
      price: "text-brand-green",
      priceSub: "text-brand-ink-soft",
      desc: "text-brand-ink-soft",
      subjectBg: "bg-brand-off",
      subjectText: "text-brand-ink",
      check: "text-brand-green",
      isCambridge: false,
    },
    green: {
      card: "bg-brand-green",
      badge: "bg-white/20 text-white",
      title: "text-white",
      price: "text-brand-amber",
      priceSub: "text-white/60",
      desc: "text-white/80",
      subjectBg: "bg-white/10",
      subjectText: "text-white",
      check: "text-brand-amber",
      isCambridge: false,
    },
    dark: {
      card: "bg-brand-ink",
      badge: "bg-white/10 text-white/80",
      title: "text-white",
      price: "text-brand-amber",
      priceSub: "text-white/50",
      desc: "text-white/70",
      subjectBg: "bg-white/10",
      subjectText: "text-white",
      check: "text-brand-amber",
      isCambridge: true,
    },
  };

  return (
    <section id="program" className="py-20 bg-brand-off">
      <div className="max-w-[1160px] mx-auto px-[5%] md:px-[6%]">

        <div className="text-center mb-16">
          <p className="text-brand-amber font-semibold text-sm mb-2 tracking-wide uppercase">Program Kami</p>
          <h2 className="font-serif font-bold text-brand-ink mb-4" style={{ fontSize: "clamp(1.9rem, 3vw, 2.8rem)" }}>
            Pilihan Program <em className="text-brand-green-mid">Terbaik</em>
          </h2>
          <p className="text-brand-ink-soft max-w-2xl mx-auto">
            Semua program dilaksanakan{" "}
            <strong className="font-semibold text-brand-ink">2 kali pertemuan per minggu</strong>{" "}
            dalam kelompok kecil 8–10 siswa per kelas.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((prog) => {
            const t = themeMap[prog.theme];
            return (
              <div
                key={prog.id}
                className={`relative p-6 rounded-3xl flex flex-col shadow-sm hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ${t.card}`}
              >
                {t.isCambridge && (
                  <div className="absolute top-5 right-5">
                    <span className="flex items-center gap-1 bg-brand-amber text-brand-ink text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full">
                      <Star size={9} fill="currentColor" />
                      Cambridge
                    </span>
                  </div>
                )}

                <div className="mb-4">
                  <span className={`text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full ${t.badge}`}>
                    {prog.level}
                  </span>
                </div>

                <h3 className={`font-serif font-bold text-2xl mb-1 ${t.title}`}>
                  {prog.title}
                </h3>

                <div className={`flex items-baseline gap-1.5 mb-1`}>
                  <span className={`text-3xl font-black ${t.price}`}>{prog.price}</span>
                  <span className={`text-xs font-medium ${t.priceSub}`}>/ bulan</span>
                </div>
                <p className={`text-xs mb-4 ${t.priceSub}`}>2&times; pertemuan/minggu</p>

                <p className={`text-sm leading-relaxed mb-5 ${t.desc}`}>
                  {prog.description}
                </p>

                <div className="mt-auto flex flex-col gap-2">
                  {prog.subjects.map((sub) => (
                    <div
                      key={sub}
                      className={`flex items-center gap-2 rounded-xl px-3 py-2 ${t.subjectBg}`}
                    >
                      <CheckCircle2 size={15} className={`${t.check} shrink-0`} />
                      <span className={`text-sm font-medium ${t.subjectText}`}>{sub}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center">
          <div className="inline-flex items-start gap-4 bg-white border border-brand-green/20 rounded-2xl px-6 py-5 shadow-sm max-w-xl w-full">
            <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-brand-amber/10 flex items-center justify-center mt-0.5">
              <ClipboardList size={20} className="text-brand-amber" />
            </div>
            <div>
              <p className="font-semibold text-brand-ink text-sm mb-0.5">Biaya Pendaftaran</p>
              <p className="text-brand-green font-black text-2xl leading-tight">Rp 150.000</p>
              <p className="text-brand-ink-soft text-xs mt-1">
                Dibayarkan sekali di awal pendaftaran &mdash; <strong className="text-brand-ink font-semibold">tidak termasuk biaya bulanan</strong>.
              </p>
            </div>
          </div>
        </div>

        <p className="text-center text-xs text-brand-ink-soft mt-6">
          * Tersedia kelas khusus Matematika untuk SD &amp; SMP. Hubungi kami untuk konsultasi lebih lanjut.
        </p>
      </div>
    </section>
  );
}
