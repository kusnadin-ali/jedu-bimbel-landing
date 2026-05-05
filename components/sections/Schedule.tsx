"use client";

export function Schedule() {
  const scheduleData = [
    {
      id: 1,
      day: "Senin",
      time: "15:00 - 16:30",
      subject: "Matematika",
      level: "SD (Kelas 4-6)",
      levelColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 2,
      day: "Senin",
      time: "16:30 - 18:00",
      subject: "Science",
      level: "SMP",
      levelColor: "bg-amber-100 text-amber-700",
    },
    {
      id: 3,
      day: "Selasa",
      time: "15:00 - 16:30",
      subject: "Bahasa Indonesia",
      level: "SD (Kelas 1-3)",
      levelColor: "bg-green-100 text-green-700",
    },
    {
      id: 4,
      day: "Selasa",
      time: "16:30 - 18:00",
      subject: "English",
      level: "SMP",
      levelColor: "bg-amber-100 text-amber-700",
    },
    {
      id: 5,
      day: "Rabu",
      time: "15:00 - 16:30",
      subject: "Matematika",
      level: "SMP",
      levelColor: "bg-amber-100 text-amber-700",
    },
    {
      id: 6,
      day: "Rabu",
      time: "16:30 - 18:00",
      subject: "Science",
      level: "SD (Kelas 4-6)",
      levelColor: "bg-blue-100 text-blue-700",
    },
    {
      id: 7,
      day: "Kamis",
      time: "15:00 - 16:30",
      subject: "Calistung",
      level: "SD Awal",
      levelColor: "bg-green-100 text-green-700",
    },
    {
      id: 8,
      day: "Jumat",
      time: "15:00 - 17:00",
      subject: "Global Perspectives",
      level: "Gabungan",
      levelColor: "bg-purple-100 text-purple-700",
    },
  ];

  return (
    <section id="jadwal" className="py-24 bg-brand-off">
      <div className="max-w-[1160px] mx-auto px-[5%] md:px-[6%]">
        
        <div className="text-center mb-12">
          <p className="text-brand-amber font-semibold text-sm mb-2 tracking-wide uppercase">Waktu Belajar</p>
          <h2 className="font-serif font-bold text-brand-ink mb-4" style={{ fontSize: "clamp(1.9rem, 3vw, 2.8rem)" }}>
            Jadwal <em className="text-brand-green-mid">Kelas</em>
          </h2>
          <p className="text-brand-ink-soft max-w-2xl mx-auto">
            Jadwal dirancang agar anak dapat belajar dalam kondisi optimal setelah jam sekolah.
          </p>
        </div>

        <div className="bg-white rounded-2xl p-4 shadow-sm border border-brand-off overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-[600px]">
            <thead>
              <tr>
                <th className="bg-brand-green text-white font-medium text-sm py-4 px-6 first:rounded-l-lg last:rounded-r-lg">HARI</th>
                <th className="bg-brand-green text-white font-medium text-sm py-4 px-6">WAKTU</th>
                <th className="bg-brand-green text-white font-medium text-sm py-4 px-6">MATA PELAJARAN</th>
                <th className="bg-brand-green text-white font-medium text-sm py-4 px-6 first:rounded-l-lg last:rounded-r-lg">JENJANG</th>
              </tr>
            </thead>
            <tbody>
              {scheduleData.map((item, index) => (
                <tr 
                  key={item.id}
                  className={`hover:bg-brand-green-xlt transition-colors border-b border-brand-off/50 last:border-0 ${index % 2 !== 0 ? 'bg-brand-off/30' : ''}`}
                >
                  <td className="py-4 px-6 font-semibold text-brand-ink">{item.day}</td>
                  <td className="py-4 px-6 text-brand-ink-soft">{item.time}</td>
                  <td className="py-4 px-6 font-serif font-medium text-brand-ink">{item.subject}</td>
                  <td className="py-4 px-6">
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${item.levelColor}`}>
                      {item.level}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

      </div>
    </section>
  );
}
