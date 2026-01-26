import React, { useState } from 'react';
import Sidebar from './Sidebar';

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
  progress?: number; // Opcional, para riego
  alert?: string; // Opcional, para plagas
}

// Datos iniciales simulados
const initialCrops: Crop[] = [
  {
    id: 1,
    name: "Aguacate Hass",
    location: "Huerta San José",
    hectares: 12.5,
    tonnage: 80,
    date: "Ayer",
    status: 'Ready',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCaxDG4zq5IH6QGafKs_aZYpyLr3pXrFHDZTEV1-6bKeH-1aK444XcB1jqE2OH503dYZ0wgNsu8DodrUHApcXC978xDVksDqrG1QAk4egBzVzsCAPCQB1npCL9R4CWnZUPXbhFUWZoEwVM_Bke01IEaQUIHIkzF4Wf-ndn_3S-TbCrON2tJfAwbTg0RqIwfPuxPivpClwucGiYrYYWpYqzq6K6vdB9l9XjI3Bwqao-f0FMN4Te3fft_aLWnwac-DDe-68sXcwgCCGcy"
  },
  {
    id: 2,
    name: "Limón Mexicano",
    location: "Parcela El Rosario",
    hectares: 5.0,
    tonnage: 25,
    date: "Nov 2023",
    status: 'Growing',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQTwhobZT1GC17Gz3Nipa3PU0cRkmMgLUtF0kCzbmvlJy7avle6_O3PE1-reWWjRqk_UObaAIR5oFQNlMzEjm3RHrs81lEmTrebvV5wy5bkRCRsyO7MxNKudyjvVPzTI4HmaS4epbpQz2TjOUbx4a4Ogjy4oAhD6P7DwidUzp2Cx4e7JbKvVLnRDPqJyg3NBVtrU9xvDnP0VXqed_q8VXYVtV9toCUsk9qpTNIBm1_FfhzEoAOWW4sy75eztZATN9gsO46_m698Jp-",
    progress: 70
  },
  {
    id: 3,
    name: "Zarzamora",
    location: "Invernadero B",
    hectares: 0.2, // 2000m2
    tonnage: 5,
    date: "Floración",
    status: 'Attention',
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAJaCpbbyp1tK5uBf3oeqMhbU30367JH1tMK96qkncUQ0_1spvXcCz0ZNwp_3892Hta0nES7Xd-sf4T53V9NRrCjr8mkWETrfswNiSa7wLclodIh7sJUzEJVgEY5W9poZeBTiwqOYRcEUuzhmg8nPdI-iXU_RFWu4gwOUWp5pDuyBIXq52iOJQRyDjM-WFIfeuoqZgO-_39L_UxsSrXV3BfLtEytzhaBnOps6-rUTDVpU6L0DAkZXJcaZQTeRGGcoQfTzQR32o-UqMA",
    alert: "Revisión de plaga"
  }
];

const Dashboard: React.FC = () => {
  const [crops, setCrops] = useState<Crop[]>(initialCrops);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Estados para Modales
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isDetailOpen, setIsDetailOpen] = useState(false);
  const [currentCrop, setCurrentCrop] = useState<Partial<Crop>>({}); // Para editar o agregar
  const [viewingCrop, setViewingCrop] = useState<Crop | null>(null); // Para ver detalles
  const [isEditing, setIsEditing] = useState(false);

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
      image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaxDG4zq5IH6QGafKs_aZYpyLr3pXrFHDZTEV1-6bKeH-1aK444XcB1jqE2OH503dYZ0wgNsu8DodrUHApcXC978xDVksDqrG1QAk4egBzVzsCAPCQB1npCL9R4CWnZUPXbhFUWZoEwVM_Bke01IEaQUIHIkzF4Wf-ndn_3S-TbCrON2tJfAwbTg0RqIwfPuxPivpClwucGiYrYYWpYqzq6K6vdB9l9XjI3Bwqao-f0FMN4Te3fft_aLWnwac-DDe-68sXcwgCCGcy' // Default image
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

  const handleDelete = (id: number) => {
    if (window.confirm("¿Estás seguro de que quieres eliminar este cultivo?")) {
      setCrops(prev => prev.filter(c => c.id !== id));
      setIsFormOpen(false); // Close if open
    }
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (isEditing && currentCrop.id) {
      // Update existing
      setCrops(prev => prev.map(c => (c.id === currentCrop.id ? currentCrop as Crop : c)));
    } else {
      // Add new
      const newId = Math.max(...crops.map(c => c.id), 0) + 1;
      const newCrop = { ...currentCrop, id: newId, date: 'Hoy' } as Crop;
      setCrops(prev => [newCrop, ...prev]);
    }
    setIsFormOpen(false);
  };

  // Helper para inputs del formulario
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setCurrentCrop(prev => ({
      ...prev,
      [name]: name === 'hectares' || name === 'tonnage' ? Number(value) : value
    }));
  };

  return (
    <div className="flex h-screen overflow-hidden bg-[#F5F5F5]">
      <Sidebar />
      <main className="flex-1 flex flex-col h-screen overflow-hidden relative">
        <header className="h-24 bg-white border-b border-gray-200 flex items-center justify-between px-8 shadow-sm z-10">
          <h1 className="text-3xl font-extrabold text-gray-800 tracking-tight">Mis Cultivos</h1>
          <div className="flex items-center gap-4">
            <button className="w-12 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600 relative">
              <span className="material-symbols-outlined text-3xl">notifications</span>
              <span className="absolute top-2 right-2 w-3 h-3 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            <button className="w-12 h-12 rounded-full hover:bg-gray-100 flex items-center justify-center text-gray-600">
              <span className="material-symbols-outlined text-3xl">help</span>
            </button>
          </div>
        </header>
        
        <div className="flex-1 overflow-y-auto p-6 lg:p-10">
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

          {/* Grid */}
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
                    
                    {/* Conditional Rendering for specific status details */}
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

            {/* Add New Placeholder Card (Optional redundant click) */}
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
                            <button type="submit" className="flex-1 py-3 bg-primary text-white font-bold rounded-xl hover:bg-primary-hover shadow-lg shadow-primary/30 transition-colors">Guardar</button>
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
                                <span className={`text-xl font-bold ${
                                    viewingCrop.status === 'Ready' ? 'text-green-600' : 
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
                            <button className="flex-1 bg-white border-2 border-gray-200 text-gray-700 font-bold py-4 rounded-xl hover:bg-gray-50 transition-colors flex items-center justify-center gap-2">
                                <span className="material-symbols-outlined">share</span> Compartir Ficha
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