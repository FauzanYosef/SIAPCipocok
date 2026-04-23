"use client";
import Image from "next/image";
import Link from "next/link";
import { Icon } from "@iconify/react";

const Footer = () => {
  return (
    <footer className="pt-10 mt-16 bg-midnight_text text-white">
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) px-4">

        {/* TOP CONTACT */}
        <div className="flex flex-col lg:flex-row justify-between gap-8 border-b border-white/10 pb-10">

          {/* Alamat */}
          <div className="flex items-start gap-4">
            <Icon icon="weui:location-outlined" width="28" />
            <div>
              <p className="font-semibold">Alamat</p>
              <p className="text-white/70 text-sm">
                Kelurahan Cipocok Jaya <br />
                Kota Serang, Banten
              </p>
            </div>
          </div>

          {/* Telepon */}
          <div className="flex items-start gap-4">
            <Icon icon="majesticons:phone-retro-line" width="28" />
            <div>
              <p className="font-semibold">Telepon</p>
              <p className="text-white/70 text-sm">
                (0254) 123456
              </p>
            </div>
          </div>

          {/* Email */}
          <div className="flex items-start gap-4">
            <Icon icon="clarity:email-line" width="28" />
            <div>
              <p className="font-semibold">Email</p>
              <p className="text-white/70 text-sm">
                kelurahan@cipocokjaya.go.id
              </p>
            </div>
          </div>

          {/* Sosial Media */}
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-primary">
              <Icon icon="fe:facebook" width="28" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Icon icon="fa6-brands:instagram" width="28" />
            </Link>
            <Link href="#" className="hover:text-primary">
              <Icon icon="fa6-brands:youtube" width="28" />
            </Link>
          </div>

        </div>

        {/* MENU */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 py-12">

          {/* Profil */}
          <div>
            <h4 className="font-semibold mb-4">Profil</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link href="/profil/sejarah">Sejarah</Link></li>
              <li><Link href="/profil/visi-misi">Visi & Misi</Link></li>
              <li><Link href="/profil/struktur">Struktur Organisasi</Link></li>
              <li><Link href="/profil/pegawai">Data Pegawai</Link></li>
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h4 className="font-semibold mb-4">Layanan</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link href="/layanan/surat">Pengajuan Surat</Link></li>
              <li><Link href="/layanan/kk">Kartu Keluarga</Link></li>
              <li><Link href="/layanan/ktp">KTP</Link></li>
              <li><Link href="/layanan/domisi">Surat Domisili</Link></li>
            </ul>
          </div>

          {/* Informasi */}
          <div>
            <h4 className="font-semibold mb-4">Informasi</h4>
            <ul className="space-y-2 text-white/70 text-sm">
              <li><Link href="/berita">Berita</Link></li>
              <li><Link href="/pengumuman">Pengumuman</Link></li>
              <li><Link href="/agenda">Agenda Kegiatan</Link></li>
              <li><Link href="/galeri">Galeri</Link></li>
            </ul>
          </div>

          {/* Logo + Deskripsi */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <Image
                src="/images/logo/logo-kelurahan.png"
                alt="logo"
                width={40}
                height={40}
              />
              <div>
                <p className="font-semibold text-sm">
                  Kelurahan Cipocok Jaya
                </p>
                <p className="text-xs text-white/60">
                  Kota Serang
                </p>
              </div>
            </div>

            <p className="text-sm text-white/70 leading-relaxed">
              Website resmi kelurahan sebagai sarana informasi dan pelayanan
              publik berbasis digital untuk masyarakat.
            </p>
          </div>

        </div>

        {/* BOTTOM */}
        <div className="flex flex-col sm:flex-row justify-between items-center border-t border-white/10 pt-6 pb-10 text-sm text-white/60">
          <p>
            © {new Date().getFullYear()} Kelurahan Cipocok Jaya. All rights reserved.
          </p>

          <div className="flex gap-4 mt-3 sm:mt-0">
            <Link href="/privacy">Kebijakan Privasi</Link>
            <Link href="/terms">Syarat & Ketentuan</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;