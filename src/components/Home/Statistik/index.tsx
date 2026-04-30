"use client";

import { motion, useInView } from "motion/react";
import { useRef, useEffect, useState } from "react";
import { Icon } from "@iconify/react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
} from "recharts";

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

const Counter = ({ value }: { value: string }) => {
  const numericValue = Number(value.replace(/\./g, ""));
  const count = useCountUp(numericValue);

  return (
    <span>{new Intl.NumberFormat("id-ID").format(count)}</span>
  );
};

/* =========================
   DATA
========================= */

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

const genderData = [
  { name: "Laki-laki", value: 6300 },
  { name: "Perempuan", value: 6240 },
];

const educationData = [
  { name: "SD", value: 3000 },
  { name: "SMP", value: 2800 },
  { name: "SMA", value: 4000 },
  { name: "Sarjana", value: 1200 },
  { name: "Lainnya", value: 1540 },
];

const COLORS = ["#3B82F6", "#EC4899", "#10B981", "#F59E0B", "#6366F1"];

/* =========================
   COMPONENT
========================= */

const Statistik = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const fadeUp = (index: number) => ({
    initial: { y: 50, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : {},
    transition: { duration: 0.6, delay: index * 0.15 },
  });

  return (
    <section className="py-20 bg-gray-50 dark:bg-darkmode">
      <div ref={ref} className="max-w-7xl mx-auto px-4">

        {/* TITLE */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            <span className="text-primary">Dashboard Statistik</span> Kelurahan
          </h2>

          <p className="mt-4 text-gray-500 dark:text-white/70">
            Data penduduk & visualisasi statistik
          </p>
        </motion.div>

        {/* =========================
            COUNTER GRID (LAMA)
        ========================= */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              {...fadeUp(index)}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-midnight_text rounded-2xl p-6 shadow-md hover:shadow-xl transition-all"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm text-gray-500 dark:text-white/60">
                    {item.title}
                  </p>

                  <h3 className="text-2xl font-bold mt-2 text-gray-800 dark:text-white">
                    <Counter value={item.value} />
                  </h3>
                </div>

                <div className="w-12 h-12 flex items-center justify-center bg-primary/10 text-primary rounded-xl">
                  <Icon icon={item.icon} width="24" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* =========================
            CHART SECTION
        ========================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">

          {/* PIE CHART */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="bg-white dark:bg-midnight_text p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-white">
              Statistik Gender
            </h3>

            <div className="w-full h-[300px]">
              <ResponsiveContainer>
                <PieChart>
                  <Pie
                    data={genderData}
                    dataKey="value"
                    nameKey="name"
                    outerRadius={100}
                    label
                  >
                    {genderData.map((_, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* BAR CHART */}
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={inView ? { y: 0, opacity: 1 } : {}}
            className="bg-white dark:bg-midnight_text p-6 rounded-2xl shadow-md"
          >
            <h3 className="text-lg font-semibold mb-4 text-gray-700 dark:text-white">
              Statistik Pendidikan
            </h3>

            <div className="w-full h-[300px]">
              <ResponsiveContainer>
                <BarChart data={educationData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />

                  <Bar dataKey="value" radius={[8, 8, 0, 0]}>
                    {educationData.map((_, index) => (
                      <Cell key={index} fill={COLORS[index]} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Statistik;