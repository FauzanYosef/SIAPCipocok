"use client";
import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Icon } from "@iconify/react";

/* =========================
   COUNT HOOK
========================= */
const useCountUp = (end: number, duration: number = 1500) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return count;
};

/* =========================
   COUNTER COMPONENT
========================= */
const Counter = ({ value }: { value: string }) => {
  const numericValue = Number(value.replace(/\./g, ""));
  const count = useCountUp(numericValue);

  return (
    <span>
      {new Intl.NumberFormat("id-ID").format(count)}
    </span>
  );
};

/* =========================
   MAIN COMPONENT
========================= */
const Statistik = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const fadeUp = (index: number) => ({
    initial: { y: 50, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : {},
    transition: { duration: 0.6, delay: index * 0.15 },
  });

  const stats = [
    {
      title: "Jumlah Penduduk",
      value: "12540",
      icon: "mdi:account-group-outline",
    },
    {
      title: "Kepala Keluarga",
      value: "3210",
      icon: "mdi:home-group",
    },
    {
      title: "Jumlah RT",
      value: "45",
      icon: "mdi:office-building-outline",
    },
    {
      title: "Jumlah RW",
      value: "12",
      icon: "mdi:map-marker-radius-outline",
    },
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-darkmode">
      <div ref={ref} className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            <span className="text-primary">Data Statistik</span> Kelurahan
          </h2>

          <p className="mt-4 text-gray-500 dark:text-white/70">
            Informasi jumlah penduduk dan wilayah administratif
          </p>
        </motion.div>

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              {...fadeUp(index)}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-midnight_text rounded-2xl p-6 shadow-md hover:shadow-xl transition-all duration-300"
            >
              <div className="flex items-center justify-between">
                
                {/* TEXT */}
                <div>
                  <p className="text-sm text-gray-500 dark:text-white/60">
                    {item.title}
                  </p>

                  <h3 className="text-2xl md:text-3xl font-bold text-gray-800 dark:text-white mt-2">
                    <Counter value={item.value} />
                  </h3>
                </div>

                {/* ICON */}
                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl">
                  <Icon icon={item.icon} width="24" height="24" />
                </div>

              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Statistik;