import React, { useState, useMemo, useEffect } from 'react';
import Navbar from '../../components/Navbar';
import { Link } from 'react-router-dom';
import { supabase, isOfflineMode } from '../../lib/supabase';
import { localProducers } from '../../lib/localData';
import type { Producer } from '../../data/producers';

const normalizeText = (text: string) =>
    text.toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');

type SortOption = 'relevancia' | 'rating' | 'estado' | 'nombre';

const Producers: React.FC = () => {
    const [producers, setProducers] = useState<Producer[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [loadError, setLoadError] = useState<string | null>(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCrop, setSelectedCrop] = useState('');
    const [selectedCert, setSelectedCert] = useState('');
    const [selectedAvail, setSelectedAvail] = useState('');
    const [sortBy, setSortBy] = useState<SortOption>('relevancia');

    // Cargar productores desde Supabase o fallback local
    useEffect(() => {
        const fetchProducers = async () => {
            setIsLoading(true);
            setLoadError(null);

            if (isOfflineMode) {
                setProducers(localProducers);
                setIsLoading(false);
                return;
            }

            const { data, error } = await supabase!
                .from('producers')
                .select('*')
                .order('rating', { ascending: false });

            if (error) {
                console.error('Error cargando productores:', error);
                setLoadError('Sin conexión a Supabase. Mostrando datos de muestra.');
                setProducers(localProducers);
            } else {
                setProducers(data || localProducers);
            }
            setIsLoading(false);
        };
        fetchProducers();
    }, []);

    const filteredProducers = useMemo(() => {
        let result = producers.filter(producer => {
            const normalizedSearch = normalizeText(searchTerm);
            const matchesSearch =
                searchTerm === '' ||
                normalizeText(producer.name).includes(normalizedSearch) ||
                normalizeText(producer.location).includes(normalizedSearch) ||
                normalizeText(producer.product).includes(normalizedSearch);

            const matchesCrop = selectedCrop === '' || producer.category === selectedCrop;

            let matchesCert = true;
            if (selectedCert) {
                if (selectedCert === 'senasica') matchesCert = producer.certifications.includes('SENASICA');
                else if (selectedCert === 'globalgap') matchesCert = producer.certifications.includes('GlobalG.A.P');
                else if (selectedCert === 'organico') matchesCert = producer.certifications.includes('Orgánico');
                else if (selectedCert === 'rainforest') matchesCert = producer.certifications.includes('Rainforest Alliance');
                else if (selectedCert === 'primus') matchesCert = producer.certifications.includes('PrimusGFS');
            }

            let matchesAvail = true;
            if (selectedAvail) {
                if (selectedAvail === 'immediate') matchesAvail = producer.availability_value === 'immediate' || producer.availability_value === 'year_round';
                else if (selectedAvail === 'upcoming') matchesAvail = producer.availability_value === 'upcoming';
                else if (selectedAvail === 'year_round') matchesAvail = producer.availability_value === 'year_round';
            }

            return matchesSearch && matchesCrop && matchesCert && matchesAvail;
        });

        // Sort
        switch (sortBy) {
            case 'rating':
                result = [...result].sort((a, b) => b.rating - a.rating);
                break;
            case 'estado': {
                const availOrder: Record<string, number> = { immediate: 0, year_round: 1, upcoming: 2, none: 3 };
                result = [...result].sort((a, b) => (availOrder[a.availability_value] || 9) - (availOrder[b.availability_value] || 9));
                break;
            }
            case 'nombre':
                result = [...result].sort((a, b) => a.name.localeCompare(b.name));
                break;
            default:
                break;
        }

        return result;
    }, [producers, searchTerm, selectedCrop, selectedCert, selectedAvail, sortBy]);

    const resetFilters = () => {
        setSearchTerm('');
        setSelectedCrop('');
        setSelectedCert('');
        setSelectedAvail('');
        setSortBy('relevancia');
    };

    return (
        <div className="flex flex-col min-h-screen bg-background-light font-display">
            <Navbar />

            {/* Page Header */}
            <div className="bg-white border-b border-[#e3e3de]">
                <div className="max-w-7xl mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8 text-center">
                    <div className="inline-flex items-center justify-center p-2 bg-primary/10 rounded-full mb-4">
                        <span className="material-symbols-outlined text-primary text-2xl">groups</span>
                    </div>
                    <h1 className="text-2xl sm:text-3xl md:text-4xl font-black text-[#161613] mb-3 sm:mb-4 tracking-tight">Directorio de Productores</h1>
                    <p className="text-base sm:text-xl text-gray-500 max-w-2xl mx-auto font-medium">
                        Conecta directamente con agricultores certificados de Michoacán. Sin intermediarios, trato justo.
                    </p>
                </div>
            </div>

            {/* Advanced Search & Filter Bar */}
            <div className="sticky top-16 z-30 bg-white/95 backdrop-blur-sm border-b border-[#e3e3de] shadow-sm">
                <div className="max-w-7xl mx-auto px-4 py-3 sm:py-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col gap-3 sm:gap-4">
                        <div className="flex flex-col xl:flex-row gap-3 sm:gap-4 items-center justify-between">
                            <div className="relative w-full xl:w-96 group shrink-0">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <span className="material-symbols-outlined text-gray-400 group-focus-within:text-primary transition-colors">search</span>
                                </div>
                                <input
                                    value={searchTerm}
                                    onChange={(e) => setSearchTerm(e.target.value)}
                                    className="block w-full pl-10 pr-4 py-2.5 rounded-xl border-gray-300 bg-gray-50 focus:bg-white focus:border-primary focus:ring-primary sm:text-sm transition-all shadow-sm"
                                    placeholder="Buscar por nombre, municipio..."
                                    type="text"
                                />
                                {searchTerm && (
                                    <button onClick={() => setSearchTerm('')} className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600">
                                        <span className="material-symbols-outlined text-sm">close</span>
                                    </button>
                                )}
                            </div>

                            <div className="w-full overflow-x-auto pb-1 xl:pb-0 no-scrollbar">
                                <div className="flex items-center gap-2 sm:gap-3">
                                    <div className="relative shrink-0">
                                        <span className="absolute left-3 top-2.5 material-symbols-outlined text-gray-500 text-[20px] pointer-events-none">nutrition</span>
                                        <select value={selectedCrop} onChange={(e) => setSelectedCrop(e.target.value)} className="pl-10 pr-8 py-2.5 rounded-xl border-gray-300 bg-white text-sm font-bold text-gray-700 focus:border-primary focus:ring-primary shadow-sm cursor-pointer appearance-none min-w-[160px] sm:min-w-[180px]">
                                            <option value="">Cultivos</option>
                                            <option value="aguacate">Aguacate Hass</option>
                                            <option value="berries">Berries</option>
                                            <option value="limon">Limón</option>
                                            <option value="mango">Mango</option>
                                            <option value="maiz">Granos</option>
                                        </select>
                                        <span className="absolute right-2 top-3 material-symbols-outlined text-gray-400 text-[18px] pointer-events-none">expand_more</span>
                                    </div>

                                    <div className="relative shrink-0">
                                        <span className="absolute left-3 top-2.5 material-symbols-outlined text-gray-500 text-[20px] pointer-events-none">workspace_premium</span>
                                        <select value={selectedCert} onChange={(e) => setSelectedCert(e.target.value)} className="pl-10 pr-8 py-2.5 rounded-xl border-gray-300 bg-white text-sm font-bold text-gray-700 focus:border-primary focus:ring-primary shadow-sm cursor-pointer appearance-none min-w-[160px] sm:min-w-[180px]">
                                            <option value="">Certificaciones</option>
                                            <option value="senasica">SENASICA</option>
                                            <option value="globalgap">GlobalG.A.P.</option>
                                            <option value="organico">Orgánico</option>
                                        </select>
                                        <span className="absolute right-2 top-3 material-symbols-outlined text-gray-400 text-[18px] pointer-events-none">expand_more</span>
                                    </div>

                                    <div className="relative shrink-0">
                                        <span className="absolute left-3 top-2.5 material-symbols-outlined text-gray-500 text-[20px] pointer-events-none">checklist</span>
                                        <select value={selectedAvail} onChange={(e) => setSelectedAvail(e.target.value)} className="pl-10 pr-8 py-2.5 rounded-xl border-gray-300 bg-white text-sm font-bold text-gray-700 focus:border-primary focus:ring-primary shadow-sm cursor-pointer appearance-none min-w-[160px] sm:min-w-[180px]">
                                            <option value="">Estado</option>
                                            <option value="immediate">Disponible</option>
                                            <option value="upcoming">Próximo</option>
                                            <option value="year_round">Todo el Año</option>
                                        </select>
                                        <span className="absolute right-2 top-3 material-symbols-outlined text-gray-400 text-[18px] pointer-events-none">expand_more</span>
                                    </div>

                                    {(selectedCrop || selectedCert || selectedAvail) && (
                                        <button onClick={resetFilters} className="text-sm font-bold text-red-500 hover:text-red-700 whitespace-nowrap px-2">
                                            Limpiar
                                        </button>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 overflow-x-auto pb-1 no-scrollbar">
                            <span className="text-xs font-bold text-gray-400 uppercase mr-1 shrink-0">Populares:</span>
                            <button onClick={() => setSelectedCert('organico')} className="whitespace-nowrap rounded-lg bg-white border border-[#e3e3de] px-3 py-1.5 text-xs font-bold text-[#5d5d55] hover:border-primary hover:text-primary transition-colors flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">eco</span> Orgánico
                            </button>
                            <button onClick={() => setSelectedCrop('limon')} className="whitespace-nowrap rounded-lg bg-white border border-[#e3e3de] px-3 py-1.5 text-xs font-bold text-[#5d5d55] hover:border-primary hover:text-primary transition-colors flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">nutrition</span> Limón
                            </button>
                            <button onClick={() => setSelectedAvail('immediate')} className="whitespace-nowrap rounded-lg bg-white border border-[#e3e3de] px-3 py-1.5 text-xs font-bold text-[#5d5d55] hover:border-primary hover:text-primary transition-colors flex items-center gap-1">
                                <span className="material-symbols-outlined text-[14px]">checklist</span> Disponible
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Grid Content */}
            <main className="flex-1 max-w-7xl mx-auto px-4 py-6 sm:py-8 sm:px-6 lg:px-8 w-full">
                {loadError && (
                    <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3 text-red-800">
                        <span className="material-symbols-outlined text-red-600">error</span>
                        <span className="font-medium">{loadError}</span>
                    </div>
                )}

                {isLoading ? (
                    <div className="flex flex-col items-center justify-center py-24 gap-4">
                        <svg className="animate-spin h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        <p className="text-gray-500 text-lg font-medium">Cargando directorio...</p>
                    </div>
                ) : (
                    <>
                        <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-3 sm:gap-4">
                            <span className="text-sm font-bold text-gray-500">Mostrando {filteredProducers.length} productores verificados</span>
                            <div className="flex items-center gap-2">
                                <span className="text-sm font-medium text-gray-500">Ordenar:</span>
                                <select value={sortBy} onChange={(e) => setSortBy(e.target.value as SortOption)} className="text-sm font-bold border-none bg-transparent focus:ring-0 cursor-pointer text-[#161613] pr-8">
                                    <option value="relevancia">Relevancia</option>
                                    <option value="rating">Calificación</option>
                                    <option value="estado">Estado</option>
                                    <option value="nombre">Nombre (A-Z)</option>
                                </select>
                            </div>
                        </div>

                        {filteredProducers.length > 0 ? (
                            <div className="grid grid-cols-1 gap-5 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3">
                                {filteredProducers.map((producer) => (
                                    <Link key={producer.id} to={`/producer/${producer.id}`} className="group flex flex-col h-full bg-white border border-gray-200 rounded-2xl overflow-hidden hover:shadow-xl hover:border-primary/30 transition-all duration-300">
                                        <div className="relative aspect-[4/3] w-full overflow-hidden bg-gray-100">
                                            <img src={producer.image} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" alt={producer.product} onError={(e) => { (e.target as HTMLImageElement).src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"><rect fill="%23e5e7eb" width="400" height="300"/><text fill="%239ca3af" font-size="18" x="50%" y="50%" text-anchor="middle" dy=".3em">Imagen no disponible</text></svg>'; }} />
                                            <div className="absolute top-3 left-3">
                                                <span className="bg-white/90 backdrop-blur text-[#161613] text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                                                    {producer.years}
                                                </span>
                                            </div>
                                            <div className="absolute bottom-3 right-3">
                                                <span className="bg-primary text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm flex items-center gap-1">
                                                    <span className="material-symbols-outlined text-[14px]">star</span> {producer.rating}
                                                </span>
                                            </div>
                                        </div>
                                        <div className="p-4 sm:p-5 flex-1 flex flex-col">
                                            <div className="mb-2">
                                                <h3 className="text-base sm:text-lg font-black text-[#161613] group-hover:text-primary transition-colors">{producer.name}</h3>
                                                <div className="flex items-center text-sm font-medium text-gray-500">
                                                    <span className="material-symbols-outlined text-[18px] mr-1">location_on</span> {producer.location}
                                                </div>
                                            </div>
                                            <div className="my-3 py-3 border-t border-b border-gray-100 flex justify-between items-center">
                                                <div className="flex flex-col">
                                                    <span className="text-xs font-bold text-gray-400 uppercase">Producto</span>
                                                    <span className="font-bold text-[#161613] text-sm sm:text-base">{producer.product}</span>
                                                </div>
                                                <div className="flex flex-col text-right">
                                                    <span className="text-xs font-bold text-gray-400 uppercase">Estado</span>
                                                    <span className={`font-bold text-sm sm:text-base ${producer.availability_color}`}>{producer.availability_text}</span>
                                                </div>
                                            </div>
                                            <div className="flex flex-wrap gap-2 mt-auto">
                                                {producer.certifications.map((cert, idx) => (
                                                    <span key={idx} className="px-2 py-1 bg-gray-100 rounded text-xs font-semibold text-gray-600 border border-gray-200">{cert}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </Link>
                                ))}
                            </div>
                        ) : (
                            <div className="flex flex-col items-center justify-center py-20 text-center">
                                <div className="bg-gray-100 p-6 rounded-full mb-4">
                                    <span className="material-symbols-outlined text-4xl text-gray-400">search_off</span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2">No se encontraron resultados</h3>
                                <p className="text-gray-500 max-w-md">Intenta ajustar tus filtros de búsqueda o prueba con otros términos.</p>
                                <button onClick={resetFilters} className="mt-6 text-primary font-bold hover:underline">
                                    Limpiar todos los filtros
                                </button>
                            </div>
                        )}
                    </>
                )}
            </main>

            {/* Footer */}
            <footer className="border-t border-[#e3e3de] bg-white mt-auto">
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

export default Producers;