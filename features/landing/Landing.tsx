import React, { useState, useMemo, useRef } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { producersData, normalizeText } from '../../data/producers';

const Landing: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeFilter, setActiveFilter] = useState('Todos');
  const resultsRef = useRef<HTMLElement>(null);

  const filteredProducers = useMemo(() => {
    return producersData.filter(producer => {
      const normalizedSearch = normalizeText(searchTerm);
      const matchesSearch =
        searchTerm === '' ||
        normalizeText(producer.name).includes(normalizedSearch) ||
        normalizeText(producer.product).includes(normalizedSearch) ||
        normalizeText(producer.location).includes(normalizedSearch);

      let matchesFilter = true;
      if (activeFilter !== 'Todos') {
        if (activeFilter === 'Frutas') {
          matchesFilter = ['aguacate', 'berries', 'limon', 'mango'].includes(producer.category);
        } else if (activeFilter === 'Verduras') {
          matchesFilter = producer.category === 'maiz';
        } else if (activeFilter === 'Orgánico') {
          matchesFilter = producer.tags.includes('Orgánico');
        } else if (activeFilter === 'Certificado SENASICA') {
          matchesFilter = producer.tags.includes('SENASICA');
        }
      }

      return matchesSearch && matchesFilter;
    });
  }, [searchTerm, activeFilter]);

  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (resultsRef.current) {
      resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="relative w-full">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="relative overflow-hidden rounded-2xl bg-cover bg-center shadow-lg h-[350px] sm:h-[450px]" style={{ backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.3) 0%, rgba(0, 0, 0, 0.6) 100%), url('https://lh3.googleusercontent.com/aida-public/AB6AXuAWbjy2kwPcgouKiuB8FAlRrfxShMWfhvKV2GyknV-yxx-VxNFQLDKsamYAVS9pXwVB6aZAsaQ_tBsk2evaCYz0tfPMcGY4mBUCjZ8hnhaDEk_aSWw1s-pkRu7BNL2pD8V1iKy5kQh95LiFFrClJwdDsA_Uz-ZoBxpcimD7mSLiPRjQ-qjkKEZ9ms1hRHPHBnJNhe3BttpuslzSjOmU-2NC08VUB3Rm4Q7yvPL5MLwVHjzBA9POHqaN-5dBVB_RoTrcrephs3XMyO_w')" }}>
            <div className="absolute inset-0 flex flex-col items-center justify-center px-4 text-center">
              <h1 className="mb-4 text-2xl font-black leading-tight text-white sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl tracking-tight max-w-3xl drop-shadow-md">
                Encuentra productores verificados
              </h1>
              <p className="mb-6 sm:mb-8 text-sm font-medium text-gray-100 sm:text-base md:text-lg lg:text-xl drop-shadow-md">
                Directorio seguro de Michoacán. Sin intermediarios, trato directo entre partes.
              </p>
              <div className="w-full max-w-2xl transform transition-all hover:scale-[1.01]">
                <form className="relative flex flex-col sm:flex-row h-auto sm:h-14 items-stretch sm:items-center overflow-hidden rounded-xl bg-white shadow-xl ring-1 ring-black/5 gap-2 sm:gap-0 p-2 sm:p-0" onSubmit={handleSearchSubmit}>
                  <div className="flex items-center flex-1 sm:h-full">
                    <div className="flex h-full w-10 sm:w-12 items-center justify-center text-gray-400">
                      <span className="material-symbols-outlined">search</span>
                    </div>
                    <input
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="h-10 sm:h-full flex-1 border-0 bg-transparent px-2 text-sm sm:text-base text-gray-900 placeholder:text-gray-400 focus:ring-0"
                      placeholder="¿Qué buscas? (Aguacate, Berries...)"
                      type="text"
                    />
                    {searchTerm && (
                      <button type="button" onClick={() => setSearchTerm('')} className="text-gray-400 hover:text-gray-600 mr-2">
                        <span className="material-symbols-outlined">close</span>
                      </button>
                    )}
                  </div>
                  <button type="submit" className="sm:m-1.5 h-10 sm:h-11 rounded-lg bg-primary px-6 text-sm font-bold text-white hover:bg-primary-dark transition-colors">
                    Buscar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter Chips */}
      <section className="w-full border-b border-[#e3e3de] bg-white">
        <div className="mx-auto max-w-7xl px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 overflow-x-auto pb-2 no-scrollbar">
            {['Todos', 'Frutas', 'Verduras', 'Orgánico', 'Certificado SENASICA'].map((filter) => (
              <button
                key={filter}
                onClick={() => {
                  setActiveFilter(filter);
                  if (resultsRef.current) {
                    resultsRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`flex shrink-0 items-center gap-2 rounded-full px-5 py-2 text-sm font-medium transition-colors ${activeFilter === filter
                    ? 'bg-[#161613] text-white shadow-sm'
                    : 'bg-white border border-[#e3e3de] text-[#161613] hover:bg-gray-50 hover:text-primary'
                  }`}
              >
                {filter === 'Frutas' && <span className="material-symbols-outlined text-sm">nutrition</span>}
                {filter === 'Verduras' && <span className="material-symbols-outlined text-sm">grass</span>}
                {filter === 'Orgánico' && <span className="material-symbols-outlined text-sm">eco</span>}
                {filter === 'Certificado SENASICA' && <span className="material-symbols-outlined text-sm">verified</span>}
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Producer Grid */}
      <main ref={resultsRef} className="flex-1 w-full bg-background-light scroll-mt-20">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight text-[#161613] sm:text-3xl">Productores Destacados</h2>
              <p className="mt-2 text-sm text-gray-500">
                {filteredProducers.length > 0
                  ? `Mostrando ${filteredProducers.length} resultados para tu búsqueda.`
                  : 'No se encontraron resultados para tu búsqueda.'}
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProducers.map(producer => (
              <Link key={producer.id} to={`/producer/${producer.id}`} className="group relative flex flex-col h-full overflow-hidden rounded-2xl bg-white border border-gray-200 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:border-primary/50">
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-200">
                  <img src={producer.image} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt={producer.product} onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%23e5e7eb" width="400" height="300"/><text fill="%239ca3af" font-size="18" x="50%" y="50%" text-anchor="middle" dy=".3em">Imagen no disponible</text></svg>'; }} />
                  <div className="absolute right-3 top-3">
                    <span className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-xs font-bold backdrop-blur-md shadow-sm border ${producer.statusColor}`}>
                      <span className={`relative flex h-2 w-2`}>
                        {producer.indicatorColor === 'bg-green-500' && (
                          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                        )}
                        <span className={`relative inline-flex rounded-full h-2 w-2 ${producer.indicatorColor}`}></span>
                      </span>
                      {producer.statusText}
                    </span>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-4 sm:p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-lg sm:text-xl font-bold text-[#161613] group-hover:text-primary transition-colors leading-tight">{producer.name}</h3>
                      <div className="mt-1 flex items-center text-sm font-medium text-gray-500">
                        <span className="material-symbols-outlined mr-1 text-[18px]">location_on</span>
                        {producer.location}
                      </div>
                    </div>
                  </div>
                  <div className="mb-5">
                    <span className="block text-xs font-bold uppercase tracking-wider text-gray-400 mb-1">Producto Principal</span>
                    <span className="block text-xl sm:text-2xl font-black text-[#161613]">{producer.product}</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5 mb-6">
                    {producer.tags.map(tag => (
                      <span key={tag} className={`inline-flex items-center rounded-lg px-3 py-1.5 text-sm font-bold ${tag === 'SENASICA' ? 'bg-amber-100 border border-amber-300 text-amber-900' :
                          tag === 'Orgánico' ? 'bg-green-100 border border-green-300 text-green-900' :
                            tag === 'Exportación' ? 'bg-blue-100 border border-blue-300 text-blue-900' :
                              'bg-gray-100 border border-gray-300 text-gray-800'
                        }`}>
                        {tag === 'SENASICA' && <span className="material-symbols-outlined mr-1.5 text-[18px]">verified_user</span>}
                        {tag === 'Orgánico' && <span className="material-symbols-outlined mr-1.5 text-[18px]">eco</span>}
                        {tag === 'Exportación' && <span className="material-symbols-outlined mr-1.5 text-[18px]">public</span>}
                        {tag}
                      </span>
                    ))}
                  </div>
                  <div className="mt-auto w-full rounded-xl bg-primary py-3.5 px-4 text-center text-base font-bold text-white shadow-md transition-colors group-hover:bg-primary-dark flex items-center justify-center gap-2">
                    Ver Perfil <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-[#e3e3de] bg-white mt-12">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div className="flex items-center gap-2">
              <div className="flex size-6 items-center justify-center rounded bg-primary text-white">
                <span className="material-symbols-outlined text-sm">agriculture</span>
              </div>
              <span className="text-sm font-semibold text-[#161613]">PAM</span>
              <span className="text-xs text-gray-500">© {new Date().getFullYear()} Productores Agroalimentarios de Michoacán</span>
            </div>
            <div className="flex gap-6">
              <Link className="text-sm text-gray-500 hover:text-primary" to="/support">Soporte</Link>
              <Link className="text-sm text-gray-500 hover:text-primary" to="/about">Nosotros</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Landing;