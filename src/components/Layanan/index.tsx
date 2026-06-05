"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const Layanan = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const animation = {
    initial: { y: 40, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : {},
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const forms = [
    {
      title: "Pengajuan Surat Keterangan",
      link: "https://drive.google.com/file/d/1HoLo6NB82rUohr82k01DSncrmXIIusEL/view?usp=drivesdk",
      preview:
        "https://drive.google.com/file/d/1HoLo6NB82rUohr82k01DSncrmXIIusEL/preview",
    },
  ];

  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-20">
      <div className="container mx-auto max-w-6xl px-4">
        <motion.div ref={ref} {...animation}>
          {/* ===== ATAS : DESKRIPSI ===== */}
          <div className="text-center mb-16">
            <h2 className="lg:text-4xl text-2xl font-semibold text-midnight_text dark:text-white">
              Layanan
              <br />
              <span className="text-primary">
                Kelurahan Cipocok Jaya
              </span>
            </h2>

            <p className="mt-6 text-muted dark:text-white/70 lg:text-lg max-w-3xl mx-auto">
              Layanan digital Kelurahan Cipocok Jaya memudahkan masyarakat
              untuk mengakses berbagai kebutuhan administrasi secara cepat
              dan efisien.
            </p>
          </div>

          {/* ===== BAWAH : PREVIEW PDF ===== */}
          {forms.map((item, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6"
            >
              {/* <h3 className="text-2xl font-semibold text-center mb-6 text-midnight_text dark:text-white">
                {item.title}
              </h3> */}

              <div className="w-full h-[900px] border rounded-xl overflow-hidden">
                <iframe
                  src={item.preview}
                  width="100%"
                  height="100%"
                  allow="autoplay"
                  className="border-0"
                  title={item.title}
                />
              </div>

              <div className="flex justify-center mt-6">
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3 bg-primary text-white rounded-lg hover:opacity-90 transition"
                >
                  Buka di Google Drive
                </a>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Layanan;