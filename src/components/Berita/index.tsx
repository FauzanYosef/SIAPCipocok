"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "motion/react";
import { useRef, useState } from "react";
import { Icon } from "@iconify/react";

const Berita = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const [page, setPage] = useState(1);
  const perPage = 3;

  const TopAnimation = {
    initial: { y: -40, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : {},
    transition: { duration: 0.6 },
  };

  const cardAnimation = (index: number) => ({
    initial: { y: 50, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : {},
    transition: { duration: 0.6, delay: index * 0.2 },
  });

  const beritaList = [
    {
      title: "Kegiatan Kerja Bakti Warga",
      date: "20 April 2026",
      image: "/images/blog/blog_1.png",
      desc: "Warga bersama-sama melaksanakan kerja bakti untuk menjaga kebersihan lingkungan.",
    },
    {
      title: "Pelayanan Administrasi Digital",
      date: "18 April 2026",
      image: "/images/blog/blog_2.png",
      desc: "Kini layanan administrasi dapat dilakukan secara online untuk mempermudah masyarakat.",
    },
    {
      title: "Sosialisasi Program Kelurahan",
      date: "15 April 2026",
      image: "/images/blog/blog_3.png",
      desc: "Kelurahan mengadakan sosialisasi program terbaru untuk meningkatkan kesejahteraan warga.",
    },
    {
      title: "Gotong Royong Jalan Lingkungan",
      date: "12 April 2026",
      image: "/images/blog/blog_1.png",
      desc: "Warga bersama RT melakukan perbaikan jalan lingkungan.",
    },
    {
      title: "Pelatihan UMKM Digital",
      date: "10 April 2026",
      image: "/images/blog/blog_2.png",
      desc: "Pelatihan peningkatan usaha kecil berbasis digital marketing.",
    },
  ];

  const totalPage = Math.ceil(beritaList.length / perPage);

  const start = (page - 1) * perPage;
  const currentData = beritaList.slice(start, start + perPage);

  return (
    <section className="py-20 bg-gray-50 dark:bg-darkmode">
      <div ref={ref} className="max-w-7xl mx-auto px-4 py-15">
        {/* TITLE */}
        <motion.div {...TopAnimation} className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            Berita <span className="text-primary">Terbaru</span>
          </h2>
          <p className="mt-4 text-gray-500 dark:text-white/70">
            Informasi dan kegiatan terbaru di lingkungan kelurahan
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentData.map((item, index) => (
            <motion.div
              key={index}
              {...cardAnimation(index)}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-midnight_text rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition"
            >
              <div className="overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  width={400}
                  height={250}
                  className="w-full h-[200px] object-cover hover:scale-105 transition duration-300"
                />
              </div>

              <div className="p-5">
                <p className="text-sm text-gray-500 dark:text-white/60 mb-2">
                  {item.date}
                </p>

                <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                  {item.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-white/70 mt-2">
                  {item.desc}
                </p>

                <Link
                  href="#"
                  className="inline-flex items-center gap-2 mt-4 text-primary font-medium hover:underline"
                >
                  Baca Selengkapnya
                  <Icon icon="solar:alt-arrow-right-linear" width="16" height="16" />
                </Link>
              </div>
            </motion.div>
          ))}
        </div>

        {/* PAGINATION */}
        <div className="flex justify-center items-center gap-4 mt-12">
          <button
            onClick={() => setPage((p) => Math.max(p - 1, 1))}
            disabled={page === 1}
            className="px-4 py-2 rounded-lg border border-primary text-primary disabled:opacity-40"
          >
            Prev
          </button>

          <span className="text-gray-700 dark:text-white">
            Page {page} / {totalPage}
          </span>

          <button
            onClick={() => setPage((p) => Math.min(p + 1, totalPage))}
            disabled={page === totalPage}
            className="px-4 py-2 rounded-lg border border-primary text-primary disabled:opacity-40"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Berita;