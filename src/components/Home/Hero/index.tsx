"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { Icon } from "@iconify/react";

const Hero = () => {
  const leftAnimation = {
    initial: { x: "-100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "-100%", opacity: 0 },
    transition: { duration: 1 },
  };

  const rightAnimation = {
    initial: { x: "100%", opacity: 0 },
    animate: { x: 0, opacity: 1 },
    exit: { x: "100%", opacity: 0 },
    transition: { duration: 1 },
  };

  return (
    <section className="relative pt-44 mb-14 bg-cover bg-center dark:bg-darkmode">
      {/* Background Shape */}
      <div className="w-full h-full absolute z-0 bg-heroBg rounded-b-[119px] -left-1/4 top-0 dark:bg-midnight_text"></div>

      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) relative z-10 px-4">
        
        <div className="grid grid-cols-12 items-center">
          
          {/* LEFT CONTENT (8 COL) */}
          <motion.div
            {...leftAnimation}
            className="lg:col-span-7 col-span-12"
          >
            <h1 className="md:text-30 sm:text-40 text-28 text-midnight_text lg:text-start mb-9 lg:w-full w-3/4">
              Selamat Datang di
              <br />
              <span className="bg-border dark:bg-darkHeroBg md:text-26 text-26 rounded-lg text-primary max-w-max px-5 py-2 inline-block">
                Website Kelurahan
              </span>
              <br />
              Pelayanan Publik Terpadu
            </h1>

            <p className="sm:text-12 text-10 text-muted dark:text-white dark:text-opacity-70 text-start lg:max-w-[80%]">
              Kami berkomitmen memberikan pelayanan terbaik kepada masyarakat
              melalui sistem informasi yang transparan, cepat, dan mudah diakses.
              Temukan berbagai informasi, layanan administrasi, serta kegiatan
              terbaru di lingkungan kelurahan.
            </p>

            <div className="flex items-center mt-12 gap-6 flex-wrap">
              <Link
                href="/layanan"
                className="text-17 flex gap-2 items-center bg-primary text-white py-3 px-8 rounded-lg border border-primary hover:text-primary hover:bg-transparent"
              >
                Layanan Online
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  width="16"
                  height="16"
                />
              </Link>

              <Link
                href="/profile/sejarah"
                className="text-17 flex gap-2 items-center text-primary dark:text-white dark:text-opacity-70 hover:text-white bg-white py-3 px-8 shadow-md rounded-lg hover:bg-primary"
              >
                Profil Kelurahan
                <Icon
                  icon="solar:alt-arrow-right-linear"
                  width="16"
                  height="16"
                />
              </Link>
            </div>
          </motion.div>

          {/* RIGHT IMAGE (4 COL) */}
          <motion.div
            {...rightAnimation}
            className="lg:col-span-5 col-span-12 hidden lg:flex justify-end items-center"
          >
            <Image
              src="/images/hero/hero-image.png"
              alt="Kelurahan"
              width={500}
              height={600}
              className="w-full max-w-[600px] h-auto"
              priority
            />
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Hero;