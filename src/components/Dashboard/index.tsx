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

const COLORS = [
  "#6366F1",
  "#EC4899",
  "#10B981",
  "#F59E0B",
  "#06B6D4",
];

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
      <h4 className="mb-10 text-[18px] font-medium text-primary">
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

  {/* REUSABLE MODERN CARD */}
  {[
    {
      title: "Distribusi Jenis Kelamin",
      content: (
        <PieChart>
          <Pie data={genderData} dataKey="value" innerRadius={70} outerRadius={100}>
            {genderData.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip formatter={formatNumber} />
        </PieChart>
      ),
    },
    {
      title: "Tingkat Pendidikan",
      content: (
        <BarChart data={educationData}>
          <CartesianGrid strokeDasharray="3 3" opacity={0.2} />
          <XAxis dataKey="name" hide />
          <YAxis />
          <Tooltip formatter={formatNumber} />
          <Bar dataKey="value" radius={[12, 12, 0, 0]}>
            {educationData.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Bar>
        </BarChart>
      ),
    },
    {
      title: "Usia Sekolah",
      content: (
        <BarChart data={schoolAgeData}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip formatter={formatNumber} />
          <Bar dataKey="value" radius={[12, 12, 0, 0]}>
            {schoolAgeData.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Bar>
        </BarChart>
      ),
    },
  {
  title: "Agama",
  content: (
    <div className="h-full grid grid-cols-2 gap-8 items-start">

      {/* LEFT - CHART */}
      <div className="flex items-start justify-start w-full">
        <div className="relative w-[250px] h-[250px]">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Pie
                data={religionData}
                dataKey="value"
                nameKey="name"
                innerRadius={50}
                outerRadius={75}
                paddingAngle={4}
              >
                {religionData.map((_, i) => (
                  <Cell key={i} fill={COLORS[i % COLORS.length]} />
                ))}
              </Pie>
              <Tooltip formatter={formatNumber} />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* RIGHT - LEGEND */}
      <div className="flex flex-col gap-2 w-full">
        {religionData.map((item, i) => (
          <div
            key={i}
            className="
              flex items-center justify-between
              px-3 py-2 rounded-lg
              bg-gray-50 dark:bg-white/5
              hover:bg-gray-100 dark:hover:bg-white/10
              transition
            "
          >
            <div className="flex items-center gap-2">
              <span
                className="w-3 h-3 rounded-full"
                style={{ backgroundColor: COLORS[i % COLORS.length] }}
              />
              <span className="text-xs text-gray-700 dark:text-gray-300">
                {item.name}
              </span>
            </div>

            <span className="text-xs font-semibold text-gray-900 dark:text-white">
              {item.value.toLocaleString("id-ID")}
            </span>
          </div>
        ))}
      </div>

    </div>
  ),
},

    {
    title: "Pekerjaan",
    content: (
        <ResponsiveContainer width="100%" height={jobData.length * 35}>
        <BarChart
            data={[...jobData].sort((a, b) => a.value - b.value)}
            layout="vertical"
            margin={{ top: 10, right: 20, left: 120, bottom: 10 }}
        >
            <CartesianGrid strokeDasharray="3 3" opacity={0.15} />

            <XAxis type="number" />

            <YAxis
            type="category"
            dataKey="name"
            width={10}
            tick={{ fontSize: 12 }}
            />

            <Tooltip formatter={formatNumber} />

            <Bar dataKey="value" radius={[0, 10, 10, 0]}>
            {jobData.map((_, i) => (
                <Cell
                key={i}
                fill={COLORS[i % COLORS.length]}
                />
            ))}
            </Bar>
        </BarChart>
        </ResponsiveContainer>
    ),
    },
    
    {
      title: "Disabilitas",
      content: (
        <PieChart>
          <Pie data={disabilityData} dataKey="value" innerRadius={60}>
            {disabilityData.map((_, i) => (
              <Cell key={i} fill={COLORS[i]} />
            ))}
          </Pie>
          <Tooltip formatter={formatNumber} />
        </PieChart>
      ),
    },
  ].map((chart, i) => (
    <motion.div
      key={i}
      {...fadeUp(i)}
      whileHover={{ y: -4 }}
      className="
        group relative rounded-3xl p-[1px]
        bg-gradient-to-br from-primary/20 via-transparent to-transparent
      "
    >
      <div
        className="
          bg-white/80 dark:bg-[#111827]/80
          backdrop-blur-xl
          rounded-3xl p-6
          shadow-sm hover:shadow-lg
          transition-all duration-300
          border border-white/20 dark:border-white/10
        "
      >
        {/* TITLE */}
        <h4 className="text-sm font-medium text-gray-600 dark:text-gray-300 mb-4">
          {chart.title}
        </h4>

        {/* CHART */}
        <div className="h-[300px]">
          <ResponsiveContainer>
            {chart.content}
          </ResponsiveContainer>
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