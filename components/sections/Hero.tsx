"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Users, BookOpen, Globe2, Sparkles, ChevronLeft, ChevronRight, MapPin } from "lucide-react";
import Link from "next/link";
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

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
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

          {/* Right Column - Visual Gallery */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            {/* Decorative background circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-brand-green/10 rounded-full animate-[spin_24s_linear_infinite] -z-10"></div>

            {/* Floating Badge */}
            <motion.div
              animate={{ y: [-10, 10, -10] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-4 -top-4 bg-brand-white p-3 rounded-xl shadow-lg border border-brand-off z-20"
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

            <div className="w-full max-w-[500px] mx-auto group">
              <div className="relative aspect-[4/3] bg-white p-2 rounded-2xl shadow-2xl shadow-brand-green/10 overflow-hidden">
                {/* Images */}
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-brand-off">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentIndex}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="absolute inset-0"
                    >
                      <Image
                        src={images[currentIndex]}
                        alt={`Gallery Jedu Bimbel ${currentIndex + 1}`}
                        fill
                        className="object-cover"
                        priority
                      />
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Arrows */}
                  <div className="absolute inset-0 flex items-center justify-between p-4 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                    <button
                      onClick={prevSlide}
                      className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-brand-green shadow-md hover:bg-white transition-colors"
                    >
                      <ChevronLeft size={24} />
                    </button>
                    <button
                      onClick={nextSlide}
                      className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-sm flex items-center justify-center text-brand-green shadow-md hover:bg-white transition-colors"
                    >
                      <ChevronRight size={24} />
                    </button>
                  </div>

                  {/* Indicators */}
                  <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {images.map((_, index) => (
                      <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`w-2 h-2 rounded-full transition-all ${index === currentIndex ? "bg-brand-amber w-4" : "bg-white/50"}`}
                      />
                    ))}
                  </div>
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
              <p className="font-bold text-brand-ink">SD & SMP</p>
              <p className="text-xs text-brand-ink-soft">Jenjang</p>
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
