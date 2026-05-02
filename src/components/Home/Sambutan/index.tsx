"use client";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Sambutan = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  // FOTO (slide dari kiri + scale)
  const imageAnimation = {
    initial: { x: -60, opacity: 0, scale: 0.95 },
    animate: inView ? { x: 0, opacity: 1, scale: 1 } : {},
    transition: { duration: 0.8, ease: "easeOut" },
  };

  // TEXT CONTAINER (slide kanan)
  const textContainer = {
    initial: { x: 60, opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : {},
    transition: { duration: 0.8, ease: "easeOut" },
  };

  // STAGGER TEXT
  const textItem = (delay: number) => ({
    initial: { y: 20, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : {},
    transition: { duration: 0.5, delay },
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-darkmode">
      <div className="max-w-7xl mx-auto px-4">

        <div
          ref={ref}
          className="bg-white dark:bg-midnight_text rounded-3xl shadow-xl p-8 md:p-14"
        >
          <div className="grid grid-cols-12 gap-10 items-center">

            {/* FOTO */}
            <motion.div
              {...imageAnimation}
              whileHover={{ scale: 1.03 }}
              className="lg:col-span-5 col-span-12 flex justify-center"
            >
              <div className="relative">
                <Image
                  src="/images/sambutan/lurah.png"
                  alt="Lurah"
                  width={380}
                  height={500}
                  className="rounded-2xl object-cover shadow-lg"
                />

                {/* Accent */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={inView ? { scale: 1 } : {}}
                  transition={{ delay: 0.6 }}
                  className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary rounded-2xl opacity-20"
                />
              </div>
            </motion.div>

            {/* TEXT */}
            <motion.div
              {...textContainer}
              className="lg:col-span-7 col-span-12"
            >
              <motion.span
                {...textItem(0.1)}
                className="text-sm text-primary font-semibold tracking-wide uppercase"
              >
                Sambutan
              </motion.span>

              <motion.h2
                {...textItem(0.2)}
                className="mt-2 text-3xl md:text-4xl font-bold text-gray-800 dark:text-white"
              >
                Sambutan Lurah
              </motion.h2>

              {/* Quote */}
              <motion.div
                {...textItem(0.3)}
                className="mt-6 border-l-4 border-primary pl-4 italic text-gray-600 dark:text-white/70"
              >
                “Pelayanan terbaik adalah komitmen kami untuk masyarakat.”
              </motion.div>

              {/* PARAGRAF */}
              <div className="mt-6 space-y-4 text-gray-600 dark:text-white/80 leading-relaxed">
                <motion.p {...textItem(0.4)}>
                  Assalamu’alaikum Warahmatullahi Wabarakatuh,
                </motion.p>

                <motion.p {...textItem(0.5)}>
                  Puji syukur ke hadirat Allah SWT atas segala rahmat-Nya,
                  sehingga Website Kelurahan ini dapat menjadi media informasi
                  dan pelayanan publik yang lebih transparan dan modern.
                </motion.p>

                <motion.p {...textItem(0.6)}>
                  Kami berkomitmen untuk memberikan pelayanan yang cepat,
                  tepat, dan akuntabel kepada masyarakat. Website ini
                  diharapkan dapat mempermudah akses informasi dan layanan
                  administrasi secara digital.
                </motion.p>

                <motion.p {...textItem(0.7)}>
                  Semoga website ini dapat menjadi sarana komunikasi yang
                  efektif antara pemerintah kelurahan dan masyarakat.
                </motion.p>
              </div>

              {/* NAMA */}
              <motion.div {...textItem(0.8)} className="mt-8">
                <p className="font-semibold text-gray-800 dark:text-white text-lg">
                  Nama Lurah
                </p>
                <p className="text-sm text-gray-500 dark:text-white/60">
                  Lurah Kelurahan Cipocok Jaya
                </p>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Sambutan;