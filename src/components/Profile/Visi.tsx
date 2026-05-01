"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";

const VisiMisi = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-20">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 py-20">

        <div ref={ref} className="grid lg:grid-cols-12 gap-16 items-start">

          {/* LEFT TEXT (EDITORIAL STYLE) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="lg:col-span-6 space-y-10"
          >

            {/* HERO TEXT */}
            <div className="space-y-6">
              <p className="text-sm uppercase tracking-widest text-primary">
                Visi & Misi
              </p>

              <h1 className="text-4xl md:text-5xl font-light leading-tight text-gray-900 font-semibold dark:text-white">
                Visi Anda Menjadi Arah 
                <br />
                 <span className="italic font-serif text-primary">Misi </span>Kami
              </h1>

              <p className="text-gray-500 leading-relaxed text-base max-w-lg">
                Kelurahan Cipocok Jaya berkomitmen membangun pelayanan publik
                yang modern, humanis, dan berbasis teknologi untuk menciptakan
                pengalaman masyarakat yang lebih baik.
              </p>
            </div>

            {/* VISI BLOCK */}
            <div className="space-y-3">
              <h3 className="text-lg font-semibold text-gray-900">Visi</h3>
              
              <p className="text-gray-500 leading-relaxed">
                Mewujudkan pelayanan publik yang profesional, transparan,
                dan berorientasi pada kepuasan masyarakat serta pembangunan
                wilayah yang berkelanjutan.
              </p>
            </div>

          </motion.div>

          {/* RIGHT CARDS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="lg:col-span-6 space-y-4"
          >

            {/* CARD 01 */}
            <div className="border rounded-xl p-5 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <span className="text-sm text-gray-400">01</span>
                <h4 className="font-medium text-gray-900">
                  Thoughtful Service
                </h4>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Meningkatkan kualitas pelayanan publik berbasis digital yang cepat dan transparan.
              </p>
            </div>

            {/* CARD 02 */}
            <div className="border rounded-xl p-5 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <span className="text-sm text-gray-400">02</span>
                <h4 className="font-medium text-gray-900">
                  Transparent Governance
                </h4>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Mendorong akuntabilitas dan keterbukaan dalam setiap proses pemerintahan.
              </p>
            </div>

            {/* CARD 03 */}
            <div className="border rounded-xl p-5 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <span className="text-sm text-gray-400">03</span>
                <h4 className="font-medium text-gray-900">
                  Digital Innovation
                </h4>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Mengembangkan sistem layanan berbasis teknologi untuk efisiensi masyarakat.
              </p>
            </div>

            {/* CARD 04 */}
            <div className="border rounded-xl p-5 hover:shadow-md transition">
              <div className="flex justify-between items-start">
                <span className="text-sm text-gray-400">04</span>
                <h4 className="font-medium text-gray-900">
                  Community Engagement
                </h4>
              </div>
              <p className="text-sm text-gray-500 mt-3">
                Meningkatkan partisipasi aktif masyarakat dalam pembangunan wilayah.
              </p>
            </div>

          </motion.div>

        </div>
      </div>
    </section>

    
  );
};

export default VisiMisi;