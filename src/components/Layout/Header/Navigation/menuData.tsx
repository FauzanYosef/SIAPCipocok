import { HeaderItem } from "../../../../types/menu";

export const headerData: HeaderItem[] = [
  { label: "Home", href: "/" },
  { label: "Dashboard", href: "/dashboard" },

  { label: "Profil", 
    href: "/profil", 
    submenu:[
      { label: "Sejarah", href:"/profil/sejarah"},
      { label: "Visi dan Misi", href:"/profil/visi"},
      { label: "Struktur Organisasi", href:"/profil/struktur"},
    ]
  },

  { label: " Layanan", 
    href: "/Layanan",
  },

  { label: "Berita", href: "/berita" },
  { label: "Kontak", href: "/kontak" },
];
