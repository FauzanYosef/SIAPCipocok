"use client";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/" className="flex items-center gap-3">
      {/* Logo */}
      <Image
        src="/images/logo/logo-kelurahan.png" // ganti sesuai file kamu
        alt="Logo Kelurahan"
        width={50}
        height={50}
        quality={100}
        priority
      />

      {/* Text */}
      <div className="flex flex-col leading-tight">
       
        <span className="text-l font-bold text-primary">
          Kelurahan Cipocok Jaya
        </span>
        <span className="text-sm text-muted dark:text-white/70">
          Serang, Banten
        </span>
      </div>
    </Link>
  );
};

export default Logo;