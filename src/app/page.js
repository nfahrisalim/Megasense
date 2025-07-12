
'use client'
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Home() {
  const [currentTeamIndex, setCurrentTeamIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  const teamMembers = [
    {
      name: "Muh. Azriel Anantha A.M",
      role: "Project Manager",
      study: "Perencanaan Wilayah dan Kota 2023",
      image: "https://github.com/nfahrisalim/Assets/blob/main/Megasense/Profil/Azril_Potrait.JPG?raw=true"
    },
    {
      name: "Nofriyen Destini",
      role: "Media & Finance",
      study: "Perencanaan Wilayah dan Kota 2023",
      image: "https://github.com/nfahrisalim/Assets/blob/main/Megasense/Profil/Oyen_Potrait.JPG?raw=true"
    },
    {
      name: "Muh. Naufal Fahri Salim",
      role: "IT Support",
      study: "Sistem Informasi 2023",
      image: "https://github.com/nfahrisalim/Assets/blob/main/Megasense/Profil/Naufal_Potrait.JPG?raw=true"
    },
    {
      name: "Muh. Fadhel Perdana",
      role: "Content Producer",
      study: "Elektro 2023",
      image: "https://github.com/nfahrisalim/Assets/blob/main/Megasense/Profil/Fadhel_Potrait.JPG?raw=true"
    },
    {
      name: "Mujahidul Khaer Tauhiq",
      role: "3D Designer",
      study: "Arsitektur 2023",
      image: "https://github.com/nfahrisalim/Assets/blob/main/Megasense/Profil/Muja_Potrait.JPG?raw=true"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTeamIndex((prevIndex) => 
        prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(timer);
  }, [teamMembers.length]);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const nextTeamMember = () => {
    setCurrentTeamIndex((prevIndex) => 
      prevIndex === teamMembers.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevTeamMember = () => {
    setCurrentTeamIndex((prevIndex) => 
      prevIndex === 0 ? teamMembers.length - 1 : prevIndex - 1
    );
  };

  return (
    <main className="flex flex-col items-center justify-center bg-light">
      {/* Banner Header */}
      <section className="w-full bg-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4">
          <Image
            src="https://github.com/nfahrisalim/Assets/blob/main/Megasense/Logo/Banner.png?raw=true"
            alt="Megapolis Water Sensitive Banner"
            width={1200}
            height={300}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
      </section>

      {/* Hero Section */}
      <section className={`w-full bg-gradient-to-br from-primary to-secondary text-light py-20 transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white animate-pulse">
            Megapolis Water Sensitive
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-light/90 leading-relaxed max-w-4xl mx-auto">
            Stormwater Management with Hi-Tech Berbasis Low Impact Development Model sebagai Upaya Mitigasi Banjir dan Krisis Air Bersih
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="#team" className="bg-accent hover:bg-tertiary px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Tim Kami
            </Link>
            <Link href="#project" className="bg-tertiary hover:bg-accent px-8 py-3 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Tentang Proyek
            </Link>
          </div>
        </div>
      </section>

      {/* Project Description */}
      <section id="project" className="w-full py-16 bg-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6 animate-bounce">Tentang Proyek</h2>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              PKM Video Gagasan Konstruktif (PKM-VGK) dengan tema <strong>"Air dan Kota Modern"</strong> 
              yang menghadirkan solusi inovatif untuk pengelolaan air hujan berbasis teknologi tinggi 
              guna mengatasi masalah banjir dan krisis air bersih di perkotaan.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-accent transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">💧</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Smart Technology</h3>
              <p className="text-gray-600">Implementasi teknologi tinggi dalam pengelolaan stormwater untuk kota modern</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-secondary transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🌱</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Low Impact Development</h3>
              <p className="text-gray-600">Model pembangunan berkelanjutan yang ramah lingkungan</p>
            </div>
            <div className="text-center p-6 bg-white rounded-lg shadow-lg border-t-4 border-tertiary transform hover:scale-105 transition-all duration-300 hover:shadow-xl">
              <div className="w-16 h-16 bg-tertiary rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-2xl text-white">🏙️</span>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-4">Urban Solution</h3>
              <p className="text-gray-600">Solusi terintegrasi untuk mitigasi banjir dan krisis air bersih</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Carousel Section */}
      <section id="team" className="w-full py-16 bg-gradient-to-r from-white to-light">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Tim Megasense</h2>
            <p className="text-lg text-gray-700">
              Tim multidisiplin yang berdedikasi untuk menciptakan solusi inovatif pengelolaan air perkotaan
            </p>
          </div>

          {/* Carousel */}
          <div className="relative overflow-hidden rounded-xl bg-white shadow-2xl">
            <div className="flex transition-transform duration-500 ease-in-out" 
                 style={{ transform: `translateX(-${currentTeamIndex * 100}%)` }}>
              {teamMembers.map((member, index) => (
                <div key={index} className="w-full flex-shrink-0 p-8">
                  <div className="flex flex-col md:flex-row items-center gap-8">
                    <div className="relative w-64 h-64 rounded-full overflow-hidden shadow-lg">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="text-center md:text-left flex-1">
                      <h3 className="text-3xl font-bold text-primary mb-2">{member.name}</h3>
                      <p className="text-xl text-accent font-semibold mb-2">{member.role}</p>
                      <p className="text-gray-600 text-lg">{member.study}</p>
                      <div className="mt-4 flex justify-center md:justify-start">
                        <Image
                          src="https://github.com/nfahrisalim/Assets/blob/main/Megasense/Logo/Logo.png?raw=true"
                          alt="Megasense Logo"
                          width={80}
                          height={80}
                          className="object-contain"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation Buttons */}
            <button 
              onClick={prevTeamMember}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-accent hover:bg-secondary text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              ←
            </button>
            <button 
              onClick={nextTeamMember}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-accent hover:bg-secondary text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              →
            </button>

            {/* Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
              {teamMembers.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTeamIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTeamIndex ? 'bg-accent scale-125' : 'bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="w-full py-16 bg-gradient-to-r from-primary to-secondary text-light">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 animate-pulse">Mari Bersama Membangun Kota yang Berkelanjutan</h2>
          <p className="text-xl mb-8 text-light/90">
            Bergabunglah dengan visi kami untuk menciptakan solusi air perkotaan yang inovatif dan berkelanjutan
          </p>
          <Link href="/contact" className="bg-accent hover:bg-tertiary px-8 py-4 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg inline-block">
            Hubungi Kami
          </Link>
        </div>
      </section>
    </main>
  )
}
