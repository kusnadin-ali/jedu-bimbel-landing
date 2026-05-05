export function CambridgeSpotlight() {
  const points = [
    {
      title: "Global Standard",
      desc: "Kurikulum yang diakui secara internasional, mempersiapkan murid untuk kompetisi global."
    },
    {
      title: "Critical Thinking",
      desc: "Fokus pada pemahaman konsep dan analisa, bukan sekadar hafalan materi."
    },
    {
      title: "English Proficiency",
      desc: "Pembelajaran bilingual yang membiasakan murid dengan bahasa Inggris akademik."
    },
    {
      title: "Holistic Assessment",
      desc: "Evaluasi berbasis perkembangan pemahaman (progress-focused), bukan sekadar nilai akhir."
    }
  ];

  return (
    <section className="bg-brand-ink py-20 relative overflow-hidden">
      {/* Decorative Radial Gradient */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-green/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/3"></div>

      <div className="max-w-[1160px] mx-auto px-[5%] md:px-[6%] relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left Content */}
          <div>
            <p className="text-brand-amber font-semibold text-sm mb-4 uppercase tracking-wider">
              Cambridge International
            </p>
            <h2 className="font-serif font-bold text-white mb-6 leading-tight" style={{ fontSize: "clamp(1.9rem, 3vw, 2.8rem)" }}>
              Bimbel dengan Kurikulum Cambridge
            </h2>
            <p className="text-brand-off/80 text-lg font-light leading-relaxed mb-8">
              Kami membawa standar pendidikan internasional lebih dekat dengan Anda. Metode pembelajaran yang dirancang untuk merangsang rasa ingin tahu dan mengembangkan pemikir yang mandiri.
            </p>
          </div>

          {/* Right Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {points.map((point, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-colors backdrop-blur-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-brand-amber shadow-[0_0_10px_rgba(240,165,0,0.5)]"></div>
                  <h4 className="text-white font-serif font-bold text-lg">{point.title}</h4>
                </div>
                <p className="text-brand-off/70 text-sm leading-relaxed">
                  {point.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
