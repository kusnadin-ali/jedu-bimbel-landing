"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Users, BookOpen, Globe2, Sparkles, MapPin, CalendarCheck } from "lucide-react";
import { Button } from "@nextui-org/react";
import { useState, useEffect, useCallback } from "react";
import Image from "next/image";

export function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    "/assets/gallery/WhatsApp Image 2026-04-28 at 06.32.20.jpeg",
    "/assets/gallery/WhatsApp Image 2026-04-28 at 06.35.42.jpeg",
    "/assets/gallery/WhatsApp Image 2026-04-28 at 06.35.43.jpeg",
  ];

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  }, [images.length]);

  useEffect(() => {
    const timer = setInterval(nextSlide, 4000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="relative pt-24 pb-16 md:pt-32 md:pb-24 overflow-hidden">
      <div className="max-w-[1160px] mx-auto px-[5%] md:px-[6%]">
        <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-12 items-center">

          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col items-start"
          >
            {/* H1 */}
            <h1 className="font-serif font-black text-brand-ink leading-tight mb-6" style={{ fontSize: "clamp(2.6rem, 4.5vw, 4.2rem)" }}>
              Belajar Lebih <em className="text-brand-green-mid italic not-italic-fallback">Cerdas</em>,<br />
              Tumbuh Lebih <span className="relative inline-block">Jauh<span className="absolute bottom-1 left-0 w-full h-3 bg-brand-amber/40 -z-10 rounded-sm"></span></span>
            </h1>

            {/* Description */}
            <p className="text-brand-ink-soft text-lg md:text-xl font-light mb-8 max-w-[90%]">
              Bimbingan belajar eksklusif di Gayamprit, Klaten Selatan yang mengintegrasikan kurikulum <strong className="font-medium text-brand-ink">Cambridge International</strong>. Kelas terbatas untuk perhatian maksimal.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 mb-12">
              <Button
                as="a"
                href="#daftar"
                className="h-12 flex items-center justify-center bg-brand-green text-white font-medium rounded-full px-8 shadow-md hover:-translate-y-1 transition-transform"
              >
                Mulai Belajar
              </Button>
              <Button
                as="a"
                href="#program"
                variant="bordered"
                className="h-12 flex items-center justify-center border border-brand-green text-brand-green font-medium rounded-full px-8 hover:bg-brand-green-xlt transition-colors"
              >
                Jadwal & Program
              </Button>
            </div>
          </motion.div>

          {/* Right Column - Mosaic Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden md:block"
          >
            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-8, 8, -8] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-2 -top-4 bg-white p-3 rounded-xl shadow-lg border border-brand-off z-20"
            >
              <div className="flex items-center gap-2">
                <div className="bg-brand-amber p-1.5 rounded-md text-white">
                  <Sparkles size={16} />
                </div>
                <div>
                  <p className="text-xs font-bold text-brand-ink">Standar</p>
                  <p className="text-[10px] text-brand-ink-soft">Internasional</p>
                </div>
              </div>
            </motion.div>

            {/* Mosaic Grid */}
            <div className="grid grid-cols-[2fr_1fr] gap-3 h-[380px]">

              {/* Main large photo */}
              <div className="relative rounded-2xl overflow-hidden bg-brand-off shadow-xl shadow-brand-green/10">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={`main-${currentIndex}`}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.97 }}
                    transition={{ duration: 0.6, ease: "easeInOut" }}
                    className="absolute inset-0"
                  >
                    <Image
                      src={images[currentIndex]}
                      alt={`Kegiatan Jedu Bimbel ${currentIndex + 1}`}
                      fill
                      className="object-cover"
                      priority
                    />
                    {/* subtle gradient overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/20 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                {/* Dot indicators on main photo */}
                <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5 z-10">
                  {images.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      className={`h-1.5 rounded-full transition-all duration-300 ${i === currentIndex ? "bg-brand-amber w-5" : "bg-white/60 w-1.5"}`}
                    />
                  ))}
                </div>
              </div>

              {/* Two small photos stacked */}
              <div className="flex flex-col gap-3">
                <div className="relative flex-1 rounded-2xl overflow-hidden bg-brand-off shadow-md">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`sm1-${currentIndex}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, delay: 0.1, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[(currentIndex + 1) % images.length]}
                        alt={`Kegiatan Jedu Bimbel ${(currentIndex + 1) % images.length + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>

                <div className="relative flex-1 rounded-2xl overflow-hidden bg-brand-off shadow-md">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={`sm2-${currentIndex}`}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      transition={{ duration: 0.5, delay: 0.2, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[(currentIndex + 2) % images.length]}
                        alt={`Kegiatan Jedu Bimbel ${(currentIndex + 2) % images.length + 1}`}
                        fill
                        className="object-cover"
                      />
                    </motion.div>
                  </AnimatePresence>
                </div>
              </div>

            </div>
          </motion.div>
        </div>

        {/* Trust Bar */}
        <div className="flex flex-wrap items-center gap-6 pt-6 border-t border-brand-off w-full mt-8">
          <div className="flex items-center gap-2">
            <div className="bg-brand-green-xlt p-2 rounded-lg text-brand-green">
              <Users size={20} />
            </div>
            <div>
              <p className="font-bold text-brand-ink">28</p>
              <p className="text-xs text-brand-ink-soft">Murid Aktif</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-brand-amber-lt p-2 rounded-lg text-brand-amber">
              <BookOpen size={20} />
            </div>
            <div>
              <p className="font-bold text-brand-ink">8–10 Siswa</p>
              <p className="text-xs text-brand-ink-soft">per Kelas</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-brand-green-xlt p-2 rounded-lg text-brand-green">
              <Globe2 size={20} />
            </div>
            <div>
              <p className="font-bold text-brand-ink">Cambridge</p>
              <p className="text-xs text-brand-ink-soft">Kurikulum</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-brand-amber-lt p-2 rounded-lg text-brand-amber">
              <CalendarCheck size={20} />
            </div>
            <div>
              <p className="font-bold text-brand-ink">Ags 2024</p>
              <p className="text-xs text-brand-ink-soft">Berdiri Sejak</p>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <div className="bg-brand-green-xlt p-2 rounded-lg text-brand-green">
              <MapPin size={20} />
            </div>
            <div>
              <p className="font-bold text-brand-ink">Gayamprit</p>
              <p className="text-xs text-brand-ink-soft">Klaten Selatan</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
