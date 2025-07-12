
import Image from "next/image";
import Link from "next/link";

export const metadata = {
  title: "Tentang Proyek",
  description: `Detail lengkap tentang proyek Megapolis Water Sensitive - solusi inovatif pengelolaan air perkotaan.`,
};

export default function About() {
  return (
    <div className="bg-light min-h-screen py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">
            Tentang Proyek Megapolis Water Sensitive
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed">
            Program Kreativitas Mahasiswa Video Gagasan Konstruktif (PKM-VGK) yang menghadirkan 
            solusi inovatif untuk pengelolaan air hujan di perkotaan modern.
          </p>
        </div>

        {/* Project Vision */}
        <div className="grid md:grid-cols-2 gap-12 mb-16">
          <div>
            <h2 className="text-3xl font-bold text-primary mb-6">Visi Proyek</h2>
            <p className="text-gray-700 leading-relaxed mb-4">
              Menciptakan model pengelolaan stormwater berbasis teknologi tinggi yang dapat 
              mengatasi masalah banjir dan krisis air bersih di kawasan perkotaan melalui 
              pendekatan Low Impact Development.
            </p>
            <p className="text-gray-700 leading-relaxed">
              Proyek ini menggabungkan konsep "Air dan Kota Modern" dengan implementasi 
              teknologi smart city untuk menciptakan lingkungan urban yang berkelanjutan.
            </p>
          </div>
          <div className="bg-white p-8 rounded-lg shadow-lg">
            <h3 className="text-2xl font-semibold text-primary mb-4">Fitur Utama</h3>
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Smart Stormwater Management System
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                Low Impact Development Model
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-tertiary rounded-full mr-3"></span>
                Teknologi IoT untuk Monitoring
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-accent rounded-full mr-3"></span>
                Mitigasi Banjir Terintegrasi
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-secondary rounded-full mr-3"></span>
                Solusi Krisis Air Bersih
              </li>
            </ul>
          </div>
        </div>

        {/* Mission */}
        <div className="bg-primary text-light rounded-lg p-8 mb-16">
          <h2 className="text-3xl font-bold mb-6 text-center">Misi Kami</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Inovasi</h3>
              <p>Mengembangkan teknologi terdepan untuk pengelolaan air perkotaan yang efisien dan berkelanjutan.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Edukasi</h3>
              <p>Memberikan pemahaman kepada masyarakat tentang pentingnya pengelolaan air yang bijaksana.</p>
            </div>
            <div className="text-center">
              <h3 className="text-xl font-semibold mb-4">Implementasi</h3>
              <p>Menerapkan solusi nyata yang dapat direplikasi di berbagai kawasan perkotaan Indonesia.</p>
            </div>
          </div>
        </div>

        {/* Team Logo */}
        <div className="text-center">
          <h2 className="text-3xl font-bold text-primary mb-8">Tim Megasense</h2>
          <div className="flex justify-center mb-8">
            <Image
              src="https://github.com/nfahrisalim/Assets/blob/main/Megasense/Logo/Logo_Capt.png?raw=true"
              alt="Megasense Team Logo"
              width={300}
              height={300}
              className="object-contain"
            />
          </div>
          <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
            Tim multidisiplin yang terdiri dari mahasiswa dari berbagai program studi, 
            berkomitmen untuk menghadirkan solusi inovatif dalam pengelolaan air perkotaan.
          </p>
          <Link 
            href="/contact" 
            className="bg-accent hover:bg-secondary px-8 py-4 rounded-lg font-semibold text-white transition-colors inline-block"
          >
            Hubungi Tim Kami
          </Link>
        </div>
      </div>
    </div>
  )
}
