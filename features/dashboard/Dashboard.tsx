import React, { useState, useEffect, useCallback } from 'react';
import Sidebar from '../../components/Sidebar';
import { supabase, isOfflineMode } from '../../lib/supabase';
import { localCropsDB } from '../../lib/localData';
import { useAuth } from '../../context/AuthContext';

// Definición de tipo para los cultivos
interface Crop {
  id: number;
  name: string;
  location: string;
  hectares: number;
  tonnage: number;
  date: string;
  status: 'Ready' | 'Growing' | 'Attention';
  image: string;
  progress?: number;
  alert?: string;
  user_id?: string;
}

const Dashboard: React.FC = () => {
  const { session } = useAuth();
  const [crops, setCrops] = useState<Crop[]>([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSaving, setIsSaving] = useState(false);
  const [dbError, setDbError] = useState<string | null>(null);

  // Estados para Modales
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [currentCrop, setCurrentCrop] = useState<Partial<Crop>>({});
  const [viewingCrop, setViewingCrop] = useState<Crop | null>(null);
  const [isEditing, setIsEditing] = useState(false);

  // --- Carga desde Supabase o fallback local ---
  const loadCrops = useCallback(async () => {
    setIsLoading(true);
    setDbError(null);

    if (isOfflineMode) {
      // Modo offline: leer de localStorage
      setCrops(localCropsDB.getAll() as unknown as Crop[]);
      setIsLoading(false);
      return;
    }

    if (!session?.user?.id) {
      setIsLoading(false);
      return;
    }

    const { data, error } = await supabase!
      .from('crops')
      .select('*')
      .eq('user_id', session.user.id)
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error cargando cultivos:', error);
      setDbError('Sin conexión a Supabase. Mostrando datos locales.');
      setCrops(localCropsDB.getAll() as unknown as Crop[]);
    } else {
      setCrops(data || []);
    }
    setIsLoading(false);
  }, [session?.user?.id]);

  useEffect(() => {
    loadCrops();
  }, [loadCrops]);

  // Filtrado
  const filteredCrops = crops.filter(crop =>
    crop.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    crop.location.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // --- Handlers ---

  const handleAddNew = () => {
    setCurrentCrop({
      name: '',
      location: '',
      hectares: 0,
      tonnage: 0,
      status: 'Growing',
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaxDG4zq5IH6QGafKs_aZYpyLr3pXrFHDZTEV1-6bKeH-1aK444XcB1jqE2OH503dYZ0wgNsu8DodrUHApcXC978xDVksDqrG1QAk4egBzVzsCAPCQB1npCL9R4CWnZUPXbhFUWZoEwVM_Bke01IEaQUIHIkzF4Wf-ndn_3S-TbCrON2tJfAwbTg0RqIwfPuxPivpClwucGiYrYYWpYqzq6K6vdB9l9XjI3Bwqao-f0FMN4Te3fft_aLWnwac-DDe-68sXcwgCCGcy'
    });
    setIsEditing(false);
    setIsFormOpen(true);
  };

  const handleEdit = (crop: Crop) => {
    setCurrentCrop({ ...crop });
    setIsEditing(true);
    setIsFormOpen(true);
  };

  const handleViewDetails = (crop: Crop) => {
    setViewingCrop(crop);
    setIsDetailOpen(true);
  };

  const handleDelete = async (id: number) => {
    if (!window.confirm('¿Estás seguro de que quieres eliminar este cultivo?')) return;
    if (isOfflineMode) {
      localCropsDB.delete(id);
      setCrops(prev => prev.filter(c => c.id !== id));
      setIsFormOpen(false);
      return;
    }
    const { error } = await supabase!.from('crops').delete().eq('id', id);
    if (error) {
      alert('Error al eliminar el cultivo. Intenta de nuevo.');
    } else {
      setCrops(prev => prev.filter(c => c.id !== id));
      setIsFormOpen(false);
    }
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSaving(true);

    if (isOfflineMode) {
      // Modo offline: localStorage
      if (isEditing && currentCrop.id) {
        localCropsDB.update(currentCrop.id, currentCrop as unknown as Parameters<typeof localCropsDB.update>[1]);
        setCrops(prev => prev.map(c => c.id === currentCrop.id ? { ...c, ...currentCrop } as Crop : c));
      } else {
        const newCrop = localCropsDB.insert({
          name: currentCrop.name || '',
          location: currentCrop.location || '',
          hectares: currentCrop.hectares || 0,
          tonnage: currentCrop.tonnage || 0,
          date: new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'short', year: 'numeric' }),
          status: currentCrop.status || 'Growing',
          image: currentCrop.image || '',
          progress: currentCrop.progress || 0,
          alert: currentCrop.alert || '',
        });
        setCrops(prev => [newCrop as unknown as Crop, ...prev]);
      }
      setIsSaving(false);
      setIsFormOpen(false);
      return;
    }

    if (!session?.user?.id) { setIsSaving(false); return; }

    if (isEditing && currentCrop.id) {
      const { error } = await supabase!
        .from('crops')
        .update({
          name: currentCrop.name,
          location: currentCrop.location,
          hectares: currentCrop.hectares,
          tonnage: currentCrop.tonnage,
          status: currentCrop.status,
        })
        .eq('id', currentCrop.id);

      if (error) {
        alert('Error al actualizar el cultivo.');
      } else {
        setCrops(prev => prev.map(c => (c.id === currentCrop.id ? { ...c, ...currentCrop } as Crop : c)));
      }
    } else {
      const { data, error } = await supabase!
        .from('crops')
        .insert({
          user_id: session.user.id,
          name: currentCrop.name,
          location: currentCrop.location,
          hectares: currentCrop.hectares,
          tonnage: currentCrop.tonnage,
          status: currentCrop.status,
          image: currentCrop.image,
          date: new Date().toLocaleDateString('es-MX', { day: 'numeric', month: 'short', year: 'numeric' }),
        })
        .select()
        .single();

      if (error) {
        alert('Error al guardar el cultivo.');
      } else if (data) {
        setCrops(prev => [data as Crop, ...prev]);
      }
    }

    setIsSaving(false);
    setIsFormOpen(false);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentCrop(prev => ({
      ...prev,
      [name]: name === 'hectares' || name === 'tonnage' ? Number(value) : value
    }));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#F5F5F5] pt-16 md:pt-0">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <header className="h-20 sm:h-24 bg-white border-b border-gray-200 flex items-center justify-between px-4 sm:px-8 shadow-sm z-10">
          <h1 className="text-xl sm:text-3xl font-extrabold text-gray-800 tracking-tight">Mis Cultivos</h1>
          <div className="hidden md:flex items-center gap-4">
            <button className="w-12 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600 relative">
              <span className="material-symbols-outlined text-3xl">notifications</span>
              <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
          {/* Error banner */}
          {dbError && (
            <div className="mb-6 bg-red-50 border border-red-200 rounded-xl p-4 flex items-center gap-3 text-red-800">
              <span className="material-symbols-outlined text-red-600">error</span>
              <span className="font-medium">{dbError}</span>
              <button onClick={loadCrops} className="ml-auto text-sm font-bold underline">Reintentar</button>
            </div>
          )}

          {/* Action Bar */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
            <div className="relative max-w-md w-full">
              <span className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <span className="material-symbols-outlined text-gray-400 text-2xl">search</span>
              </span>
              <input
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="block w-full pl-12 pr-4 py-4 rounded-xl border-gray-300 shadow-sm focus:border-primary focus:ring-primary text-lg"
                placeholder="Buscar cultivo o variedad..."
                type="text"
              />
            </div>
            <button
              onClick={handleAddNew}
              className="bg-pam-green hover:bg-pam-green-dark text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:translate-y-[-2px] active:translate-y-0 transition-all flex items-center gap-3 font-bold text-xl"
            >
              <span className="material-symbols-outlined text-3xl">add_circle</span>
              Agregar Nueva Cosecha
            </button>
          </div>

          {/* Loading state */}
          {isLoading ? (
            <div className="flex flex-col items-center justify-center py-24 gap-4">
              <svg className="animate-spin h-10 w-10 text-primary" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <p className="text-gray-500 text-lg font-medium">Cargando tus cultivos...</p>
            </div>
          ) : (
            /* Grid */
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 pb-10">

              {filteredCrops.map((crop) => (
                <article key={crop.id} className="bg-white rounded-2xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden flex flex-col group">
                  <div className="h-48 bg-gray-100 relative overflow-hidden">
                    <div className="absolute inset-0 bg-cover bg-center transition-transform duration-500 group-hover:scale-105" style={{ backgroundImage: `url('${crop.image}')` }}></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                    <div className="absolute bottom-4 left-4 text-white">
                      <h3 className="text-2xl font-bold">{crop.name}</h3>
                      <p className="text-white/90 font-medium">{crop.location}</p>
                    </div>
                    <div className="absolute top-4 right-4">
                      {crop.status === 'Ready' && (
                        <span className="inline-flex items-center gap-1 bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-bold border border-green-200 shadow-sm">
                          <span className="material-symbols-outlined text-lg">check_circle</span> Listo
                        </span>
                      )}
                      {crop.status === 'Growing' && (
                        <span className="inline-flex items-center gap-1 bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-bold border border-yellow-200 shadow-sm">
                          <span className="material-symbols-outlined text-lg">water_drop</span> Creciendo
                        </span>
                      )}
                      {crop.status === 'Attention' && (
                        <span className="inline-flex items-center gap-1 bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-bold border border-orange-200 shadow-sm">
                          <span className="material-symbols-outlined text-lg">warning</span> Atención
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="p-6 flex-1 flex flex-col gap-4">
                    <div className="grid grid-cols-2 gap-4 text-gray-600">
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Superficie</p>
                        <p className="text-lg font-bold text-gray-900">{crop.hectares} Has</p>
                      </div>
                      <div>
                        <p className="text-sm text-gray-500 font-medium">Estimado</p>
                        <p className="text-lg font-bold text-gray-900">{crop.tonnage} Ton</p>
                      </div>

                      {crop.progress !== undefined && (
                        <div className="col-span-2">
                          <p className="text-sm text-gray-500 font-medium mb-1">Progreso Riego</p>
                          <div className="w-full bg-gray-200 rounded-full h-3">
                            <div className="bg-blue-500 h-3 rounded-full" style={{ width: `${crop.progress}%` }}></div>
                          </div>
                        </div>
                      )}
                      {crop.alert && (
                        <div className="col-span-2 bg-red-50 p-3 rounded-lg border border-red-100">
                          <p className="text-sm text-red-800 font-bold flex items-center gap-2">
                            <span className="material-symbols-outlined text-lg">pest_control</span> {crop.alert}
                          </p>
                        </div>
                      )}
                      {!crop.progress && !crop.alert && (
                        <div>
                          <p className="text-sm text-gray-500 font-medium">Fecha</p>
                          <p className="text-lg font-bold text-gray-900">{crop.date}</p>
                        </div>
                      )}
                    </div>
                    <div className="mt-auto pt-4 flex gap-3">
                      <button
                        onClick={() => handleEdit(crop)}
                        className="flex-1 bg-white border-2 border-gray-200 text-gray-700 hover:border-primary hover:text-primary py-3 rounded-xl font-bold text-lg transition-colors flex items-center justify-center gap-2"
                      >
                        <span className="material-symbols-outlined">edit</span> Editar
                      </button>
                      <button
                        onClick={() => handleViewDetails(crop)}
                        className="flex-1 bg-primary/10 text-primary hover:bg-primary/20 py-3 rounded-xl font-bold text-lg transition-colors"
                      >
                        Ver Detalles
                      </button>
                    </div>
                  </div>
                </article>
              ))}

              {/* Add New Placeholder Card */}
              <article
                onClick={handleAddNew}
                className="border-2 border-dashed border-gray-300 rounded-2xl flex flex-col items-center justify-center p-8 hover:bg-gray-50 transition-colors cursor-pointer group min-h-[400px]"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center group-hover:bg-green-200 transition-colors mb-4">
                  <span className="material-symbols-outlined text-4xl text-[#388E3C]">add</span>
                </div>
                <h3 className="text-xl font-bold text-gray-800">Registrar Cultivo</h3>
                <p className="text-gray-500 text-center mt-2 max-w-[200px]">Agrega un nuevo terreno o invernadero a tu panel.</p>
              </article>
            </div>
          )}
        </div>

        {/* --- MODAL: ADD / EDIT CROP --- */}
        {isFormOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-lg overflow-hidden animate-fade-in-up">
              <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
                <h2 className="text-2xl font-bold text-gray-900">{isEditing ? 'Editar Cultivo' : 'Nueva Cosecha'}</h2>
                <button onClick={() => setIsFormOpen(false)} className="text-gray-400 hover:text-gray-600">
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <form onSubmit={handleSave} className="p-6 space-y-4">
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Nombre del Cultivo</label>
                  <input
                    name="name"
                    value={currentCrop.name}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border-gray-300 focus:border-primary focus:ring-primary"
                    type="text"
                    placeholder="Ej. Aguacate Hass"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Ubicación / Huerta</label>
                  <input
                    name="location"
                    value={currentCrop.location}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border-gray-300 focus:border-primary focus:ring-primary"
                    type="text"
                    placeholder="Ej. Parcela Norte"
                    required
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Hectáreas</label>
                    <input
                      name="hectares"
                      value={currentCrop.hectares}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border-gray-300 focus:border-primary focus:ring-primary"
                      type="number"
                      step="0.1"
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-bold text-gray-700 mb-1">Toneladas Est.</label>
                    <input
                      name="tonnage"
                      value={currentCrop.tonnage}
                      onChange={handleInputChange}
                      className="w-full rounded-xl border-gray-300 focus:border-primary focus:ring-primary"
                      type="number"
                      required
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold text-gray-700 mb-1">Estado</label>
                  <select
                    name="status"
                    value={currentCrop.status}
                    onChange={handleInputChange}
                    className="w-full rounded-xl border-gray-300 focus:border-primary focus:ring-primary"
                  >
                    <option value="Growing">Creciendo / En desarrollo</option>
                    <option value="Ready">Listo para Cosecha</option>
                    <option value="Attention">Requiere Atención</option>
                  </select>
                </div>
                <div className="pt-4 flex gap-3">
                  <button type="button" onClick={() => setIsFormOpen(false)} className="flex-1 py-3 text-gray-600 font-bold hover:bg-gray-100 rounded-xl transition-colors">Cancelar</button>
                  <button type="submit" disabled={isSaving} className="flex-1 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover shadow-lg shadow-primary/30 transition-colors disabled:opacity-70 flex items-center justify-center gap-2">
                    {isSaving ? (
                      <>
                        <svg className="animate-spin h-4 w-4" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Guardando...
                      </>
                    ) : 'Guardar'}
                  </button>
                </div>
                {isEditing && (
                  <button type="button" onClick={() => handleDelete(currentCrop.id!)} className="w-full text-center text-red-500 text-sm font-bold mt-2 hover:underline">
                    Eliminar Cultivo
                  </button>
                )}
              </form>
            </div>
          </div>
        )}

        {/* --- MODAL: VIEW DETAILS --- */}
        {isDetailOpen && viewingCrop && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
            <div className="bg-white rounded-3xl shadow-2xl w-full max-w-2xl overflow-hidden animate-fade-in-up flex flex-col max-h-[90vh]">
              <div className="relative h-64 bg-gray-200">
                <img src={viewingCrop.image} alt={viewingCrop.name} className="w-full h-full object-cover" />
                <button onClick={() => setIsDetailOpen(false)} className="absolute top-4 right-4 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 backdrop-blur transition-colors">
                  <span className="material-symbols-outlined">close</span>
                </button>
                <div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-6">
                  <h2 className="text-3xl font-black text-white">{viewingCrop.name}</h2>
                  <p className="text-white/90 font-medium text-lg">{viewingCrop.location}</p>
                </div>
              </div>
              <div className="p-8 overflow-y-auto">
                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Estado Actual</span>
                    <span className={`text-xl font-bold ${viewingCrop.status === 'Ready' ? 'text-green-600' :
                      viewingCrop.status === 'Attention' ? 'text-red-500' : 'text-yellow-600'
                      }`}>
                      {viewingCrop.status === 'Ready' ? 'Listo para Venta' :
                        viewingCrop.status === 'Attention' ? 'Problema Detectado' : 'En Crecimiento'}
                    </span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Fecha de Registro</span>
                    <span className="text-xl font-bold text-gray-800">{viewingCrop.date}</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Superficie Total</span>
                    <span className="text-xl font-bold text-gray-800">{viewingCrop.hectares} Hectáreas</span>
                  </div>
                  <div className="bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <span className="block text-xs font-bold text-gray-400 uppercase tracking-wider">Producción Estimada</span>
                    <span className="text-xl font-bold text-gray-800">{viewingCrop.tonnage} Toneladas</span>
                  </div>
                </div>

                <div className="bg-blue-50 p-5 rounded-2xl border border-blue-100 flex items-start gap-4">
                  <span className="material-symbols-outlined text-blue-600 text-3xl">analytics</span>
                  <div>
                    <h3 className="font-bold text-blue-900 text-lg">Proyección de Mercado</h3>
                    <p className="text-blue-800/80 text-sm mt-1 leading-relaxed">
                      Basado en tus {viewingCrop.tonnage} toneladas, el precio actual de mercado sugiere una oportunidad de venta alta en las próximas 2 semanas. Te recomendamos mantener el estado actualizado.
                    </p>
                  </div>
                </div>

                <div className="mt-8 flex gap-4">
                  <button onClick={() => { setIsDetailOpen(false); handleEdit(viewingCrop); }} className="flex-1 bg-primary text-white font-bold py-4 rounded-xl hover:bg-primary-hover shadow-lg transition-colors flex items-center justify-center gap-2">
                    <span className="material-symbols-outlined">edit</span> Editar Información
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

      </main>
    </div>
  );
};

export default Dashboard;