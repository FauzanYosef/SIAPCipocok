"use client";

import { motion, useInView } from "motion/react";
import { useRef } from "react";
import Image from "next/image";
import QRCode from "react-qr-code";

const Layanan = () => {
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

  const forms = [
    {
      title: "Pengajuan Surat Keterangan",
      link: "https://drive.google.com/file/d/1HoLo6NB82rUohr82k01DSncrmXIIusEL/view?usp=drivesdk",
    },
    
  ];

  return (
    <section className="dark:bg-darkmode overflow-x-hidden py-20">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 py-20">
        <div
          ref={ref}
          className="grid md:grid-cols-12 items-start lg:gap-12 gap-8"
        >
          {/* LEFT */}
          <motion.div
            {...leftAnimation}
            className="lg:col-span-7 col-span-12"
          >
            <h2 className="lg:text-4xl text-2xl text-midnight_text font-semibold dark:text-white">
              Layanan
              <br />
              <span className="text-primary">
                Kelurahan Cipocok Jaya
              </span>
            </h2>

            <p className="mt-6 text-muted dark:text-white dark:text-opacity-70 lg:text-lg">
              Layanan digital Kelurahan Cipocok Jaya memudahkan masyarakat
              untuk mengakses berbagai kebutuhan administrasi secara cepat
              dan efisien.
            </p>

            <p className="mt-4 text-muted dark:text-white dark:text-opacity-70 lg:text-lg">
              Setiap layanan dapat diakses melalui QR Code di bawah ini
              tanpa harus datang langsung ke kantor kelurahan.
            </p>

            
          </motion.div>

          {/* RIGHT */}
          <motion.div
            {...rightAnimation}
            className="lg:col-span-5 col-span-12"
          >
            <div className="bg-white dark:bg-gray-900 p-6 rounded-xl shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-midnight_text dark:text-white">
                Akses Cepat Layanan
              </h3>

              <p className="text-sm text-muted dark:text-white dark:text-opacity-70 mb-4">
                Scan QR Code di sebelah kiri untuk langsung mengisi formulir layanan
                tanpa perlu mengetik link.
              </p>
              
            {/* QR CODE LIST */}
            <div className="mt-8">
            {forms.map((item, index) => (
                <div
                key={index}
                className="p-4 bg-white dark:bg-gray-900 flex flex-col items-center text-center rounded-xl"
                >
                <QRCode value={item.link} size={240} />

                {/* LINK CLICKABLE */}
                <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 text-md text-primary hover:underline"
                >
                    Klik untuk buka Formulir
                </a>
                </div>
            ))}
            </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Layanan;