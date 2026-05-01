"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";

const Sejarah = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const leftAnimation = {
    initial: { x: -60, opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : {},
    transition: { duration: 0.7, ease: "easeOut" },
  };

  const rightAnimation = {
    initial: { x: 60, opacity: 0 },
    animate: inView ? { x: 0, opacity: 1 } : {},
    transition: { duration: 0.7, ease: "easeOut" },
  };

  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-20">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 py-10">
        <div
          ref={ref}
          className="grid md:grid-cols-12 items-center lg:gap-12 gap-8"
        >
          {/* LEFT */}
          <motion.div
            {...leftAnimation}
            className="lg:col-span-7 col-span-12"
          >
            <h2 className="lg:text-4xl text-2xl text-midnight_text font-semibold dark:text-white">
              Sejarah
              <br />
              <span className="text-primary">
                Kelurahan Cipocok Jaya
              </span>
            </h2>

            <p className="mt-6 text-muted dark:text-white dark:text-opacity-70 lg:text-lg">
              Kelurahan Cipocok Jaya merupakan salah satu wilayah administratif
              yang berkembang seiring pertumbuhan kota dan kebutuhan pelayanan
              masyarakat yang semakin meningkat.
            </p>

            <p className="mt-4 text-muted dark:text-white dark:text-opacity-70 lg:text-lg">
              Pada awalnya, wilayah ini masih memiliki sistem pelayanan sederhana.
              Seiring waktu, dilakukan berbagai transformasi mulai dari administrasi
              manual hingga digital untuk meningkatkan efisiensi pelayanan publik.
            </p>

            <p className="mt-4 text-muted dark:text-white dark:text-opacity-70 lg:text-lg">
              Saat ini, Kelurahan Cipocok Jaya terus berkomitmen untuk menjadi
              pusat pelayanan publik yang modern, transparan, dan responsif
              terhadap kebutuhan masyarakat.
            </p>
          </motion.div>

          {/* RIGHT IMAGE */}
          <motion.div
            {...rightAnimation}
            className="lg:col-span-5 col-span-12"
          >
            <div className="mx-auto max-w-md lg:max-w-full">
              <Image
                src="/images/hero/hero-image.png"
                alt="Sejarah Kelurahan"
                width={600}
                height={600}
                className="w-full h-auto"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sejarah;