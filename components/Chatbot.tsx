import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface Message {
  role: 'user' | 'model';
  text: string;
}

// ── URL del proxy seguro ───────────────────────────────────────────────────
// En desarrollo: llamada directa a Netlify Dev (netlify dev --port 3000)
// En producción: /.netlify/functions/gemini-proxy
const PROXY_URL = '/.netlify/functions/gemini-proxy';

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy el asistente virtual de PAM. ¿En qué puedo ayudarte hoy con el campo michoacano?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const location = useLocation();

  const hasBottomBar = location.pathname.startsWith('/producer/');

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // ── Respuestas offline (sin proxy disponible) ───────────────────────────
  const getOfflineResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    if (msg.includes('aguacate')) return 'El aguacate Hass de Michoacán es uno de los productos estrella de nuestra plataforma. La temporada principal es de octubre a febrero.';
    if (msg.includes('certif') || msg.includes('senasica')) return 'PAM trabaja con productores certificados por SENASICA, GlobalG.A.P. y Orgánico. Visita la sección de Certificaciones para más información.';
    if (msg.includes('registro') || msg.includes('registrar')) return 'Para registrarte, ve a la página de registro e ingresa tu nombre, teléfono y municipio. Recibirás un código SMS de verificación.';
    if (msg.includes('contacto') || msg.includes('soporte')) return 'Puedes contactar a nuestro equipo desde la sección de Soporte en el menú principal.';
    return 'Gracias por tu mensaje. Te recomiendo explorar nuestro directorio de productores verificados o la sección de certificaciones. ¿Hay algo específico en lo que pueda ayudarte?';
  };

  // ── Enviar mensaje ──────────────────────────────────────────────────────
  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage = inputText;
    setInputText('');
    const updatedMessages: Message[] = [...messages, { role: 'user', text: userMessage }];
    setMessages(updatedMessages);
    setIsLoading(true);

    try {
      // Historial para contexto (excluye el último mensaje de usuario ya que lo mandamos aparte)
      const history = updatedMessages.slice(0, -1).map(m => ({ role: m.role, text: m.text }));

      const res = await fetch(PROXY_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: userMessage, history }),
        signal: AbortSignal.timeout(15000),
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const data = await res.json();
      setMessages(prev => [...prev, { role: 'model', text: data.response || 'Sin respuesta del asistente.' }]);
    } catch {
      // Fallback offline si el proxy no está disponible
      await new Promise(resolve => setTimeout(resolve, 400));
      const response = getOfflineResponse(userMessage);
      setMessages(prev => [...prev, { role: 'model', text: response }]);
    }

    setIsLoading(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className={`fixed ${hasBottomBar ? 'bottom-36 sm:bottom-28' : 'bottom-6'} right-4 sm:right-6 z-50 flex flex-col items-end`}>
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] sm:w-[350px] md:w-[400px] h-[60vh] sm:h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-fade-in-up">
          {/* Header */}
          <div className="bg-pam-green p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">smart_toy</span>
              <div>
                <h3 className="font-bold text-sm">Asistente PAM</h3>
                <p className="text-xs text-white/80">Impulsado por Gemini</p>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="hover:bg-white/20 rounded-full p-1 transition-colors">
              <span className="material-symbols-outlined text-sm">close</span>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 bg-gray-50 scrollbar-thin">
            {messages.map((msg, idx) => (
              <div key={idx} className={`mb-4 flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[80%] p-3 rounded-2xl text-sm ${msg.role === 'user'
                  ? 'bg-pam-green text-white rounded-tr-none'
                  : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'}`}>
                  {msg.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start mb-4">
                <div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100 flex gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-75"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce delay-150"></div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>

          {/* Input */}
          <div className="p-3 bg-white border-t border-gray-100">
            <div className="relative flex items-center">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyPress}
                placeholder="Escribe tu duda aquí..."
                className="w-full pr-10 pl-4 py-3 bg-gray-100 border-none rounded-xl text-sm focus:ring-2 focus:ring-pam-green/20 focus:bg-white transition-all"
              />
              <button
                onClick={handleSend}
                disabled={isLoading || !inputText.trim()}
                className="absolute right-2 p-1.5 bg-pam-green text-white rounded-lg hover:bg-pam-green-dark disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                <span className="material-symbols-outlined text-sm">send</span>
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 sm:w-16 sm:h-16 bg-pam-green hover:bg-pam-green-dark text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      >
        <span className={`material-symbols-outlined text-2xl sm:text-3xl transition-transform duration-300 ${isOpen ? 'rotate-90 scale-0 absolute' : 'scale-100'}`}>
          chat_bubble
        </span>
        <span className={`material-symbols-outlined text-2xl sm:text-3xl transition-transform duration-300 ${!isOpen ? '-rotate-90 scale-0 absolute' : 'scale-100'}`}>
          expand_more
        </span>
        {!isOpen && (
          <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm font-medium px-4 py-2 rounded-xl shadow-md whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none hidden sm:block">
            ¿Tienes dudas? ¡Pregúntame!
          </span>
        )}
      </button>
    </div>
  );
};

export default Chatbot;