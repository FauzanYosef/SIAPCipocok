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
   IMPORT DATA
========================= */
import {
  genderData,
  educationData,
  schoolAgeData,
  religionData,
  jobData,
  disabilityData,
  summaryData,
} from "@/app/api/data";

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

  return <span>{new Intl.NumberFormat("id-ID").format(count)}</span>;
};

/* =========================
   STATS
========================= */
const stats = [
  {
    title: "Jumlah Penduduk",
    value: summaryData.totalPenduduk.toString(),
    icon: "mdi:account-group-outline",
  },
  {
    title: "Jumlah KK",
    value: summaryData.kk.toString(),
    icon: "mdi:home-group",
  },
  {
    title: "Jumlah RW",
    value: summaryData.rw.toString(),
    icon: "mdi:map-marker-radius-outline",
  },
  {
    title: "Jumlah RT",
    value: summaryData.rt.toString(),
    icon: "mdi:office-building-outline",
  },
];

const COLORS = ["#6366F1", "#EC4899", "#10B981", "#F59E0B", "#06B6D4"];

/* =========================
   HELPER FORMAT
========================= */
const formatNumber = (value: any) =>
  typeof value === "number"
    ? value.toLocaleString("id-ID")
    : value;

/* =========================
   COMPONENT
========================= */
const Statistik = () => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true });

  const fadeUp = (index: number) => ({
    initial: { y: 40, opacity: 0 },
    animate: inView ? { y: 0, opacity: 1 } : {},
    transition: { duration: 0.5, delay: index * 0.1 },
  });

  /* =========================
     REUSABLE CARD
  ========================= */
  const ChartCard = ({
    title,
    children,
  }: {
    title: string;
    children: React.ReactNode;
  }) => (
    <div className="bg-white dark:bg-[#111827] p-8 rounded-2xl shadow-sm">
      <h4 className="mb-4 text-sm font-semibold text-primary">
        {title}
      </h4>
      <div className="h-[300px]">{children}</div>
    </div>
  );

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white dark:from-[#0B0F19] dark:to-[#111827]">
      <div ref={ref} className="max-w-7xl mx-auto px-4 py-20">

        {/* HEADER */}
        <motion.div
          initial={{ y: -30, opacity: 0 }}
          animate={inView ? { y: 0, opacity: 1 } : {}}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 dark:text-white">
            <span className="text-primary">Dashboard Statistik</span> Kelurahan
          </h2>
          <p className="mt-3 text-gray-500 dark:text-white/70">
            Data penduduk & visualisasi statistik
          </p>
        </motion.div>

        {/* KPI */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((item, index) => (
            <motion.div
              key={index}
              {...fadeUp(index)}
              whileHover={{ scale: 1.03 }}
              className="bg-white dark:bg-[#111827] rounded-2xl p-6 shadow-sm"
            >
              <div className="flex justify-between">
                <div>
                  <p className="text-sm text-gray-500">
                    {item.title}
                  </p>
                  <h3 className="text-2xl font-bold mt-2 text-primary dark:text-white">
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

        {/* CHARTS */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

          {/* GENDER */}
          <ChartCard title="Distribusi Jenis Kelamin">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={genderData}
                  dataKey="value"
                  innerRadius={60}
                >
                  {genderData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip formatter={formatNumber} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* PENDIDIKAN */}
          <ChartCard title="Tingkat Pendidikan">
            <ResponsiveContainer>
              <BarChart data={educationData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" hide />
                <YAxis />
                <Tooltip formatter={formatNumber} />
                <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                  {educationData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* USIA SEKOLAH */}
          <ChartCard title="Usia Sekolah">
            <ResponsiveContainer>
              <BarChart data={schoolAgeData}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip formatter={formatNumber} />
                <Bar dataKey="value" radius={[10, 10, 0, 0]}>
                  {schoolAgeData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* AGAMA */}
          <ChartCard title="Agama">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={religionData}
                  dataKey="value"
                  nameKey="name"
                  innerRadius={50}
                  outerRadius={90}
                  paddingAngle={3}
                  label={({ name, percent = 0 }) =>
                    `${name} ${(percent * 100).toFixed(0)}%`
                  }
                >
                  {religionData.map((_, i) => (
                    <Cell
                      key={i}
                      fill={COLORS[i % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip formatter={formatNumber} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* PEKERJAAN */}
          <ChartCard title="Pekerjaan">
            <ResponsiveContainer>
              <BarChart data={jobData.slice(0, 8)}>
                <XAxis dataKey="name" hide />
                <YAxis />
                <Tooltip formatter={formatNumber} />
                <Bar dataKey="value">
                  {jobData.slice(0, 8).map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </ChartCard>

          {/* DISABILITAS */}
          <ChartCard title="Disabilitas">
            <ResponsiveContainer>
              <PieChart>
                <Pie data={disabilityData} dataKey="value">
                  {disabilityData.map((_, i) => (
                    <Cell key={i} fill={COLORS[i]} />
                  ))}
                </Pie>
                <Tooltip formatter={formatNumber} />
              </PieChart>
            </ResponsiveContainer>
          </ChartCard>

        </div>
      </div>
    </section>
  );
};

export default Statistik;