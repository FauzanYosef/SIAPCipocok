import { HeaderItem } from "../../../../types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },

  { label: "Profil", 
    href: "#", 
    submenu:[
      { label: "Sejarah", href:"/profile/sejarah"},
      { label: "Visi dan Misi", href:"/profile/visi"},
      { label: "Struktur Organisasi", href:"/profile/organisasi"},
    ]
  },

  { label: " Layanan", 
    href: "/layanan",
  },

  { label: "Berita", href: "/berita" },
  { label: "Kontak", href: "/kontak" },
];
