import React, { useState, useRef, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

interface Message {
  role: 'user' | 'model';
  text: string;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: '¡Hola! Soy el asistente virtual de PAM. ¿En qué puedo ayudarte hoy con el campo michoacano?' }
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [apiAvailable, setApiAvailable] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const chatSessionRef = useRef<any>(null);
  const location = useLocation();

  // Check if current page has a sticky footer (ProducerDetail)
  const hasBottomBar = location.pathname.startsWith('/producer/');

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Initialize Chat Session with Vite-compatible env var
  useEffect(() => {
    const apiKey = (import.meta as any).env?.VITE_GEMINI_API_KEY;
    if (apiKey) {
      import('@google/genai').then(({ GoogleGenAI }) => {
        const ai = new GoogleGenAI({ apiKey });
        chatSessionRef.current = ai.chats.create({
          model: 'gemini-2.0-flash',
          config: {
            systemInstruction: "Eres el asistente virtual experto de PAM (Productores Agroalimentarios de Michoacán). Tu objetivo es ayudar a productores a gestionar sus cultivos y a compradores a encontrar productos de alta calidad (aguacate, berries, limón, mango). Eres amable, profesional y conoces sobre certificaciones agrícolas (SENASICA, GlobalG.A.P), temporadas de cosecha en Michoacán y buenas prácticas agrícolas. Responde de manera concisa y útil.",
          },
        });
        setApiAvailable(true);
      }).catch(err => {
        console.warn("Gemini API no disponible:", err);
      });
    }
  }, []);

  // Pre-defined quick responses for when API is not available
  const getOfflineResponse = (userMessage: string): string => {
    const msg = userMessage.toLowerCase();
    if (msg.includes('aguacate')) return 'El aguacate Hass de Michoacán es uno de los productos estrella de nuestra plataforma. La temporada principal es de octubre a febrero. Puedes encontrar productores verificados en nuestro directorio.';
    if (msg.includes('certificación') || msg.includes('senasica') || msg.includes('certificado')) return 'PAM trabaja con productores que cuentan con certificaciones como SENASICA, GlobalG.A.P., y Orgánico. Visita la sección de Certificaciones para conocer más sobre cada una.';
    if (msg.includes('registro') || msg.includes('registrar')) return 'Para registrarte como productor o comprador, visita la página de registro. Necesitarás tu nombre, teléfono y ubicación.';
    if (msg.includes('contacto') || msg.includes('soporte') || msg.includes('ayuda')) return 'Puedes contactar a nuestro equipo de soporte por teléfono o WhatsApp. Visita la sección de Soporte para más información.';
    return 'Gracias por tu mensaje. Te recomiendo explorar nuestro directorio de productores verificados o la sección de certificaciones. ¿Hay algo específico en lo que pueda ayudarte?';
  };

  const handleSend = async () => {
    if (!inputText.trim()) return;

    const userMessage = inputText;
    setInputText('');
    setMessages(prev => [...prev, { role: 'user', text: userMessage }]);
    setIsLoading(true);

    if (chatSessionRef.current && apiAvailable) {
      try {
        const result = await chatSessionRef.current.sendMessageStream({ message: userMessage });

        let fullResponse = "";
        setMessages(prev => [...prev, { role: 'model', text: "" }]);

        for await (const chunk of result) {
          const text = chunk.text;
          if (text) {
            fullResponse += text;
            setMessages(prev => {
              const newMessages = [...prev];
              const lastMessage = newMessages[newMessages.length - 1];
              lastMessage.text = fullResponse;
              return newMessages;
            });
          }
        }
      } catch (error) {
        console.error("Error sending message to Gemini:", error);
        setMessages(prev => [...prev, { role: 'model', text: "Lo siento, tuve un problema al procesar tu solicitud. Por favor intenta de nuevo." }]);
      }
    } else {
      // Offline fallback with simulated delay
      await new Promise(resolve => setTimeout(resolve, 600));
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
      {/* Chat Window */}
      {isOpen && (
        <div className="mb-4 w-[calc(100vw-2rem)] sm:w-[350px] md:w-[400px] h-[60vh] sm:h-[500px] bg-white rounded-2xl shadow-2xl flex flex-col overflow-hidden border border-gray-200 animate-fade-in-up">
          {/* Header */}
          <div className="bg-pam-green p-4 flex items-center justify-between text-white">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined">smart_toy</span>
              <div>
                <h3 className="font-bold text-sm">Asistente PAM</h3>
                <p className="text-xs text-white/80">{apiAvailable ? 'Impulsado por Gemini' : 'Modo respuestas rápidas'}</p>
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
                    : 'bg-white text-gray-800 shadow-sm border border-gray-100 rounded-tl-none'
                  }`}>
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

        {/* Tooltip */}
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